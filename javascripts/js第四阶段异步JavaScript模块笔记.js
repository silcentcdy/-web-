/*
【异步 JavaScript 简介】
浏览器提供的许多功能（尤其是最有趣的那一部分）可能需要很长的时间来完成，因此需要异步完成，例如：

使用 fetch() 发起 HTTP 请求
使用 getUserMedia() 访问用户的摄像头和麦克风
使用 showOpenFilePicker() (en-US) 请求用户选择文件以供访问
因此，即使你可能不需要经常实现自己的异步函数，你也很可能需要正确使用它们。

在这篇文章中，我们将从同步函数长时间运行时存在的问题开始，并以此进一步认识异步编程的必要性。

[同步编程]
观察下面的代码：
*/
const name = 'Miriam';
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Miriam!"
/*
这段代码：

声明了一个叫做 name 的字符串常量
声明了另一个叫做 greeting 的字符串常量（并使用了 name 常量的值）
将 greeting 常量输出到 JavaScript 控制台中。
我们应该注意的是，实际上浏览器是按照我们书写代码的顺序一行一行地执行程序的。浏览器会等待代码的解析和工作，在上一行完成后才会执行下一行。这样做是很有必要的，因为每一行新的代码都是建立在前面代码的基础之上的。

这也使得它成为一个同步程序。

事实上，调用函数的时候也是同步的，就像这样：
*/
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}
const myName = 'Miriam';
const myGreeting = makeGreeting(myName);
console.log(myGreeting);
// "Hello, my name is Miriam!"
/*
在这里 makeGreeting() 就是一个同步函数，因为在函数返回之前，调用者必须等待函数完成其工作。

[一个耗时的同步函数]
如果同步函数需要很长的时间怎么办？

当用户点击“生成素数”按钮时，这个程序将使用一种非常低效的算法生成一些大素数。你可以控制要生成的素数数量，这也会影响操作需要的时间。

<label for="quota">素数个数：</label>
<input type="text" id="quota" name="quota" value="1000000">

<button id="generate">生成素数</button>
<button id="reload">重载</button>

<div id="output"></div>
*/
function generatePrimes(quota) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
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
  return primes;
}
document.querySelector('#generate').addEventListener('click', () => {
  const quota = document.querySelector('#quota').value;
  const primes = generatePrimes(quota);
  document.querySelector('#output').textContent = `完成！已生成素数${quota}个。`;
});
document.querySelector('#reload').addEventListener('click', () => {
  document.location.reload()
});
// 试着点击“生成素数”按钮。在程序显示“完成！”信息之前可能需要几秒钟（取决于你的电脑性能）。
/*
[耗时同步函数的问题]    
接下来的示例和上一个一样，不过我们增加了一个文本框供你输入。这一次，试着点击“生成素数”，然后在文本框中输入。

你会发现，当我们的 generatePrimes() 函数运行时，我们的程序完全没有反应：用户不能输入任何东西，也不能点击任何东西，或做任何其他事情。

这就是耗时的同步函数的基本问题。在这里我们想要的是一种方法，以让我们的程序可以：

1.通过调用一个函数来启动一个长期运行的操作
2.让函数开始操作并立即返回，这样我们的程序就可以保持对其他事件做出反应的能力
3.当操作最终完成时，通知我们操作的结果。
这就是异步函数为我们提供的能力，本模块的其余部分将解释它们是如何在 JavaScript 中实现的。

[事件处理程序]
我们刚才看到的对异步函数的描述可能会让你想起事件处理程序，这么想是对的。事件处理程序实际上就是异步编程的一种形式：你提供的函数（事件处理程序）将
在事件发生时被调用（而不是立即被调用）。如果“事件”是“异步操作已经完成”，那么你就可以看到事件如何被用来通知调用者异步函数调用的结果的。

一些早期的异步 API 正是以这种方式来使用事件的。XMLHttpRequest API 可以让你用 JavaScript 向远程服务器发起 HTTP 请求。
由于这样的操作可能需要很长的时间，所以它被设计成异步 API，你可以通过给 XMLHttpRequest 对象附加事件监听器来让程序在请求进展和最终完成时获得通知。

下面的例子展示了这样的操作。点击“点击发起请求”按钮来发送一个请求。我们将创建一个新的 XMLHttpRequest 并监听它的 loadend 事件。
而我们的事件处理程序则会在控制台中输出一个“完成！”的消息和请求的状态代码。

我们在添加了事件监听器后发送请求。注意，在这之后，我们仍然可以在控制台中输出“请求已发起”，也就是说，我们的程序可以在请求进行的同时继续运行，
而我们的事件处理程序将在请求完成时被调用。

<button id="xhr">点击发起请求</button>
<button id="reload">重载</button>

<pre readonly class="event-log"></pre>
*/
const log = document.querySelector('.event-log');
document.querySelector('#xhr').addEventListener('click', () => {
  log.textContent = '';
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('loadend', () => {
    log.textContent = `${log.textContent}完成！状态码：${xhr.status}`;
  });

  xhr.open('GET', 'https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json');
  xhr.send();
  log.textContent = `${log.textContent}请求已发起\n`;});
  
document.querySelector('#reload').addEventListener('click', () => {
  log.textContent = '';
  document.location.reload();
});
// 这就像我们在以前的模块中遇到的事件处理程序，只是这次的事件不是像点击按钮那样的用户行为，而是某个对象的状态变化。
/*

[回调]
PS：本部分主要是了解而已，下一文章才是要点

事件处理程序是一种特殊类型的回调函数。而回调函数则是一个被传递到另一个函数中的会在适当的时候被调用的函数。正如我们刚刚所看到的：
回调函数曾经是 JavaScript 中实现异步函数的主要方式。

然而，当回调函数本身需要调用其他同样接受回调函数的函数时，基于回调的代码会变得难以理解。当你需要执行一些分解成一系列异步函数的操作时，这将变得十分常见。例如下面这种情况：
*/
function doStep1(init) {
  return init + 1;
}
function doStep2(init) {
  return init + 2;
}
function doStep3(init) {
  return init + 3;
}
function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`结果：${result}`);
}
doOperation();

//现在我们有一个被分成三步的操作，每一步都依赖于上一步。在这个例子中，第一步给输入的数据加 1，第二步加 2，第三步加 3。从输入 0 开始，最终结果是 6（0+1+2+3）。
//作为同步代码，这很容易理解。但是如果我们用回调来实现这些步骤呢？

function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}
function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}
function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}
function doOperation() {
  doStep1(0, result1 => {
    doStep2(result1, result2 => {
      doStep3(result2, result3 => {
        console.log(`结果：${result3}`);
      });
    });
  });
}
doOperation();
/*

因为必须在回调函数中调用回调函数，我们就得到了这个深度嵌套的 doOperation() 函数，这就更难阅读和调试了。在一些地方这被称为“回调地狱”或“厄运金字塔”
（因为缩进看起来像一个金字塔的侧面）。

面对这样的嵌套回调，处理错误也会变得非常困难：你必须在“金字塔”的每一级处理错误，而不是在最高一级一次完成错误处理。
由于以上这些原因，大多数现代异步 API 都不使用回调。事实上，JavaScript 中异步编程的基础是 Promise，这也是我们下一篇文章要讲述的主题。

【如何使用 Promise】
在基于 Promise 的 API 中，异步函数会启动操作并返回 Promise 对象。然后，你可以将处理函数附加到 Promise 对象上，当操作完成时（成功或失败),这些处理函数将被执行。

[使用 fetch() API]
要做到这一点，我们将向服务器发出一个 HTTP 请求。在 HTTP 请求中，我们向远程服务器发送一个请求信息，然后它向我们发送一个响应。这次，我们将发送一个请求，
从服务器上获得一个 JSON 文件。还记得在上一篇文章中，我们使用 XMLHttpRequest API 进行 HTTP 请求吗？那么，在这篇文章中，我们将使用 fetch() API，
一个现代的、基于 Promise 的、用于替代 XMLHttpRequest 的方法。

把下列代码复制到你的浏览器 JavaScript 控制台中：
*/
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then( response => {
  console.log(`已收到响应：${response.status}`);
});

console.log("已发送请求……");
/*
我们在这里：

调用 fetch() API，并将返回值赋给 fetchPromise 变量。
紧接着，输出 fetchPromise 变量，输出结果应该像这样：Promise { <state>: "pending" }。这告诉我们有一个 Promise 对象，它有一个 state属性，值是 "pending"。"pending" 状态意味着操作仍在进行中。
将一个处理函数传递给 Promise 的 then() 方法。当（如果）获取操作成功时，Promise 将调用我们的处理函数，传入一个包含服务器的响应的 Response 对象。
输出一条信息，说明我们已经发送了这个请求。
完整的输出结果应该是这样的：

[
  Promise { <state>: "pending" }
已发送请求……
已收到响应：200
]

请注意，已发送请求…… 的消息在我们收到响应之前就被输出了。与同步函数不同，fetch() 在请求仍在进行时返回，这使我们的程序能够保持响应性。
响应显示了 200（OK）的状态码，意味着我们的请求成功了。

可能这看起来很像上一篇文章中的例子中我们把事件处理程序添加到 XMLHttpRequest 对象中。但不同的是，
我们这一次将处理程序传递到返回的 Promise 对象的 then() 方法中。

[链式使用 Promise]
在你通过 fetch() API 得到一个 Response 对象的时候，你需要调用另一个函数来获取响应数据。这次，我们想获得JSON格式的响应数据，所以我们会调用 Response 对象的 json() 方法。事实上，json() 也是异步的，因此我们必须连续调用两个异步函数。

试试这个：
*/
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise1.then( response => {
  const jsonPromise = response.json();
  jsonPromise.then( json => {
    console.log(json[0].name);
  });
});
/*
在这个示例中，就像我们之前做的那样，我们给 fetch() 返回的 Promise 对象添加了一个 then() 处理程序。但这次我们的处理程序调用 response.json() 方法，
然后将一个新的 then() 处理程序传递到 response.json() 返回的 Promise 中。

执行代码后应该会输出“baked beans”（“products.json”中第一个产品的名称）。

等等! 还记得上一篇文章吗？我们好像说过，在回调中调用另一个回调会出现多层嵌套的情况？我们是不是还说过，这种“回调地狱”使我们的代码难以理解？
这不是也一样吗，只不过变成了用 then() 调用而已？

当然如此。但 Promise 的优雅之处在于 then() 本身也会返回一个 Promise，这个 Promise 将指示 then() 中调用的异步函数的完成状态。
这意味着我们可以（当然也应该）把上面的代码改写成这样：
*/
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise2
  .then( response => {
    return response.json();
  })
  .then( json => {
    console.log(json[0].name);
  });
/*
不必在第一个 then() 的处理程序中调用第二个 then()，我们可以直接返回 json() 返回的 Promise(PS:也就是json的数据)，并在该返回值上调用第二个 "then()"。
这被称为 Promise 链，意味着当我们需要连续进行异步函数调用时，我们就可以避免不断嵌套带来的缩进增加。

在进入下一步之前，还有一件事要补充：我们需要在尝试读取请求之前检查服务器是否接受并处理了该请求。我们将通过检查响应中的状态码来做到这一点，
如果状态码不是“OK”，就抛出一个错误：
*/
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise3
  .then( response => {
    if (!response.ok) { //!符号表示取非，也就是相反面
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => {
    console.log(json[0].name);
  });
/*
[错误捕获]
这给我们带来了最后一个问题：我们如何处理错误？fetch() API 可能因为很多原因抛出错误（例如，没有网络连接或 URL 本身存在问题），
我们也会在服务器返回错误消息时抛出一个错误。

在上一篇文章中，我们看到在嵌套回调中进行错误处理非常困难，我们需要在每一个嵌套层中单独捕获错误。

Promise 对象提供了一个 catch() 方法来支持错误处理。这很像 then()：你调用它并传入一个处理函数。然后，当异步操作成功时，传递给 then() 的处理函数被调用，
而当异步操作失败时，传递给 catch() 的处理函数被调用。

如果将 catch() 添加到 Promise 链的末尾，它就可以在任何异步函数失败时被调用。于是，我们就可以将一个操作实现为几个连续的异步函数调用，并在一个地方处理所有错误。

试试这个版本的 fetch() 代码。我们使用 catch() 添加了一个错误处理函数，并修改了 URL（这样请求就会失败）。
*/
const fetchPromise4 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise4
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP 请求错误：${response.status}`);
    }
    return response.json();
  })
  .then( json => {
    console.log(json[0].name);
  })
  .catch( error => {
    console.error(`无法获取产品列表：${error}`);
  });

/*
[Promise 术语]
Promise 中有一些具体的术语值得我们弄清楚。
首先，Promise 有三种状态：

1.待定（pending）：初始状态，既没有被兑现，也没有被拒绝。这是调用 fetch() 返回 Promise 时的状态，此时请求还在进行中。
2.已兑现（fulfilled）：意味着操作成功完成。当 Promise 完成时，它的 then() 处理函数被调用。
3.已拒绝（rejected）：意味着操作失败。当一个 Promise 失败时，它的 catch() 处理函数被调用。
<注意，这里的“成功”或“失败”的含义取决于所使用的 API：例如，fetch() 认为服务器返回一个错误（如404 Not Found）时请求成功，但如果网络错误阻止请求被发送，则认为请求失败。>

有时我们用 已敲定（settled） 这个词同时表示 已兑现（fulfilled） 和 已拒绝（rejected） 两种情况。

如果一个 Promise 处于已决议（resolved）状态，或者它被“锁定”以跟随另一个 Promise 的状态，那么它就是 已兑现（fulfilled）。
(PS:文章 Let's talk about how to talk about promises 对这些术语的细节做了很好的解释。)

[合并使用多个 Promise]
当你的操作由几个异步函数组成，而且你需要在开始下一个函数之前完成之前每一个函数时，你需要的就是 Promise 链。但是在其他的一些情况下，
你可能需要合并多个异步函数的调用，Promise API 为解决这一问题提供了帮助。

有时你需要所有的 Promise 都得到实现，但它们并不相互依赖。在这种情况下，将它们一起启动然后在它们全部被兑现后得到通知会更有效率。
这里需要 Promise.all() 方法。它接收一个 Promise 数组，并返回一个单一的 Promise。

由Promise.all()返回的 Promise：

当且仅当数组中所有的 Promise 都被兑现时，才会通知 then() 处理函数并提供一个包含所有响应的数组，数组中响应的顺序与被传入 all() 的 Promise 的顺序相同。
会被拒绝——如果数组中有任何一个 Promise 被拒绝。此时，catch() 处理函数被调用，并提供被拒绝的 Promise 所抛出的错误。

(1)譬如：
*/
const fetchPromise5 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise6 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found'); //网址文件是不存在的
const fetchPromise7 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise5, fetchPromise6, fetchPromise7])
  .then( responses => {
    for (const response of responses) { //此类条件语句一般是一个常量 然后来源于其同名代码的复数形式
      console.log(`${response.url}:${response.status}`);
    }
  })
  .catch( error => {
    console.error(`获取失败：${error}`)
  });
/*

这里我们向三个不同的 URL 发出三个 fetch() 请求。如果它们都被兑现了，我们将输出每个请求的响应状态。如果其中任何一个被拒绝了，我们将输出失败的情况。
根据我们提供的 URL，应该所有的请求都会被兑现，尽管因为第二个请求中请求的文件不存在，服务器将返回 404（Not Found）而不是 200（OK）。所以输出应该是：

https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json：200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found：404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json：200

(2)如果我们用一个错误编码的 URL 尝试同样的代码，就像这样：
*/
const fetchPromise8 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise9 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise10 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise8, fetchPromise9, fetchPromise10])
  .then( responses => {
    for (const response of responses) {
      console.log(`${response.url}:${response.status}`);
    }
  })
  .catch( error => {
    console.error(`获取失败：${error}`)
  });
/*
……然后 catch() 处理程序将被运行，我们应该看到像这样的输出：

获取失败：TypeError: Failed to fetch

(3)有时，你可能需要等待一组 Promise 中的某一个 Promise 的执行，而不关心是哪一个。在这种情况下，你需要 Promise.any()。这就像 Promise.all()，
不过在 Promise 数组中的任何一个被兑现时它就会被兑现，如果所有的 Promise 都被拒绝，它也会被拒绝。
*/
const fetchPromise11 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise12 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise13 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise11, fetchPromise12, fetchPromise13])
  .then( response => {
    console.log(`${response.url}:${response.status}`);
  })
  .catch( error => {
    console.error(`获取失败：${error}`)
  });
/*
值得注意的是，在这种情况下，我们无法预测哪个获取请求会先被兑现。
(PS:这两个用于组合多个承诺的函数只是额外的 Promise 函数中的两个。要了解其余的内容，参见 Promise 参考文档。)

[async 和 await]
async 关键字为你提供了一种更简单的方法来处理基于异步 Promise 的代码。在一个函数的开头添加 async，就可以使其成为一个异步函数。
*/
async function myFunction() {
  // 这是一个异步函数
}
/*
在异步函数中，你可以在调用一个返回 Promise 的函数之前使用 await 关键字。这使得代码在该点上等待，直到 Promise 被完成，
这时 Promise 的响应被当作返回值，或者被拒绝的响应被作为错误抛出。

这使你能够编写像同步代码一样的异步函数。例如，我们可以用它来重写我们的 fetch 示例。
*/
async function fetchProducts() {
  try {
    // 在这一行之后，我们的函数将等待 `fetch()` 调用完成
    // 调用 `fetch()` 将返回一个“响应”或抛出一个错误
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP 请求错误：${response.status}`);
    }
    // 在这一行之后，我们的函数将等待 `response.json()` 的调用完成
    // `response.json()` 调用将返回 JSON 对象或抛出一个错误
    const json = await response.json();
    console.log(json[0].name);
  }
  catch(error) {
    console.error(`无法获取产品列表：${error}`);
  }
}

fetchProducts();
/*
这里我们调用 await fetch()，我们的调用者得到的并不是 Promise，而是一个完整的 Response 对象，就好像 fetch() 是一个同步函数一样。

我们甚至可以使用 try...catch 块来处理错误，就像我们在写同步代码时一样。

但请注意，这个写法只在异步函数中起作用。异步函数总是返回一个 Pomise，所以你不能做这样的事情：
*/
//promise异步函数错误调用示例，主要错在最后的两行代码，引用对象类型错误
async function fetchProducts() {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP 请求错误：${response.status}`);
    }
    const json = await response.json();
    return json;
  }
  catch(error) {
    console.error(`无法获取产品列表：${error}`);
  }
}

const json = fetchProducts();
console.log(json[0].name);   // json 是一个 Promise 对象，因此这句代码无法正常工作,并且该行代码是错误的

//相反，你需要做一些事情，比如：(正确的promise异步链调用代码示例)

async function fetchProducts() {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP 请求错误：${response.status}`);
    }
    const json = await response.json();
    return json;
  }
  catch(error) {
    console.error(`无法获取产品列表：${error}`);
  }
}

const jsonPromise = fetchProducts();
jsonPromise.then((json) => console.log(json[0].name)); //正确的promise调用函数代码行
/*
你可能会在需要使用 Promise 链地方使用 async 函数，这也使得 Promise 的工作更加直观。

请记住，就像一个 Promise 链一样，await 强制异步操作以串联的方式完成。如果下一个操作的结果取决于上一个操作的结果，这是必要的，但如果不是这样，
像 Promise.all() 这样的操作会有更好的性能。

<小结>
Promise 是现代 JavaScript 异步编程的基础。它避免了深度嵌套回调，使表达和理解异步操作序列变得更加容易，并且它们还支持一种类似于同步编程中( try...catch )语句的错误处理方式。

async 和 await 关键字使得从一系列连续的异步函数调用中建立一个操作变得更加容易，避免了创建显式 Promise 链，并允许你像编写异步代码那样编写同步代码。

Promise 在所有现代浏览器的最新版本中都可以使用；唯一会出现支持问题的地方是 Opera Mini 和 IE11 及更早的版本。
在这篇文章中，我们没有涉及到所有的 Promise 功能，只是介绍了最有趣和最有用的那一部分。随着你开始学习更多关于 Promise 的知识，你会遇到更多有趣的特性。

【如何实现基于 Promise 的 API】
通常情况下，当你实现一个基于 promise 的 API 时，你会使用事件、普通回调，或者消息传递模型来包裹一个异步操作。你将会使用一个 Promise 对象来合理的处理操作的成功或者失败。

[实现 alarm() API]

在这个示例中我们将会实现一个基于 promise 的 alarm API，叫做 alarm() 。它将以被唤醒人的名字和一个在人被唤醒前以毫秒为单位的延迟作为参数。
在延迟之后，本函数将会发送一个包含需要被唤醒人名字的 "Wake up!" 消息。

(1) 用 setTimeout() 包裹
我们将会使用 setTimeout() 来实现 alarm() 函数。setTimeout() 以一个回调函数和一个以毫秒为单位的延迟作为参数。当调用 setTimeout() 时，
它将启动一个设置为给定延迟的计时器，当时间过期时，它就会调用给定的回调函数。

在下面的例子中，我们使用一个回调函数和一个 1000 毫秒的延迟调用 setTimeout()：
*/
//<button id="set-alarm">Set alarm</button>
//<div id="output"></div>

const output = document.querySelector('#output');
const button = document.querySelector('#set-alarm');

function setAlarm() {
  window.setTimeout(() => {
    output.textContent = 'Wake up!';
  }, 1000);
}

button.addEventListener('click', setAlarm);

/*
(2) Promise() 构造器
我们的 alarm() 函数返回一个在定时器过期时才会被兑现的 Promise。它将会传递一个 "Wake up!" 消息到 then() 处理器中，也会在当调用者提供一个负延迟值时拒绝这个 promise。

这里的关键组件是 Promise() 构造器。Promise() 构造器使用单个函数作为参数。我们把这个函数称作执行器（executor）。当你创建一个新的promise的时候你需要实现这个执行器。

这个执行器本身采用两个参数，这两个参数都是函数，通常被称作 resolve 和 reject。在你的执行器实现里，你调用原始的异步函数。如果异步函数成功了，
就调用 resolve，如果失败了，就调用 reject。如果执行器函数抛出了一个错误，reject 会被自动调用。你可以将任何类型的单个参数传递到 resolve 和 reject 中。

所以我们可以像下面这样实现 alarm()：
*/
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error('Alarm delay must not be negative');
    }
    window.setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}
/*
此函数创建并且返回一个新的 Promise。对于执行器中的 promise，我们：

1.检查 delay（延迟）是否为负数，如果是的话就抛出一个错误。
2.调用 window.setTimeout()，传递一个回调函数和 delay（延迟）。当计时器过期时回调会被调用，在回调函数内，我们调用了 resolve，并且传递了 "Wake up!" 消息。

[使用 alarm() API]
这一部分同上一篇文章是相当相似的。我们可以调用 alarm()，在返回的 promise 中调用 then() 和 catch() 来设置 promise 兑现和拒绝状态的处理器。
*/
const name1 = document.querySelector('#name');
const delay1 = document.querySelector('#delay');
const button1 = document.querySelector('#set-alarm');
const output1 = document.querySelector('#output');

function alarm(person, delay) { //函数定义两个参数，一个是人名，一个是延迟时间长短
  return new Promise((resolve, reject) => { //这里的Promise也是定义了两个参数，一个是请求得到响应，一个是请求出现错误或者请求无服务的情况
    if (delay < 0) {
      throw new Error('Alarm delay must not be negative');
    }
    window.setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener('click', () => {
  alarm(name1.value, delay1.value)
    .then(message => output.textContent = message)
    .catch(error => output.textContent = `Couldn't set alarm: ${error}`);//这里的error是个变量，承接上面alarm函数定义的内容
});

/*
尝试对 "Name" 和 "Delay" 设置不同的值。尝试为 "Delay" 设置一个负值。

[在 alarm() API 上使用 async 和 await]
自从 alarm() 返回了一个 Promise，我们可以对它做任何我们可以对其他任何 promise 做的事情：Promise.all()，和 async / await：

<div>
    <label for="name"> Name:</label>
    <input id="name" type="text" size="10" value ="Mari">
</div>

<div>
    <label for="delay">Delay: </label>
    <input id="delay" type="text"  size="10" value="1000" > //size是定义方框长度的
</div>
    <button id = "set-alarm"> Set alarm </button>
    <div id="output"></div>
*/
const name2 = document.querySelector('#name');
const delay2 = document.querySelector('#delay');
const button2 = document.querySelector('#set-alarm');
const output2 = document.querySelector('#output');

function alarm(person, delay) { //函数定义两个参数，一个是人名，一个是延迟时间长短
  return new Promise((resolve, reject) => { //这里的Promise也是定义了两个参数，一个是请求得到响应，一个是请求出现错误或者请求无服务的情况
    if (delay < 0) {
      throw new Error('Alarm delay must not be negative');
    }
    window.setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener('click', async () => {
  try {
    const message = await alarm(name2.value, delay2.value);
    output.textContent = message;
  }
  catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
});
/*
【workers 简介】
在本模块的第一篇文章中，我们看到了当在你的程序中具有一个长期运行的的同步任务时发生了什么 ── 整个窗口变得完全没有响应。从根本上讲，
出现这种情况的原因是程序是单线程的。一个线程是程序遵循的一系列指令。因为程序由一个线程组成，它在同一时间只能做一件事情：
所以如果它正在等待我们的长期运行的同步调用返回，它就不能做其他任何事情。

Workers 给了你在不同线程中运行某些任务的能力，因此你可以启动任务，然后继续其他的处理（例如处理用户操作）。

但是这是要付出代价的。对于多线程代码，你永远不知道你的线程什么时候将会被挂起，其他线程将会得到运行的机会。因此，如果两个线程都可以访问相同的变量，
那么变量就有可能在任何时候发生意外的变化，这将导致很难发现的 Bug。

为了避免 Web 中的这些问题，你的主代码和你的 worker 代码永远不能直接访问彼此的变量。Workers 和主代码运行在完全分离的环境中，
只有通过相互发送消息来进行交互。特别是，这意味着 workers 不能访问 DOM（窗口、文档、页面元素等等）。

有三种不同类型的 workers：

1.dedicated workers (专用workers)
2.shared workers
3.service workers
在本文中，我们将介绍第一类 workers 的一个例子，然后简要的讨论另外两类。

使用 web workers
还记得在第一篇文章中，我们有一个计算质数的页面吗？我们将使用一个 worker 来运行质数运算，因此我们的页面对用户操作保持响应。

同步的质数生成器
让我们先看一下我们上一个例子中的 JavaScript：
*/
function generatePrimes(quota) {

  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
          return false;
       }
    }
    return true;
  }
//primes质数的意思  quota生成多少数量质数
  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes;
}

document.querySelector('#generate').addEventListener('click', () => {
  const quota = document.querySelector('#quota').value;
  const primes = generatePrimes(quota);
  document.querySelector('#output').textContent = `Finished generating ${quota} primes!`;
});

document.querySelector('#reload').addEventListener('click', () => {
  document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});

//在这个程序中，在我们调用 generatePrimes() 之后，程序变得完全没有响应。
/*

[用 worker 进行质数生成]
这里主要是实例教学，笔记主要在另外一个文件里

[其他类型的 worker]
我们刚刚创建的 worker 被称为 delicated worker。这意味着它由一个脚本实例使用。

不过，还有其他类型的 worker：

Shared Worker 可以由运行在不同窗口中的多个不同脚本共享。  
Service worker 的行为就像代理服务器，缓存资源以便于 web 应用程序可以在用户离线时工作。他们是渐进式 Web 应用的关键组件。

*/
