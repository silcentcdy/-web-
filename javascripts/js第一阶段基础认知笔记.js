/*

【什么是javascript】
JavaScript 是一种脚本，一门编程语言，它可以在网页上实现复杂的功能，网页展现给你的不再是简单的静态信息，
而是实时的内容更新，交互式的地图，2D/3D 动画，滚动播放的视频等等。JavaScript 怎能缺席。它是标准 Web 技术蛋糕的第三层
*/
//输入名字代码示例
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('输入一个新的名字：');
  para.textContent = '玩家 1:' + name;
}
/*
客户端（client-side）JavaScript 语言的核心包含一些普遍的编程特性，以让你可以做到如下的事情：

1、在变量中储存有用的值。比如上文的示例中，我们请求客户输入一个新名字，然后将其储存到 name 变量中。
2、操作一段文本（在编程中称为“字符串”（string））。上文的示例中，我们取字符串 "玩家 1："，然后把它和 name 变量连结起来，创造出完整的文本标签，
比如："玩家 1：小明"。
3、运行代码以响应网页中发生的特定事件。上文的示例中，我们用一个 click (en-US) 事件来检测按钮什么时候被点击，然后运行代码更新文本标签。
以及更多！
JavaScript 语言核心之上所构建的功能更令人兴奋。应用程序接口（Application Programming Interfaces（API））将为你的代码提供额外的超能力。
API (主要有两类)

浏览器 API 内建于 web 浏览器中，它们可以将数据从周边计算机环境中筛选出来，还可以做实用的复杂工作。
文档对象模型 API（DOM（Document Object Model）API） 能通过创建、移除和修改 HTML，为页面动态应用新样式等手段来操作 HTML 和 CSS。
比如当某个页面出现了一个弹窗，或者显示了一些新内容（像上文小 demo 中看到那样），这就是 DOM 在运行。

地理位置 API（Geolocation API） 获取地理信息。这就是为什么 谷歌地图 可以找到你的位置，而且标示在地图上。

画布（Canvas） 和 WebGL API 可以创建生动的 2D 和 3D 图像。人们正运用这些 web 技术制作令人惊叹的作品。
参见 Chrome Experiments 以及 webglsamples。

诸如 HTMLMediaElement 和 WebRTC 等影音类 API 让你可以利用多媒体做一些非常有趣的事，比如在网页中直接播放音乐和影片，
或用自己的网络摄像头获取录像，然后在其他人的电脑上展示（试用简易版 截图 demo 以理解这个概念）。

第三方 API 并没有默认嵌入浏览器中，一般要从网上取得它们的代码和信息。
每个浏览器标签页就是其自身用来运行代码的独立容器（这些容器用专业术语称为“运行环境”）。大多数情况下，每个标签页中的代码完全独立运行，
而且一个标签页中的代码不能直接影响另一个标签页（或者另一个网站）中的代码。这是一个好的安全措施，如果不这样，黑客就可以从其他网站盗取信息，等等。
(PS:以安全的方式在不同网站/标签页中传送代码和数据的方法是存在的，但这些技术较为高级，本课程不会涉及。)

JavaScript 运行次序
当浏览器执行到一段 JavaScript 代码时，通常会按从上往下的顺序执行这段代码。这意味着你需要注意代码书写的顺序。
如果你互换了代码里最初两行的顺序，会导致问题。浏览器开发者控制台将返回一个错误： TypeError: para is undefined。
这意味着 para 对象还不存在，所以我们不能为它增添一个事件监听器。
(注：这是一个很常见的错误，在引用对象之前必须确保该对象已经存在。)
[解释代码 vs 编译代码]
作为程序员，你或许听说过这两个术语：解释（interpret）和 编译 (compile)。在解释型语言中，代码自上而下运行，且实时返回运行结果。
代码在由浏览器执行前，不需要将其转化为其他形式。代码将直接以文本格式（text form）被接收和处理。

相对的，编译型语言需要先将代码转化（编译）成另一种形式才能运行。比如 C/C++ 先被编译成汇编语言，然后才能由计算机运行。
程序将以二进制的格式运行，这些二进制内容是由程序源代码产生的。
JavaScript 是轻量级解释型语言。浏览器接受到 JavaScript 代码，并以代码自身的文本格式运行它。
技术上，几乎所有 JavaScript 转换器都运用了一种叫做即时编译（just-in-time compiling）的技术；
[服务器端代码 vs 客户端代码]
你或许还听说过服务器端（server-side）和 客户端（client-side）代码这两个术语，尤其是在 web 开发时。
而服务器端代码在服务器上运行，接着运行结果才由浏览器下载并展示出来。流行的服务器端 web 语言包括：PHP、Python、Ruby、ASP.NET 以及...... JavaScript！
JavaScript 也可用作服务器端语言，比如现在流行的 Node.js 环境，
[动态代码 vs 静态代码]
“动态”一词既适用于客户端 JavaScript，又适用于描述服务器端语言。是指通过按需生成新内容来更新 web 页面 / 应用，使得不同环境下显示不同内容。
服务器端代码会在服务器上动态生成新内容，例如从数据库中提取信息。
而客户端 JavaScript 则在用户端浏览器中动态生成新内容，比如说创建一个新的 HTML 表格，用从服务器请求到的数据填充，然后在网页中向用户展示这个表格。
*/
//[简单按钮生成段落js代码示例]
//(内部 JavaScript)

/*<!DOCTYPE html>
<html lang="zh-Hans">
  <head>
    <meta charset="utf-8">
    <title>使用 JavaScript 的示例</title>*/
    //<script>
      document.addEventListener("DOMContentLoaded", function() {
        function createParagraph() {
          let para = document.createElement('p');
          para.textContent = '你点击了这个按钮！';
          document.body.appendChild(para);
        }

        const buttons = document.querySelectorAll('button');

        for(let i = 0; i < buttons.length ; i++) {
          buttons[i].addEventListener('click', createParagraph);
        }
      })
      
    //</script>
 /*   
  </head>
  <body>
    <button>点我呀</button>
  </body>
</html>
*/

/*
(外部 JavaScript)
将 <script> 元素替换为：
<script src="script.js" async></script>

(内联 JavaScript 处理器)
注意，有时候你会遇到在 HTML 中存在着一丝真实的 JavaScript 代码。它或许看上去像这样：

function createParagraph() {
  const para = document.createElement('p');
  para.textContent = '你点击了这个按钮！';
  document.body.appendChild(para);
}
<button onclick="createParagraph()">点我呀</button>
然而请不要这样做。 这将使 JavaScript 污染到 HTML，而且效率低下。
可以使用纯 JavaScript 结构来通过一个指令选取所有按钮。下文的这段代码即实现了这一目的：
const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
最常见的问题就是：HTML 元素是按其在页面中出现的次序调用的，如果用 JavaScript 来管理页面上的元素（更精确的说法是使用 文档对象模型 DOM），
若 JavaScript 加载于欲操作的 HTML 元素之前，则代码将出错。
在上文的“内部”、“外部”示例中，JavaScript 调用于文档头处，解析 HTML 文档体之前。这样做是有隐患的，需要使用一些结构来避免错误发生。

“内部”示例使用了以下结构：
document.addEventListener("DOMContentLoaded", function() {
  . . .
});
这是一个事件监听器，它监听浏览器的 "DOMContentLoaded" 事件，即 HTML 文档体加载、解释完毕事件。事件触发时将调用 " . . ." 处的代码，
从而避免了错误发生

“外部”示例中使用了 JavaScript 的一项现代技术（[async “异步”属性]）来解决这一问题，它告知浏览器在遇到 <script> 元素时不要中断后续 HTML 内容的加载。
<script src="script.js" async></script>

async 和 defer
上述的脚本阻塞问题实际有两种解决方案 —— async 和 defer
async 和 defer
上述的脚本阻塞问题实际有两种解决方案 —— async 和 defer
解决这一问题可使用 defer 属性，脚本将按照在页面中出现的顺序加载和运行：
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>
添加 defer 属性的脚本将按照在页面中出现的顺序加载，因此第二个示例可确保 jquery.js 必定加载于 script2.js 和 script3.js 之前，
同时 script2.js 必定加载于 script3.js 之前。

脚本调用策略小结：
如果脚本无需等待页面解析，且无依赖独立运行，那么应使用 async。
如果脚本需要等待页面解析，且依赖于其它脚本，调用这些脚本时应使用 defer，将关联的脚本按所需顺序置于 HTML 中。

【JavaScrit初体验】
示例——猜数字游戏
本文将向你演示如何构建下面的小游戏：
假设你的老板给你布置了以下游戏设计任务要求：

我想让你开发一个猜数字游戏。游戏应随机选择一个 100 以内的自然数，然后邀请玩家在 10 轮以内猜出这个数字。每轮后都应告知玩家的答案正确与否，
如果出错了，则告诉他数字是低了还是高了。并且应显示出玩家前一轮所猜的数字。一旦玩家猜对，或者用尽所有机会，游戏将结束。游戏结束后，
可以让玩家选择再次开始。

看到这个要求，首先我们要做的是将其分解成简单的可操作的任务，尽可能从程序员的思维去思考：

1、随机生成一个 100 以内的自然数。
2、记录玩家当前的轮数。从 1 开始。
3、为玩家提供一种猜测数字的方法。
4、一旦有结果提交，先将其记录下来，以便用户可以看到他们先前的猜测。
5、然后检查它是否正确。
6、如果正确：
显示祝贺消息。
阻止玩家继续猜测（这会使游戏混乱）。
显示控件允许玩家重新开始游戏。
7、如果出错，并且玩家有剩余轮次：
告诉玩家他们错了。
允许他们输入另一个猜测。
轮数加 1。
8、如果出错，并且玩家没有剩余轮次：
告诉玩家游戏结束。
阻止玩家继续猜测（这会使游戏混乱）。
显示控件允许玩家重新开始游戏。
9、一旦游戏重启，确保游戏的逻辑和 UI 完全重置，然后返回步骤 1。
看看我们如何将这些步骤转换为代码，构建这个示例，从而探索 JavaScript 的功能。
(猜数字游戏示例代码)*/


let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
/*
这段代码设置了存储数据的变量和常量以供程序使用。变量本质上是值（例如数字或字符串）的容器。你可以使用关键字 let （旧代码中使用 var）
和一个名字来创建变量（请参阅 let 和 var 之间的区别）。常量用于存储不希望更改的数据，用关键字 const 创建，本例中用常量来保存对界面元素的引用。
界面元素的文字可能会改变，但引用是不变的。

可以使用等号（=）和一个值来为变量赋值。

我们用数学算法得出一个 1 到 100 之间的随机数，并赋值给第一个变量（randomNumber）。
接下来的三个常量均存储着一个引用，分别指向 HTML 结果段落中某个元素，用于在代码后面段落中插入值： 
<p class="guesses"></p>
<p class="lastResult"></p>
<p class="lowOrHi"></p>

接下来的两个常量存储对表单文本输入和提交按钮的引用，并用于控制以后提交猜测：
<label for="guessField">请猜数：</label>
<input type="text" id="guessField" class="guessField">
<input type="submit" value="确定" class="guessSubmit">
倒数第二个变量存储一个计数器并初始化为 1（用于跟踪玩家猜测的次数），
最后一个变量存储对重置按钮的引用，这个按钮尚不存在（但稍后就有了）。
[函数（Function）]
function checkGuess() {
  alert('我是一个占位符');
}
函数是可复用的代码块，可以一次编写，反复运行，从而节省了大量的重复代码。它们真的很有用。定义函数的方法很多，但现在我们先集中考虑当前这个简单的方式。
这里我们使用关键字 function 、一个函数名、一对小括号定义了一个函数。随后是一对花括号（{}）。花括号内部是调用函数时要运行的所有代码。
[运算符（Operator）]
JavaScript 运算符允许我们执行比较，做数学运算，连接字符串，以及其他类似的事情
您也可以使用 + 运算符将文本字符串连接在一起（术语“串联”（concatenation））
还有一些快捷操作符可用，称为 [复合赋值操作符 (en-US)]。例如，如果你只希望在现有字符串末尾添加一个新串，可以这样做：
name += ' says hello!';

这等价于：
name = name + ' says hello!';

在执行真/假比较时（例如在条件语句中，见下表），我们使用 比较运算符，例如：
运算符	                 名称	                             示例
===	          严格等于（它们是否完全一样？）	           5 === 2 + 4
!==	          不等于（它们究竟哪里不一样？）	         'Chris' !== 'Ch' + 'ris'
<	                      小于	                             10 < 6
>	                      大于	                             10 > 20
[条件语句（Conditional）]
回到我们的 checkGuess() 函数，我们希望它不仅能够给出一个占位符消息，同时还能检查玩家是否猜对，并做出适当的反应。我想这并不难吧。
PS：主要笔记在实践文件哪里
[事件（Event）]
现在，我们有一个实现比较不错的 checkGuess() 函数了，但它现在什么事情也做不了，因为我们还没有调用它。理想中，我们希望在点击“确定”按钮时调用它，
为此，我们需要使用事件。事件就是浏览器中发生的事儿，比如点击按钮、加载页面、播放视频，等等，我们可以通过调用代码来响应事件。
侦听事件发生的结构称为事件监听器（Event Listener），响应事件触发而运行的代码块被称为事件处理器（Event Handler）。

在 checkGuess() 函数后添加以下代码：
guessSubmit.addEventListener('click', checkGuess);
这里为 guessSubmit 按钮添加了一个事件监听器。addEventListener() 方法包含两个可输入值（称为“参数”（argument）），
监听事件的类型（本例中为“click”），和当事件发生时我们想要执行的代码（本例中为 checkGuess() 函数）。
[注意，addEventListener() 中作为参数的函数名不加括号。]
[补全游戏功能]
在代码最后添加一个 setGameOver() 函数，然后我们一起来看看它：*/
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = '开始新游戏';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}
/*
前两行通过将 disable 属性设置为 true 来禁用表单文本输入和按钮。这样做是必须的，否则用户就可以在游戏结束后提交更多的猜测，游戏的规则将遭到破坏。
接下来的三行创建一个新的  <button> 元素，设置它的文本为“开始新游戏”，并把它添加到当前 HTML 的底部。
最后一行在新按钮上设置了一个事件监听器，当它被点击时，一个名为 resetGame() 的函数被将被调用。
*/
function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
/*
将 guessCount 重置为 1。
清除所有信息段落。
删除重置按钮。
启用表单元素，清空文本域并聚焦于此，准备接受新猜测的数字。
删除 lastResult 段落的背景颜色。
生成一个新的随机数，这样就可以猜测新的数字了！
[循环（Loop）]
上面代码中有一部分需要我们仔细研读，那就是 for 循环。循环是一个非常重要的编程概念，它让你能够重复运行一段代码，直到满足某个条件为止。
(循坏示例代码)
for (let i = 1; i < 21; i++) { console.log(i); }
控制台中打印出了数字 1 到 20。这正是循环所为。一个 for 循环需要三个输入值（参数）：

起始值：本例中我们从 1 开始计数，但其他任意数字也可以。 i也可以用任何你喜欢的名字替换，但一般约定用 i，因为它很短，且易于记忆。
退出条件：这里我们指定 i < 21，直到i不再小于 21 前循环将继续。当 i 达到 21 时，循环将退出。
增加器：我们指定 i++，意思是向 i 加 1。i 值的每次变动都会引发循环的执行，直到 i 值等于 21（如前文所讲）。
为简化问题，在本例中，我们使用console.log()在控制台打印出每次迭代时变量 i 的值。
(游戏中的示例代码)
let resetParas = document.querySelectorAll('.resultParas p');
for (let i = 0 ; i < resetParas.length ; i++) {
  resetParas[i].textContent = '';
}
这段代码通过 querySelectorAll() 方法创建了一个包含 <div class="resultParas"> 内所有段落的变量，然后通过循环迭代，删除每个段落的文本内容。

[浅谈对象（Object）]
guessField.focus();
这一行通过 focus() (en-US) 方法让光标在页面加载完毕时自动放置于 <input>  输入框内，这意味着玩家可以马上开始第一次猜测，而无需点击输入框。
这只是一个小的改进，却提高了可用性——为使用户能投入游戏提供一个良好的视觉线索。
深入分析一下。JavaScript 中一切都是对象。对象是存储在单个分组中的相关功能的集合。可以创建自己的对象，但这是较高阶的知识，我们今后才会谈及。
现在，仅需简要讨论浏览器内置的对象，它们已经能够做许多有用的事情。
const guessField = document.querySelector('.guessField');
使用 document 对象的 querySelector() 方法可以获得这个引用。querySelector() 需要一个信息——用一个 CSS 选择器 可以选中需要引用的元素。

[操作浏览器对象]
guessField.value = 'Hello';
value 属性表示当前文本区域中输入的值。在输入这条指令后，你将看到文本域区中的文本被我们修改了！

为了改变段落中的文本内容， 你需要用 textContent 属性来代替 value。试试这个：
guesses.textContent = '我的段落在哪里？';
页面上的每个元素都有一个 style 属性，它本身包含一个对象，其属性包含应用于该元素的所有内联 CSS 样式。
让我们可以使用 JavaScript 在元素上动态设置新的 CSS 样式。

【查找并解决 JavaScript 代码的错误】
一般来说，代码错误主要分为两种：
语法错误：代码中存在拼写错误，将导致程序完全或部分不能运行，通常你会收到一些出错信息。只要熟悉语言并了解出错信息的含义，你就能够顺利修复它们。

逻辑错误：有些代码语法虽正确，但执行结果和预期相悖，这里便存在着逻辑错误。这意味着程序虽能运行，但会给出错误的结果。
由于一般你不会收到来自这些错误的提示，它们通常比语法错误更难修复。

错误很容易跟踪，浏览器为你提供了几条有用的信息,从左到右依次为：
红色“!”表示这是一个错误。
1、一条出错信息，表示问题出在哪儿：“TypeError：guessSubmit.addeventListener is not a function”（类型错误：guessSubmit.addeventListener 不是函数）
点击 [详细了解] 将跳转到一个 MDN 页面，其中包含了此类错误超详细的解释。
2、JavaScript 文件名，点击将跳转到开发者工具的“调试器”标签页。如果你按照这个链接，你会看到错误突出显示的确切行。
3、出错的行，以及导致错误的首个字符号。这里错误来自 86 行，第 3 个字符。
4、出错信息显示“guessSubmit.addeventListener 不是一个函数”，说明这里可能存在拼写错误。如果你不确定某语法的拼写是否正确，可以到 MDN 上去查找，
目前最简便的方法就是去你喜欢的搜索引擎搜索“MDN + 语言特性”。就本文当前内容你可以点击：addEventListener()。
5、因此这里错误显然是我们把函数名写错造成的。请记住，JavaScript 区分大小写，所以任何轻微的不同或大小写问题都会导致出错。
将 addeventListener 改为 addEventListener 便可解决。
PS：错误类型修复示例笔记在另一个HTML文件里更清楚
注：console.log() 是一个非常实用的调试功能，它可以把值打印到控制台。因此我们将其置于代码第 48 行时，它会将 lowOrHi 的值打印至控制台。
[逻辑错误]
游戏的逻辑肯定是哪里出现了问题，因为游戏并没有返回错误，只是不能正确运行。
(随机数设置示例代码)
首先，我们调用 Math.random(),它生成一个在 0 和 1 之间的十进制随机数，例如 0.5675493843。
Math.random()

接下来，我们把调用 Math.random() 的结果作为参数传递给 Math.floor()，它会舍弃小数部分返回与之最接近的整数。然后我们给这个结果加上 1：
Math.floor(Math.random()) + 1

由于将一个 0 和 1 之间的随机小数的小数部分舍弃，返回的整数一定为 0，因此在此基础上加 1 之后返回值一定为 1。要在舍弃小数部分之前将它乘以 100。
便可得到 0 到 99 之间的随机数：
Math.floor(Math.random() * 100);

然后再加 1，便可得到一个 100 以内随机的自然数：
Math.floor(Math.random() * 100) + 1;
[其它常见错误]
SyntaxError: missing ; before statement
（语法错误：语句缺少分号）
这个错误通常意味着你漏写了一行代码最后的分号，但是此类错误有时候会更加隐蔽。
let userGuess = Number(guessField.value);
改成
let userGuess === Number(guessField.value);
将抛出一个错误。因为系统认为你在做其他事情。
请不要把赋值运算符（=，为一个变量赋值）和严格等于运算符（===，比较两个值是否相等，返回 true/false）弄混淆。

SyntaxError: missing ) after argument list
（语法错误：参数表末尾缺少括号）
这个很简单。通常意味着函数/方法调用后的结束括号忘写了。

SyntaxError: missing : after property id(miss后面就是缺少的符号)
（语法错误：属性 ID 后缺少冒号）
JavaScript 对象的形式有错时通常会导致此类错误，如果把
function checkGuess() {
写成了
function checkGuess( {
浏览器会认为我们试图将函数的内容当作参数传回函数。写圆括号时要小心！

SystaxError: missing } after function body
（语法错误：函数体末尾缺少花括号）
这个简单。通常意味着函数或条件结构中丢失了一个花括号。如果我们将 checkGuess() 函数末尾的花括号删除，就会得到这个错误。

SyntaxError: expected expression, got 'string'
（语法错误：得到一个 'string' 而非表达式）
或者
SyntaxError: unterminated string literal
（语法错误：字符串字面量未正常结束）
这个错误通常意味着字符串两端的引号漏写了一个。如果你漏写了字符串开始的引号，将得到第一条出错信息，这里的 'string' 将被替换为浏览器发现的意外字符。
如果漏写了末尾的引号将得到第二条。

对于所有的这些错误，想想我们在实例中是如何逐步解决的。错误出现时，转到错误所在的行观察是否能发现问题所在。记住，错误不一定在那一行，
错误的原因也可能和我们在上面所说的不同！

【如何存储你需要的信息 — 变量】
一个变量，就是一个用于存放数值的容器。这个数值可能是一个用于累加计算的数字，或者是一个句子中的字符串。变量的独特之处在于它存放的数值是可以改变的。
变量示例代码(输入名字)
*/
const button = document.querySelector('button');
button.onclick = function() {
  let name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
}
/*
变量的另一个特性就是它们能够存储任何的东西 -- 不只是字符串和数字。变量可以存储更复杂的数据，甚至是函数。你将在后续的内容中体验到这些用法。

我们说，变量是用来存储数值的，那么有一个重要的概念需要区分。变量不是数值本身，它们仅仅是一个用于存储数值的容器。
你可以把变量想象成一个个用来装东西的纸箱子。

[声明变量]
要想使用变量，你需要做的第一步就是创建它 -- 更准确的说，是声明一个变量。声明一个变量的语法是在 var 或 let 关键字之后加上这个变量的名字
在 JavaScript 中，所有代码指令都会以分号结尾 (;) — 如果忘记加分号，你的单行代码可能执行正常，但是在多行代码在一起的时候就可能出错。
你可以像这样在声明变量的时候给变量初始化：
let myName = 'Chris';
你可以在初始化变量之后再实际声明它，并且它仍然可以工作。这是因为变量的声明通常在其余的代码执行之前完成。
这叫做顶置—阅读var hoisting来了解更多细节。
var 与 let 的区别

你可以在初始化一个变量之后用 var 声明它，它仍然可以工作。例如：
myName = 'Chris';

function logName() {
  console.log(myName);
}
logName();
var myName;

Note: 只有在 web 文档中运行多行 JavaScript 时才会有这种效果，当在 JavaScript 控制台中键入单独的行，这将不起作用。
(这是由于变量的提升，更多细节请阅读[变量提升]。)
其次，当你使用 var 时，可以根据需要多次声明相同名称的变量，但是 let 不能。以下将有效：
var myName = 'Chris';
var myName = 'Bob';

但是以下内容会在第二行引发错误：
let myName = 'Chris';
let myName = 'Bob';

你必须这样做：
let myName = 'Chris';
myName = 'Bob';
同样，这是一个明智的语言决定。没有理由重新声明变量——这只会让事情变得更加混乱。
(PS:尽量使用let变量，let变量表达更好更简洁，同时浏览器的支持也好;var变量是较老的变量代码，存在历史性的原因，主要是支持哪些旧一些的浏览器)
关于变量命名的规则
你可以给你的变量赋任何你喜欢的名字，但有一些限制。一般你应当坚持使用拉丁字符 (0-9,a-z,A-Z) 和下划线字符。
你不应当使用规则之外的其他字符，因为它们可能引发错误，或对国际用户来说难以理解。

变量名不要以下划线开头—— 以下划线开头的被某些 JavaScript 设计为特殊的含义，因此可能让人迷惑。
变量名不要以数字开头。这种行为是不被允许的，并且将引发一个错误。

一个可靠的命名约定叫做 "小写驼峰命名法"，用来将多个单词组在一起，小写整个命名的第一个字母然后大写剩下单词的首字符。
我们已经在文章中使用了这种命名方法。

让变量名直观，它们描述了所包含的数据。不要只使用单一的字母/数字，或者长句。

变量名大小写敏感——因此myage与myAge是 2 个不同的变量。

最后也是最重要的一点—— 你应当避免使用 JavaScript 的保留字给变量命名。保留字，即是组成 JavaScript 的实际语法的单词！
因此诸如 var, function, let和 for等，都不能被作为变量名使用。浏览器将把它们识别为不同的代码项，因此你将得到错误。
好的命名示例：
age
myAge
init
initialColor
finalOutputValue
audio1
audio2

[变量类型]
(Number)
你可以在变量中存储数字，不论这些数字是像 30（也叫整数）这样，或者像 2.456 这样的小数（也叫做浮点数）。
与其他编程语言不同，在 JavaScript 中你不需要声明一个变量的类型。当你给一个变量数字赋值时，不需要用引号括起来。 
let myAge = 17;
(String)--字符串的意思
字符串是文本的一部分。当你给一个变量赋值为字符串时，你需要用单引号或者双引号把值给包起来，否则 JavaScript 将会把这个字符串值理解成别的变量名。
let dolphinGoodbye = 'So long and thanks for all the fish';
(Boolean)
Boolean 的值有 2 种：true 或 false。它们通常被用于在适当的代码之后，测试条件是否成立。举个例子，一个简单的示例如下： 
let iAmAlive = true;
然而实际上通常是以下用法：
let test = 6 < 3;
这是使用“小于”操作符（<）来测试 6 小于 3。正如你所料的，将会返回false，因为 6 并不小于 3！在这个课程中，以后你将会学到许多有关操作符的知识。
(Array)
数组是一个单个对象，其中包含很多值，方括号括起来，并用逗号分隔。尝试在您的控制台输入以下行：
let myNameArray = ['Chris', 'Bob', 'Jim'];
let myNumberArray = [10,15,40];
当数组被定义后，您可以使用如下所示的语法来访问各自的值，例如下行：
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
此处的方括号包含一个索引值，该值指定要返回的值的位置。您可能已经注意到，计算机从 0 开始计数，而不是像我们人类那样的 1。
在以后的文章，你将更多地了解数组。
(Object)
在编程中，对象是现实生活中的模型的一种代码结构。您可以有一个简单的对象，代表一个停车场，并包含有关其宽度和长度的信息
，或者您可以有一个代表一个人的对象，并包含有关他们的名字，身高，体重，他们说什么语言，如何说 你好，他们，等等。
尝试在您的控制台输入以下行：
let dog = { name : 'Spot', breed : 'Dalmatian' };
要检索存储在对象中的信息，可以使用以下语法：
dog.name
我们现在不会看对象了 - 您可以在将来的模块中了解更多关于这些对象的信息。
动态类型
JavaScript 是一种“动态类型语言”，这意味着不同于其他一些语言 (译者注：如 C、JAVA)，您不需要指定变量将包含什么数据类型（例如 number 或 string）

例如，如果你声明一个变量并给它一个带引号的值，浏览器就会知道它是一个字符串：

let myString = 'Hello';
即使它包含数字，但它仍然是一个字符串，所以要小心：
let myNumber = '500';  // oops, this is still a string
typeof myNumber;
myNumber = 500;  // much better — now this is a number
typeof myNumber
尝试依次将上述代码输入您的控制台，看看结果是什么（无须输入//之后的注释）
。我们使用了一个名为typeof的特殊的操作符 ——它会返回所传递给它的变量的数据类型。

【JavaScript 中的基础数学 — 数字和操作符】
在编程中，即使是人人熟知的最普遍的十进制数，也比你想象的要复杂的多。我们使用不同的术语来描述不同类型的十进制数，例如：
整数              就是整数,例如 10, 400, 或者 -5.
浮点数 (浮点)     有小数点或小数位，例如 12.5，和 56.7786543。
双精度            双精度是一种特定类型的浮点数，它们具有比标准浮点数更高的精度（这意味着它们精确到更大的小数位数）。

二进制 — 计算机的最基础语言—— 0 和 1
八进制 — 基数 8，每列使用 0-7
十六进制 — 基数 16，每列使用 0-9，然后使用 a-f。在 CSS 中设置颜色时，可能会遇到这些数字。
[算术运算符]
算术运算符是我们用来做和的基本运算符：

运算符	名称	作用	示例
+	加法	两个数相加。	6 + 9
-	减法	从左边减去右边的数。	20 - 15
*	乘法	两个数相乘。	3 * 7
/	除法	用右边的数除左边的数	10 / 5
%	求余 (有时候也叫取模)	在你将左边的数分成同右边数字相同的若干整数部分后，返回剩下的余数
8 % 3 (返回 2，8 除以 3 的倍数，余下 2。)
**	幂	取底数的指数次方，即指数所指定的底数相乘。它在 EcmaScript 2016 中首次引入。
5 ** 5 (返回 3125，相当于 5 * 5 * 5 * 5 * 5 。)
PS:算术计算的数字被称为 操作数 (operands (en-US))。
有时你可能会看到使用较旧的 Math.pow() 方法表达的指数，该方法的工作方式非常相似。
例如，在 Math.pow(7, 3)  中，7 是基数，3 是指数，因此表达式的结果是 343。

这是因为运算符优先级 —— 一些运算符将在计算算式（在编程中称为表达式）的结果时先于其他运算符被执行。
JavaScript 中的运算符优先级与学校的数学课程相同 - 乘法和除法总是先完成，然后是加法和减法（总是从左到右进行计算）。
Note: 注意：可以在表达式和运算符中找到所有 JavaScript 运算符的完整列表及其优先级。

[赋值运算符]
赋值运算符是向变量分配值的运算符。我们已经使用了最基本的一个很多次了：=，它只是将右边的值赋给左边的变量，
但是还有一些更复杂的类型，它们提供了有用的快捷方式，可以使您的代码更加清洁和高效。最常见的如下：

运算符	      名称	              作用	                                     示例	            等价于(在每行的下面)
+=	         加法赋值	       右边的数值加上左边的变量，然后再返回新的变量。	x = 3;x += 4;
x = 3;
x = x + 4;
-=	         减法赋值	       左边的变量减去右边的数值，然后再返回新的变量。	 x = 6;x -= 3;
x = 6;
x = x - 3;
*=	         乘法赋值	       左边的变量乘以右边的数值，然后再返回新的变量。	  x = 2;x *= 3;
x = 2;
x = x * 3;
/=	         除法赋值	        左边的变量除以右边的数值，然后再返回新的变量。 	x = 10;x /= 5;
x = 10;
x = x / 5;
Note: 虽然有很多可用的赋值运算符, 但是这些是你现在应该学习的基本的一类。

比较运算符
运算符	         名称	                       作用	                          示例
===	           严格等于	             测试左右值是否相同	                   5 === 2 + 4
!==	          严格不等于     	       测试左右值是否不相同	                 5 !== 2 + 3
<	              小于	               测试左值是否小于右值。	                  10 < 6
>	               大于	               测试左值是否大于右值	                   10 > 20
<=	         小于或等于	             测试左值是否小于或等于右值。	            3 <= 2
>=	         大于或等于	             测试左值是否大于或等于正确值。	           5 >= 4

Note: 您可能会看到有些人在他们的代码中使用==和!=来判断相等和不相等，这些都是 JavaScript 中的有效运算符，
但它们与===/!==不同，前者测试值是否相同，但是数据类型可能不同，而后者的[严格版本]测试值和数据类型是否相同。严格的版本往往导致更少的错误，
如果您尝试在控制台中输入这些值，您将看到它们都返回 true/false 值 

当我们在以后的的文章中查看条件语句时，我们将介绍如何编写这样的逻辑。现在，我们来看一个简单的例子：(示例代码-按钮所处状态)
<button>Start machine</button>
<p>The machine is stopped.</p>
*/
const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}
/*
我们正在测试一个按钮的文本内容是否包含某个字符串 - 但它仍然是工作原理。如果按钮当前为“启动机器（start machine）”，
则将其标签更改为“停止机器（stop machine）”，并根据需要更新标签。如果按钮上写着“停机”时被按下，我们将显示回原来的内容。

Note: 这种在两个状态之间来回交换的行为通常被称为 切换 (toggle)。它在一个状态和另一个状态之间切换 - 点亮，熄灭等
如果您喜欢数学，并希望阅读更多关于它如何在 JavaScript 中实现的，
那么你可以在 MDN's main JavaScript 部分读到更多关于它的内容。对于学习数字与日期 和 表达式与运算符 来说，那是一个不错的地方。

【文本处理 — JavaScript 中的字符串】
 [字符串 — 基本知识]
字符串与数字的处理方式第一眼看上去十分相似，但是当您深入挖掘时，您将会看到一些显著的差异。
let string = 'The revolution will not be televised.';
string;
就像我们处理数字一样，我们声明一个变量，用一个字符串值初始化它，然后返回值。这里惟一的区别是，在编写字符串时，我们需要在字符串上加上引号。
let badString = This is a test;
let badString = 'This is a test;
let badString = This is a test';
这些行不起作用，因为没有引号的任何文本字符串都被假定为变量名、属性名、保留字或类似。如果浏览器不能找到它，
那么将会引发语法错误 (例如:"missing ; before statement")。
如果浏览器能够识别字符串从哪里开始，但是不能找到字符串的结尾符，如第二行所示，那么它则会提示这样的错误 (“unterminated string literal”)。
单引号和双引号
在 JavaScript 中，您可以选择单引号或双引号来包裹字符串。(取决于你自己的风格以及习惯)

浏览器会认为字符串没有被关闭，因为在字符串中您没有使用其他类型的引号。
例如，这两种情况都是可以的：
let sglDbl = 'Would you eat a "fish supper"?';
let dblSgl = "I'm feeling blue.";
sglDbl;
dblSgl;

但是，您不能在字符串中包含相同的引号，因为它是用来包含它们的。下面将会出现错误，因为它会混淆浏览器和字符串的结束位置：
let bigmouth = ['I']ve got no right to take my place...';
[转义字符串中的字符]
转义字符意味着我们对它们做一些事情，以确保它们被识别成文本，而不是代码的一部分。在 JavaScript 中，我们通过在字符之前放一个反斜杠来实现这一点。
(代码示例)
let bigmouth = 'I\'ve got no right to take my place...';
bigmouth;
这回正常了。你可以用别的方式来达到一样的目的， 例如. \", 除此之外有一些特殊的代码 。更多细节请参见转义符号。

[连接字符串]
连接是一个很花哨的编程词，意思是“连接在一起”。
在 JavaScript 中连接字符串使用加号 (+) 操作符，我们也用它来将数字加在一起，但是在这种情况下，它做了一些不同的事情。
let one = 'Hello, ';
let two = 'how are you?';
let joined = one + two;
joined;
变量 joined 的值的结果，它包含的值为 "Hello, how are you?"。(连接多少个就加多少个+号)

你还能用真实的字符串和变量来混合。试试这个：
let response = one + 'I am fine — ' + two;
response;
[上下文中的串联]
<button>Press me</button>

const button = document.querySelector('button');
button.onclick = function() {
  let name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
}
这里我们使用的是第 4 行中的 window.prompt() 函数，它要求用户通过一个弹出对话框回答一个问题然后将他们输入的文本存储在一个给定的变量中 — 
在这个例子中是就是 name 变量。然后，我们在第 5 行中使用  window.alert()  函数来显示另一个弹出窗口，
其中包含一个字符串，我们用两个字符串常量和 name 变量通过连接进行组合。
[数字与字符]
如果您有一个数值变量，您想要将其转换为字符串，并且不改变其他地方，或者您想将一个字符串转换为一个数字而不改变其其他地方，
那么您可以使用以下两个构造：

如果可以的话， Number 对象将把传递给它的任何东西转换成一个数字。
试一试：
let myString = '123';
let myNum = Number(myString);
typeof myNum;

另一方面，每个数字都有一个名为 toString() 的方法，它将把它转换成等价的字符串。
试试这个：
let myNum = 123;
let myString = myNum.toString();
typeof myString;

这些结构在某些情况下是非常有用的，例如，如果一个用户将一个数字输入到一个表单文本字段中，这将是一个字符串，
但是如果你想要将这个数字添加到某些东西中时，你需要它是一个数字，所以你可以通过 Number() 来处理这个问题。我们在数字猜谜游戏中第 54 行就是这么做的。

【有用的字符串方法】
[获得字符串的长度]
这很简单 — 你可以很轻松的使用 length 属性。
说字符串的长度有用是有很多原因的，例如，你可能想算出一连串名字的长度，并用名字长度来作为名字排序的依据，
亦或让一个用户知道他输入的用户名太长，已经超出了输入的字符串长度限制。
[检索特定字符串字符]
在相关的注释中，您可以使用方括号表示法返回字符串中的任何字符 - 这意味着您可以在变量名的末尾包含方括号（[ ]）。
您要检索第一个字母，可以这样做：
browserType[0];
电脑从 0 开始，不是 1！
要检索任何字符串的最后一个字符，我们可以使用下面这行，将这种技术与我们上面看到的 length 属性相结合起来：
browserType[browserType.length-1];
“mozilla”的长度为 7，但由于计数从 0 开始，所以字符位置为 6，因此需要长度为length-1。
例如，您可以使用它来查找一系列字符串的第一个字母，并按字母顺序排列。
[在字符串中查找子字符串并提取它]
（我们通常会说一个字符串中存在一个子字符串）。这可以使用indexOf()方法来完成，该方法需要一个parameter (en-US) — 你想要搜索的子字符串。
browserType.indexOf('zilla');

结果是 2，因为子字符串“zilla”从“mozilla”内的位置 2（0，1，2 —— 所以从第 3 个字符）开始。这样的代码可以用来过滤字符串
。例如，假设我们有一个 Web 地址列表，但我们只想打印出包含“mozilla”的那些地址。

这可以用另一种可能更有效的方式来实现。尝试以下：
browserType.indexOf('vanilla');
这应该会得到 -1 的结果 —— 当在主字符串中找不到子字符串（在本例中为“vanilla”）时将返回 -1。
您可以使用它来查找不包含子串“mozilla”的所有字符串实例，或者如果使用否定运算符，请执行以下操作。你可以这样做：

if(browserType.indexOf('mozilla') !== -1) {
  // do stuff with the string
}
当你知道字符串中的子字符串开始的位置，以及想要结束的字符时，slice()可以用来提取 它。尝试以下：
browserType.slice(0,3);
如果您知道要在某个字符之后提取字符串中的所有剩余字符，则不必包含第二个参数，而只需要包含要从中提取的字符位置 字符串中的其余字符。尝试以下：
browserType.slice(2);
这返回“zilla” —— 这是因为 2 的字符位置是字母 z，并且因为没有包含第二个参数，所以返回的子字符串是字符串中的所有剩余字符。
Note: slice()的第二个参数是可选的：如果没有传入这个参数，分片结束位置会在原始字符串的末尾。这个方法也有其他的选项；
[转换大小写]
字符串方法toLowerCase()和toUpperCase()字符串并将所有字符分别转换为小写或大写。例如，如果要在将数据存储在数据库中之前对所有用户输入的数据进行规范化，这可能非常有用。
(示例代码)
let radData = 'My NaMe Is MuD';
radData.toLowerCase();
radData.toUpperCase();
[替换字符串的某部分]
您可以使用replace()方法将字符串中的一个子字符串替换为另一个子字符串。在基础的层面上，这个工作非常简单。
它需要两个参数 - 要被替换下的字符串和要被替换上的字符串。尝试这个例子：
browserType.replace('moz','van');
注意，在实际程序中，想要真正更新 browserType 变量的值，您需要设置变量的值等于刚才的操作结果；
它不会自动更新子串的值。所以事实上你需要这样写：browserType = browserType.replace('moz','van');。

[练习一：过滤问候留言]
在第一个练习中，我们将简单介绍一下 - 我们有一系列的问候卡片消息，但我们希望对它们进行排序，以列出圣诞消息。
我们希望您在 if(...) 结构中填写条件测试，以测试每个字符串，并将其打印在列表中，如果它是圣诞消息。
(示例代码)
*/
var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];

  if (greetings[i].indexOf('Christmas')!==-1) {  //关键行，指示是否存在所打的关键字符串代码,就只是加了这一关键代码行
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}

//[练习二:大写修正]
var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  var lower = input.toLowerCase();
  var firstLetter = lower.slice(0,1);
  var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
  var result = capitalized;

  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

//[练习三：从原先部分得到新字符串]
var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for(var i = 0; i < stations.length; i++) {
  var input = stations[i];
  var code = input.slice(0,3);
  var semiC = input.indexOf(';');
  var name = input.slice(semiC + 1);  //提取的参数是区间值，取到左边的边界值，取不到右边的边界值，提取倒数最后一个要用该示例代码即（XX+1）
  var final = code + ': ' + name;
  var result = final;

 var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

/*
【数组部分】
[创建数组]
数组由方括号构成，其中包含用逗号分隔的元素列表。
假设我们想在一个数组中存储一个购物清单 - 我们会做一些像下面这样的事情。
let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping;
在这种情况下，数组中的每个项目都是一个字符串,但请记住，您可以将任何类型的元素存储在数组中 - 字符串，数字，对象，另一个变量，甚至另一个数组。您也可以混合和匹配项目类型 - 它们并不都是数字，字符串等。尝试下面这些：
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ['tree', 795, [0, 1, 2]];
[访问和修改数组元素]
然后，您可以使用括号表示法访问数组中的元素，与 检索特定字符串字符 的方法相同。
shopping[0];
// returns "bread"
您还可以简单地为单个数组元素提供新值来修改数组中的元素。例如：
shopping[0] = 'tahini';
shopping;
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
请注意，数组中包含数组的话称之为多维数组。您可以通过将两组方括号链接在一起来访问数组内的另一个数组。例如，要访问数组内部的一个项目，
即 random 数组中的第三个项目（参见上一节），我们可以这样做：
random[2][2];
获取数组长度
你可以通过使用 length 属性获取数组的长度（数组中有多少项元素），这与查找字符串的长度（以字符为单位）完全相同。尝试以下代码：
sequence.length;
// should return 7
虽然 length 属性也有其他用途，但最常用于循环（循环遍历数组中的所有项）。例如：

let sequence = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}
但简而言之，这段代码的意思是：
1.在数组中的元素编号 0 开始循环。
2.在元素编号等于数组长度的时候停止循环。这适用于任何长度的数组，但在这种情况下，它将在编号 7 的时候终止循环（这很好，因为我们希望最后一位元素的编号是 6）。
3.对于每个元素，使用 console.log() 将其打印到浏览器控制台。
[字符串和数组之间的转换]
通常，您会看到一个包含在一个长长的字符串中的原始数据，您可能希望将有用的项目分成更有用的表单，然后对它们进行处理，例如将它们显示在数据表中。
为此，我们可以使用 split() 方法。在其最简单的形式中，这需要一个参数，您要将字符串分隔的字符，并返回分隔符之间的子串，作为数组中的项
Note:  好吧，从技术上讲，这是一个字符串方法，而不是一个数组方法，但是我们把它放在数组中，因为它在这里很合适。
我们来玩一下这个方法，看看它是如何工作的。首先，在控制台中创建一个字符串：
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

现在我们用每个逗号分隔它：
let myArray = myData.split(',');
myArray;

最后，尝试找到新数组的长度，并从中检索一些项目：
myArray.length;
myArray[0]; // the first item in the array
myArray[1]; // the second item in the array
myArray[myArray.length-1]; // the last item in the array
您也可以使用 join() 方法进行相反的操作。尝试以下：
let myNewString = myArray.join(',');
myNewString;

将数组转换为字符串的另一种方法是使用 toString() 方法。 toString() 可以比 join() 更简单，因为它不需要一个参数，但更有限制。
使用 join() 可以指定不同的分隔符（尝试使用与逗号不同的字符运行步骤 4）。
let dogNames = ["Rocket","Flash","Bella","Slugger"];
dogNames.toString(); //Rocket,Flash,Bella,Slugger
[添加和删除数组项]
我们还没有涵盖添加和删除数组元素，现在让我们来看看。我们将使用在上一节中最后提到的  myArray 数组。
首先，要在数组末尾添加或删除一个项目，我们可以使用  push() 和 pop()。
unshift() 和 shift() 从功能上与 push() 和 pop() 完全相同，只是它们分别作用于数组的开始，而不是结尾。(PS:unshift等价于push,shift等价于pop;)

让我们先使用 push() —— 注意，你需要添加一个或多个要添加到数组末尾的元素。尝试下面的代码：
myArray.push('Cardiff');
myArray;
myArray.push('Bradford', 'Brighton');
myArray;

当方法调用完成时，将返回数组的新长度。如果要将新数组长度存储在变量中。例如：
var newLength = myArray.push('Bristol');
myArray;
newLength;

从数组中删除最后一个元素的话直接使用 pop() 就可以。例如：
myArray.pop();

当方法调用完成时，将返回已删除的项目。你也可以这样做：
let removedItem = myArray.pop();
myArray;
removedItem;
[积极学习一：打印这些产品]
我们回到前面描述的例子 —— 打印出发票上的产品名称和价格，然后计算总价格并将其印在底部。
(示例代码)
*/
var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';

var products = ['Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];

for(var i = 0; i < products.length; i++) {
  var subArray = products[i].split(':');  //关键代码行，表示从循坏数组中依次分隔名称和价格两个部分，这两个部分分别是新数组的两个编码
  var name = subArray[0];  //表示从新数组中提取第一编号的部分组成型变量
  var price = Number(subArray[1]);
  total += price;
  itemText = name + ' — $' + price;

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
/*
积极学习二：前五个搜索
在这个例子中，我们将展示一种更简单的使用方法 - 在这里我们给你一个假的搜索网站，一个搜索框。这个想法是，当在搜索框中输入时，列表中会显示 5 个先前的搜索字词。
当列表项目数量超过 5 时，每当新项目被添加到顶部时，最后一个项目开始被删除，因此总是显示 5 个以前的搜索字词。
在 //number 1 注释下面添加一行，将输入到搜索框中的当前值添加到数组的开头。这可以使用 searchInput.value 检索。
在 // number 2 注释下方添加一行，该行删除数组末尾的当前值。
*/
var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';
var myHistory = [];

searchBtn.onclick = function() {
  // 如果搜索框不为空，我们则将搜索词添加到开头
  if (searchInput.value !== '') {
    // number 1
 myHistory.unshift(searchInput.value); //(添加的是变量，不需添加引号，引号是对单独具体的值来用的，循环结构里的代码没有变量名)
    // 清空显示的搜索关键词列表，防止显示
    // 每次输入搜索词都会重新生成显示的内容
    list.innerHTML = '';

    // 通过循环遍历，显示所有的搜索关键词
    for (var i = 0; i < myHistory.length; i++) {
      var itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }
    // 如果数组的长度大于 5，那么便移除旧的搜索关键词
    if (myHistory.length >= 5) {
      // number 2
      myHistory.pop();
    }
    // 清空并聚焦到搜索框，准备下一次的搜索
    searchInput.value = '';
    searchInput.focus();
  }
}

