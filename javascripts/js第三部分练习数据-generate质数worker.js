// 监听主线程中的消息。是worker示例的API副脚本程序，响应主程序的监听行为
// 如果消息中的 command 是 "generate"，则调用 `generatePrimse()`
addEventListener("message", message => {
    if (message.data.command === 'generate') {
      generatePrimes(message.data.quota);
    }
  });
  
  // 生成质数 (非常低效,非常慢当数字达到一定程度)
  function generatePrimes(quota) {
  
    function isPrime(n) {
      for (let c = 2; c <= Math.sqrt(n); ++c) { //++c目前没见过，具体含义不清楚
        if (n % c === 0) {
            return false;
         }
      }
      return true;
    }
  
    const primes = [];
    const maximum = 1000000;
  
    while (primes.length < quota) {
      const candidate = Math.floor(Math.random() * (maximum + 1));
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }
  
    // 完成后给主线程发送一条包含我们生成的质数数量的消息消息。
    postMessage(primes.length);
  }

/*
请记住，只要主脚本创建 worker，这些代码就会运行。

worker 要做的第一件事情就是开始监听来自主脚本的消息。这通过使用 addEventListener() 实现，它在 worker 中是一个全局函数。
在 message 事件处理器内部，事件的 data 属性包含一个来自主脚本的参数的副本。如果主脚本传递 generate 命令，我们就调用 generatePrimes()，传入来自消息事件的 quota 值。

generatePrimes() 函数与同步版本类似，只不过我们在完成后向主脚本发送一条消息，而不是返回一个值。我们对此使用 <postMessage() (en-US)> 函数，
就像在 worker 中 addEventListener是全局函数一样。如我们所见，主脚本正在监听这条消息并且将会在收到消息后更新 DOM。

*/






