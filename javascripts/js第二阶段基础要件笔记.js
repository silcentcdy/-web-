/*
【在代码中做决定 - 条件语句】
if ... else 语句,JavaScript中用到的最常见的条件语句类型 — if ... else语句。

基本的 if…else 语法看起来像下面的 伪代码(翻译可能有更好，但目前没有):
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}
1.关键字 if，并且后面跟随括号。
2.要测试的条件，放到括号里（通常是“这个值大于另一个值吗”或者“这个值存在吗”）。这个条件会利用比较运算符（我们会在最后的模块中讨论）进行比较，并且返回 true 或者 false。
3.一组花括号，在里面我们有一些代码——可以是任何我们喜欢的代码，并且只会在条件语句返回 true 的时候运行。
4.关键字 else。
5.另一组花括号，在里面我们有一些代码——可以是任何我们喜欢的代码，并且当条件语句返回值不是 true 的话，它才会运行。
注意：你不一定需要 else 和第二个花括号——下面的代码也是符合语法规则的：
if (condition) {
  code to run if condition is true
}
run some other code
不过，这里你需要注意——在这种情况下，第二段代码不被条件语句控制，所以它总会运行，不管条件返回的是 true 还是 false。
这不一定是一件坏事，但这可能不是你想要的——你经常只想要运行一段代码或者另一段，而不是两个都运行。

最后，有时候你可能会看到 if…else 语句没有写花括号，像下面的速记风格：
if (condition) code to run if condition is true
else run some other code instead
PS:这是完全有效的代码，但不建议这样使用——因为如果有花括号进行代码切割的话，整体代码被切割为多行代码，更易读和易用。

真实的例子：想像一个孩子被他的父母要求帮助他们做家务。父母可能会说“嗨，宝贝儿，如果你帮我去购物，我会给你额外的零花钱，
这样你就能买得起你想要的玩具了。”在 JavaScript 中，我们可以这样表示：
var shoppingDone = false;
if (shoppingDone === true) {
  var childsAllowance = 10;
} else {
  var childsAllowance = 5;
}
这段代码显示的结果是变量 shoppingDone 总是返回 false， 意味着对我们的穷孩子来说很失望。如果孩子去购物的话，
就需要依靠我们提供机制来使父母把变量 shoppingDone 变成 true。
else if
最后一个例子提供给我们两个选择或结果，但是如果我们想要两个以上呢？
它们属于一个普通的天气预报的应用的一部分。
天气预报应用的例子
[HTML文档部分]
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>
<p></p>
[JavaScript部分]
*/

var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}
/*
1.这里我们有 HTML <select> 元素让我们选择不同的天气，以及一个简单的段落。
2.在 JavaScript 中，我们同时存储了对 <select> 和 <p> 的引用，并对 <select> 添加了一个事件监听器，因此，当它的值改变时，setWeather()函数被执行。
3.当函数运行时，我们首先新建了一个 choice 变量去存储当前被选的 <select> 中的值。接着我们用条件判断语句根据 choice 的值选择性的展示段落中的文本。
注意 else if() {...}段中的条件是怎么被判断的，除了第一个，它是在 if() {...}中被判断的。
4.最后一个 else {...} 中的选择通常被叫做“最后招数” — 在所有的条件都不为 true 时其中的代码会被执行。在这个例子中，如果用户没有选择任何一个选项，
它会将段落中的文本清空，例如当用户决定重新选择最开始出现的"--Make a choice--"选项时，就会有这样的效果。

[关于比较运算符]
=== 和 !== — 判断一个值是否严格等于，或不等于另一个。
< 和 > — 判断一个值是否小于，或大于另一个。
<= 和 >= — 判断一个值是否小于或等于，或者大于或等于另一个。
我们想特别提到测试布尔值（true / false），和一个通用模式，你会频繁遇到它，任何不是 false, undefined, null, 0, NaN 的值，
或一个空字符串（''）在作为条件语句进行测试时实际返回 true，因此您可以简单地使用变量名称来测试它是否为真，甚至是否存在（即它不是未定义的）。

[嵌套 if ... else]
我们可以更新我们的天气预报应用程序，以显示更多的选择，具体取决于温度： */
if (choice === 'sunny') {
  if (temperature < 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
  } else if (temperature >= 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
  }
}
/*
即使代码全部一起工作，每个 if ... else 语句完全独立于另一个。     

[逻辑运算符：&& , || 和 !]
&& — 逻辑与; 使得并列两个或者更多的表达式成为可能，只有当这些表达式每一个都返回true时，整个表达式才会返回true.
|| — 逻辑或; 当两个或者更多表达式当中的任何一个返回 true 则整个表达式将会返回 true.
! — 逻辑非; 对一个布尔值取反，非 true 返回 false，非 false 返回 true.
举一个逻辑 && 的例子，刚才的那段代码片段可以写成下面这样：
if (choice === 'sunny' && temperature < 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
} else if (choice === 'sunny' && temperature >= 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
}

让我们快速看一个 || 的例子：
if (iceCreamVanOutside || houseStatus === 'on fire') {
  console.log('You should leave the house quickly.');
} else {
  console.log('Probably should just stay in then.');
}

最后一种类型的逻辑运算符， 逻辑非! 运算符表示，可以用于对一个表达式取否。让我们把 非运算符 结合上一个例子里的 或表达式 看看：
if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
  console.log('Probably should just stay in then.');
} else {
  console.log('You should leave the house quickly.');
}
在这一段代码中，如果逻辑或所在的语句返回 true，则非运算符会将其取否，于是整个表达式的返回值将会是false。

您可以在任何结构中随意合并很多个逻辑表达式。接下来的例子将会只在或运算符两边的语句同时返回 true 时才会执行代码，
这也就意味着整个与运算符语句将会返回 true：
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'Steve')) {
  // run the code
}

为了 让它正常工作你必须指定每个或表达式两边都是完整的检查：
if (x === 5 || x === 7 || x === 10 ||x === 20) {
  // run my code
}
(PS：正确的‘或’逻辑的代码表达式，错误的‘或逻辑’代码示例：
    if (x === 5 || 7 || 10 || 20) {
  // run my code
})

[switch 语句]
switch 语句在这里是您的朋友 - 他们以单个表达式/值作为输入，然后查看多个选项，直到找到与该值相匹配的选项，执行与之相关的代码。
这里有一些伪代码，可以给你一点灵感：*/

switch (expression) {
  case choice1:
    //run this code
    break;

  case choice2:
   // run this code instead
    break;

  // include as many cases as you like

 // default:   actually, just run this code
}
/*
这里我们得到：

1.关键字 switch, 后跟一组括号。
2.括号内的表达式或值。
3.关键字 case, 后跟一个选项的表达式/值，后面跟一个冒号.
4.如果选择与表达式匹配，则运行一些代码。
5.一个 break 语句，分号结尾。如果先前的选择与表达式/值匹配，则浏览器在此停止执行代码块，并执行switch语句之后的代码.
6.你可以添加任意的 case 选项（选项 3-5）.
7.关键字 default, 后面跟随和 case 完全相同的代码模式 (选项 3–5), except that default 之后不需要再有选项， 
并且您不需要 break 语句， 因为之后没有任何运行代码. 如果之前没有选项匹配，则运行default选项。

我们来看一个真实的例子 - 我们将重写天气预报应用程序，以改用 switch 语句：
*/
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);
function setWeather() {
  var choice = select.value;

  switch (choice) {       
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
} 
/*
[三元运算符]
三元或条件运算符是一个语法的小点，用于测试一个条件，并返回一个值/表达，
如果它是true，另一个是false-这种情况下是有用的，并且可以占用比if...else块较少的代码块。

如果你只有两个通过true/ false条件选择。伪代码看起来像这样：
( condition ) ? run this code : run this code instead
(简单示例)
var greeting = ( isBirthday ) ? 'Happy birthday Mrs. Smith — we hope you have a great day!' : 'Good morning Mrs. Smith.';
在这里我们有一个变量叫做isBirthday- 如果它是true，我们给客人一个生日快乐的消息; 如果不是，我们给她标准的每日问候。

三元运算符示例
下实例显示了一个简单的主题选择器，其中该站点的样式应用了三元运算符。
(HTML代码部分)
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>
<h1>This is my website</h1>

(JavaScript代码部分)
*/
var select = document.querySelector('select');
var html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function() {
  ( select.value === 'black' ) ? update('black','white') : update('white','black');
}
/*
我们也有一个函数叫做update()，它将两种颜色作为参数（输入）。网站的背景颜色设置为第一个提供的颜色，其文本颜色设置为第二个提供的颜色。

最后，我们还有一个onchange事件监听器，用于运行一个包含三元运算符的函数。它以测试条件开始select.value === 'black'。
如果这返回true，我们运行update()带有黑色和白色参数的函数，这意味着我们最终得到黑色的背景颜色和白色的文字颜色。
如果返回false，我们运行update()带有白色和黑色参数的函数，这意味着站点颜色被反转。 

[主动学习：一个简单的日历]
我们需要你在onchange处理函数中写一个条件语句，就在// ADD CONDITIONAL HERE任务的下面 。这应该：

查看所选月份（存储在choice变量中，这将是<select>值更改后的元素值，例如“1 月”）。
设置一个被调用days为等于所选月份天数的变量。为此，您必须查看一年中每个月的天数。为了这个例子的目的，你可以忽略闰年。
提示：

建议您使用逻辑或将多个月组合成一个单一条件; 他们中的许多人共享相同的天数。
考虑最常用的天数，并将其用作默认值。
*/
var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;
  // ADD CONDITIONAL HERE,条件判断要用单引号圈起来
var days=31;
if(choice==='February'){
 days=28;
}else if(choice==='Apirl'||choice==='July'||choice==='September'||choice==='November'){
days=30;
}
  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}
createCalendar(31,'January');
/*
[主动学习：更多颜色选择！]
在这个例子中，您将要采取我们前面看到的三元运算符示例，并将三元运算符转换为一个 switch 语句，
这将允许我们对简单的网站应用更多的选择。看看元素表示一个控件，提供一个选项菜单："><select>- 这次你会看到它不是两个主题选项，而是五个。
您需要在// ADD SWITCH STATEMENT注释下面添加一个 switch 语句：
*//*
1.它应该接受choice变量作为其输入表达式。
2.对于每种情况，选择应该等于可以选择的可能值之一，即白色，黑色，紫色，黄色或迷幻色。
3.对于每种情况，应运行update()函数，并传递两个颜色值，第一个颜色值为背景颜色，第二个颜色值为文本颜色。请记住，颜色值是字符串，因此需要用引号括起来。
*/
var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
  var choice = select.value;
  // ADD SWITCH STATEMENT,作用对象要小写
switch(choice){
  case 'white':
  update('white','black');
  break;
  case 'black':
  update('black','white');
  break;
  case  'purle':
  update('purle','red');
  break;
  case 'yellow':
  update('yellow','blue');
  break;
  case 'psychedelic':
  update('psychedelic','pink');
  break;

}
function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
}
/*
【循环吧代码】
让我们来想一下下图，这位农夫考虑为他的家庭做一周的食物计划，他或许就需要执行一段循环：
一段循环通常需要一个或多个条件：

1.一个开始条件，它被初始化为一个特定的值 - 这是循环的起点 ("开始：我没有食物”，上面）。
2.一个结束条件，这是循环停止的标准 - 通常计数器达到一定值。以上所说的“我有足够的食物”吗？假设他需要 10 份食物来养活他的家人。
3.一个迭代器，这通常在每个连续循环上递增少量的计数器，直到达到退出条件。我们以前没有明确说明，但是我们可以考虑一下农民能够每小时收集 2 份食物。
每小时后，他收集的食物量增加了两倍，他检查他是否有足够的食物。如果他已经达到 10 分（退出条件），他可以停止收集回家。

通常，循环的每个连续迭代的代码将略有不同，这意味着您可以完成相同但略有不同的任务的全部负载 - 如果您有很多不同的计算要做，
做不同的一个，不一样的一个又一个！

让我们来看一个例子来完美地说明为什么循环是一件好事。假设我们想在<canvas>元素上绘制 100 个随机圆（按更新按钮一次又一次地运行示例以查看不同的随机集）：
您现在不需要理解所有代码，但我们来看看实际绘制 100 个圆的那部分代码：
*/
for (var i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255,0,0,0.5)';
  ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
  ctx.fill();
}
/*
1.random(),在前面的代码中定义过了，返回一个 0 到 x-1 间的整数。
2.WIDTH 和HEIGHT 浏览器内部窗口的宽度和高度。
您应该有一个基本的想法 - 我们使用一个循环来运行这个代码的 100 次迭代，其中每一个在页面上的随机位置绘制一个圆。
无论我们绘制 100 个圆，1000 还是 10,000，所需的代码量将是相同的。只有一个数字必须改变。

[遍历集合:英文翻译过来的部分]
一种类型的集合是数组，我们在本课程的数组章节中遇到了它。但是JavaScript中还有其他集合，包括Set和Map。
循环浏览集合的基本工具是 for...的循环：
*/
const cats1 = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
for (const cat of cats1) {
  console.log(cat);
}
/*
在此示例中，说：for (const cat of cats)
1.给定集合，获取集合中的第一个项目。cats
2.将其分配给变量，然后在大括号之间运行代码。cat{}
3.获取下一项，并重复 （2），直到达到集合的末尾。
map（） 和 filter（）
您可以使用 对集合中的每个项执行某些操作，并创建包含已更改项的新集合：map()
*/
function toUpper(string) {
  return string.toUpperCase();
}
const cats2 = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
const upperCats = cats2.map(toUpper);
console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ],输出结果
/*
在这里，我们将一个函数传递到cats.map（）中，并为数组中的每个项目调用该函数一次，并传入该项目。然后，它将每个函数调用的返回值添加到新数组中，
最后返回新数组。在这种情况下，我们提供的函数将项目转换为大写，因此生成的数组包含大写的所有猫：map()

[循环的标准]
我们开始探索一些特定的循环结构。第一个，你会经常使用到它，for 循环 - 以下为 for 循环的语法：
for (initializer; exit-condition; final-expression) {
  // code to run
}
我们有：
1.关键字for，后跟一些括号。
2.在括号内，我们有三个项目，以分号分隔：
 一个初始化器 - 这通常是一个设置为一个数字的变量，它被递增来计算循环运行的次数。它也有时被称为计数变量。 
 一个退出条件 - 如前面提到的，这个定义循环何时停止循环。这通常是一个表现为比较运算符的表达式，用于查看退出条件是否已满足的测试。
 一个最终条件 - 这总是被判断（或运行），每个循环已经通过一个完整的迭代消失时间。它通常用于增加（或在某些情况下递减）计数器变量，使其更接近退出条件值。
3.一些包含代码块的花括号 - 每次循环迭代时都会运行这个代码。

我们来看一个真实的例子，所以我们可以看出这些做得更清楚。
*/
var cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
var info = 'My cats are called ';
var para = document.querySelector('p');

for (var i = 0; i < cats.length; i++) {
  info += cats[i] + ', ';
}
para.textContent = info;
/*
1.迭代器i从 0 开始（var i = 0）。
2.循环将会一直运行直到它不再小于猫数组的长度。这很重要 - 退出条件显示循环仍然运行的条件。所以在这种情况下，<cats.length仍然是真的，循环仍然运行。
3.在循环中，我们将当前的循环项（cats[i]是cats[当前下标的任何东西]）以及逗号和空格连接到info变量的末尾。所以：
 在第一次运行中，i = 0，所以cats[0] +'，'将被连接到info("Bill")上。
 在第二次运行中，i = 1，所以cats[1] +'，'将被连接到info("Jeff")上。
 等等。每次循环运行后，1 将被添加到 i（i ++），然后进程将再次启动。
4.当等于cats.length时，循环将停止，浏览器将移动到循环下面的下一个代码位。

注: 我们将退出条件设为< cats.length，而不是<= cats.length是因为计算机从 0 开始，而不是 1 ;开始时i是 0，并且逐步增加到 i = 4（最后一个数组的索引）。
 cats.length返回 5，因为数组中有 5 个项目，但是我们不希望达到i = 5，因为这将返回未定义的最后一个项目（没有索引为 5 的数组项目）。
 所以我们想要比cats.length（i <）少 1，而不是cats.length（i <=）。

理想情况下，我们想改变最后循环迭代中的连接，以便在句子末尾没有逗号。嗯，没问题 - 我们可以很高兴地在我们的 for 循环中插入一个条件来处理这种特殊情况：
for (var i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
  //数组长度计算机是从0开始计数，但实际的个数就是日常的1开始也就是5个，当数组长度循坏到5时，也就是数组的4时，执行此条件语句
    info += 'and ' + cats[i] + '.'; 
  } else {
    info += cats[i] + ', ';
  }
}
重要: 使用for- 与所有循环一样，您必须确保初始化程序被迭代，以便最终达到退出条件。
如果没有，循环将永不停止，浏览器将强制它停止，否则会崩溃。这被称为无限循环。

[使用 break 退出循环]
与循环相同 - break 语句将立即退出循环，并使浏览器移动到跟随它的任何代码。

说我们想搜索一系列联系人和电话号码，只返回我们想要找的号码？首先，一些简单的 HTML - 一个文本<input>，允许我们输入一个名称来搜索
，一个<button>元素来提交搜索，以及一个<p>元素显示结果：
<label for="search">Search by contact name: </label>
<input id="search" type="text">
<button>Search</button>
<p></p>

(然后是 JavaScript： */
const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn1 = document.querySelector('button');

btn.addEventListener('click', function() {
  let searchName = input.value.toLowerCase();
  input.value = '';
  input.focus();
  for (let i = 0; i < contacts.length; i++) {
    let splitContact = contacts[i].split(':');
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
      break;
    } else if (i === contacts.length - 1) {
      para.textContent = 'Contact not found.';
    }
  }
});
/*
1.首先我们有一些变量定义 - 我们有一个联系信息数组，每个项目是一个字符串，包含一个以冒号分隔的名称和电话号码。
2.接下来，我们将一个事件监听器附加到按钮（btn）上，这样当按下它时，运行一些代码来执行搜索并返回结果。
3.我们将输入的值输入到一个名为searchName的变量中，然后清空文本输入并重新对准它，准备进行下一个搜索。
4.现在有趣的部分，for 循环：
 我们的计数器开始时为在 0，直到计数器不再小于contacts.length，并在循环的每次迭代之后将i递增 1。
 在循环中，我们首先将当前联系人（contacts [i]）拆分为冒号字符，并将生成的两个值存储在名为splitContact的数组中。
 然后，我们使用条件语句来测试splitContact [0]（联系人姓名）是否等于输入的searchName。如果是，我们在段落中输入一个字符串来报告联系人的号码，
 并使用 break 来结束循环。
5.在(contacts.length-1) 迭代后，如果联系人姓名与输入的搜索不符，则段落文本设置为“未找到联系人”，循环继续迭代。

[使用 continue 跳过迭代]
我们来看另外一个例子，它把一个数字作为一个输入，并且只返回开平方之后为整数的数字（整数）。
HTML 与最后一个例子基本相同 - 一个简单的文本输入和一个输出段落。JavaScript 也是一样的，虽然循环本身有点不同：
*/
var num = input.value;
//Math.floor表示向下取整
for (var i = 1; i <= num; i++) {
  var sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
  }
  para.textContent += i + ' ';
}
/*
1.在这种情况下，输入应为数字（num）。for 循环给定一个从 1 开始的计数器（在这种情况下，我们对 0 不感兴趣），
一个退出条件，当计数器大于输入num时循环将停止，并且迭代器的计数器将每次增加 1。
2.在循环中，我们使用Math.sqrt(i)找到每个数字的平方根，然后测试平方根是否是一个整数，通过判断当它被向下取整时，
它是否与自身相同（这是Math.floor(...)对传递的数字的作用）。
3.如果平方根和四舍五入的平方根不相等（!==），则表示平方根不是整数，因此我们对此不感兴趣。在这种情况下 
，我们使用 continue 语句跳过当前循环而执行下一个循环迭代，而不在任何地方记录该数字。
4.如果平方根是一个整数，我们完全跳过 if 块，所以 continue 语句不被执行; 相反，我们将当前 i 值加上一个空格连接到段落内容的末尾。

[while 语句和 do ... while 语句]
我们来看看 while 循环。这个循环的语法如下所示：
initializer
while (exit-condition) {
  // code to run
  final-expression
}
除了在循环之前设置初始化器变量，并且在运行代码之后，循环中包含 final-expression，而不是这两个项目被包含在括号中，这与以前的 for 循环非常类似。
退出条件包含在括号内，前面是 while 关键字而不是 for。
同样的三个项目仍然存在，它们仍然以与 for 循环中相同的顺序定义 - 这是有道理的，因为您必须先定义一个初始化器，然后才能检查它是否已到达退出条件; 
在循环中的代码运行（迭代已经完成）之后，运行最后的条件，这只有在尚未达到退出条件时才会发生。
do...while循环非常类似但在 while 后提供了终止条件：

initializer
do {
  // code to run
  final-expression
} while (exit-condition)

do 关键字直接在包含要运行的代码的花括号和终止条件之前。
这里的区别在于退出条件是一切都包含在括号中，而后面是一个 while 关键字。在 do ... while 循环中，花括号中的代码总是在检查之前运行一次，
以查看是否应该再次执行（在 while 和 for 中，检查首先出现，因此代码可能永远不会执行）

我们再次重写我们的猫列表示例，以使用 do...while 循环：
*/
var i = 0;
do {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }
  i++;
} while (i < cats.length);
/*
Important: 使用 while 和 do...while — 所有循环都一样 — 你必须保证初始变量是迭代的，那么它才会逐渐地达到退出条件。
不然，它将会永远循环下去，要么浏览器会强制终止它，要么它自己会崩溃。这称为无限循环。

[主动学习：启动倒计时！]
我们希望你打印出一个简单的启动倒计时到输出框，从 10 到关闭。具体来说，我们希望你：
1.从 10 下降到 0.我们为您提供了一个初始化器 - var i = 10;
2.对于每次迭代，创建一个新的段落并将其附加到输出<div>，我们使用var output = document.querySelector('.output');。
在评论中，我们为您提供了需要在循环中某处使用的三条代码行：
 var para = document.createElement('p'); —新建一个段落。
 output.appendChild(para); — 将段落附加到输出 <div>中。
 para.textContent = — 段落内的文字等于您放在右侧的任何内容。
3.不同的迭代数字需要将不同的文本放在该迭代的段落中（您需要一个条件语句和多个para.textContent = lines）：
 如果数字是 10，打印“Countdown 10”到段落。 
 如果数字为 0，请打印“Blast off！”到段落。
 对于任何其他数字，只打印段落的数字。
4.记住要包括一个迭代器！然而，在这个例子中，我们在每次迭代之后都下降，而不是上升，所以你不想要i++ - 你如何向下迭代？
*/
//自打代码
var output = document.querySelector('.output');
output.innerHTML = '';

 var i = 10;
//for循环要用 ； 号来隔开初期化器、退出条件和终止条件；退出条件末尾不加分号，退出条件也就是满足的范围值或表达式，不满足时就退出循坏；不是单纯的表面上的退出，而是符合的值，也就是括号里设定的是你想要的值，而不是不要得值
while(i >= 0 ){
  var para = document.createElement('p');
if(i===10){
   para.textContent = 'Countdown '+ i;
} else if(i===0){
  para.textContent = 'Blast off！';
} else{
   para.textContent = i;
}  
 output.appendChild(para);
 i--;
}
/*
[主动学习：填写来宾列表]
但这不是那么容易 - 我们不想让菲尔和洛拉进来，因为他们是贪婪和粗鲁的，总是吃所有的食物！我们有两个名单，一个是客人承认的，一个是客人拒绝的。

具体来说，我们希望你：
1.编写一个循环，它将从 0 迭代到 people 数组的长度。你需要从一个初始化器var i = 0开始，但是你需要什么退出条件？
2.在每个循环迭代期间，使用条件语句检查当前数组项是否等于“Phil”或“Lola”：
 如果是，则将数组项连接到拒绝段落的textContent的末尾，后跟逗号和空格。
 如果不是，则将数组项连接到接收段落的textContent的末尾，后跟逗号和空格。

我们已经提供给您：
1.var i = 0; — 你的初始化程序
2.refused.textContent += - 将连接某些东西的行的开头，结束于refused.textContent。
3.admitted.textContent += - 将连接某些内容到一行的结尾的行的开始。
额外的奖金问题 - 成功完成上述任务后，您将留下两个名称列表，用逗号分隔，但它们将不整齐 - 每个结尾处都会有一个逗号。
你可以制定出如何在每种情况下编写最后一个逗号的行，并添加一个完整的停止？
*/
var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
//admitted.textContent = 'Admit: ';
//refused.textContent = 'Refuse: '

 var i = 0;

while(i < people.length){
  if(people[i]==='Phil'||people[i]==='Lola'){
    refused.textContent +=people[i] + ',' + '' ;
  }else{
    admitted.textContent += people[i] + ',' +'';
   }

  i++;
}
//末尾句号显示代码,slice提取是从字母算起的，也就是说逗号和空格也算在内，
//也就是为什么是length-2，意思就是提取从开头到除去末尾逗号和空格的段末字母的区间范围然后加上点号
refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';

/*
应该使用哪种循环类型？
对于基本用途，for，while 和 do ... while 循环大部分可互换。
他们都可以用来解决相同的问题，你使用哪一个将在很大程度上取决于你的个人偏好 - 哪一个你最容易记住或最直观的。我们再来看看他们。
首先是 for:
for (initializer; exit-condition; final-expression) {
  // code to run
}
while:

initializer
while (exit-condition) {
  // code to run

  final-expression
}
最后是 do...while:

initializer
do {
  // code to run

  final-expression
} while (exit-condition)
我们建议使用for，因为它可能是最简单地帮你记住一切 - 初始化程序，退出条件和最终表达式都必须整齐地放入括号，
所以很容易看到他们在哪里并检查你没有丢失他们。
*/
//[注：还有其他循环类型/特性，这些特性在 高级/专门 的情况下是有用的，超出了本文的范围。如果您想进一步了解循环学习，请阅读我们的高级(循环和迭代指南).]
 /*

【函数 - 可复用代码块】
[浏览器内置函数]
在这套课程中我们已经使用了很多浏览器内置函数，
当我们操作一个字符串的时候，例如：
var myText = 'I am a string';
var newString = myText.replace('string', 'sausage');
console.log(newString);

或者当我们操作一个数组的时候：
var myArray = ['I', 'love', 'chocolate', 'frogs'];
var madeAString = myArray.join(' ');
console.log(madeAString);

或者当我们生成一个随机数时：
var myNumber = Math.random()

事实上，许多你调用（运行或者执行的专业词语）浏览器内置函数时调用的代码并不是使用 JavaScript 来编写——大多数调用浏览器后台的函数的代码，
是使用像 C++这样更低级的系统语言编写的，而不是像 JavaScript 这样的 web 编程语言。
请记住，这些内置浏览器函数不是核心 JavaScript 语言的一部分——被定义为浏览器 API 的一部分，它建立在默认语言之上，
以提供更多的功能（请参阅本课程的早期部分以获得更多的描述）。我们将在以后的模块中更详细地使用浏览器 API。

[函数与方法]
到目前为止我们所使用的内置代码同属于这两种形式：函数和方法。你可以在这里查看内置函数，内置对象以及其相关方法的完整列表。
严格说来，内置浏览器函数并不是函数——它们是方法。这听起来有点可怕和令人困惑，但不要担心 ——函数和方法在很大程度上是可互换的，至少在我们的学习阶段是这样的。
二者区别在于方法是在对象内定义的函数。浏览器内置函数（方法）和变量（称为属性）存储在结构化对象内，以使代码更加高效，易于处理。
[自定义函数]
在我们的循环文章中的random-canvas-circles.html示例）中，我们包括一个如下所示的自定义函数：draw()
*/
function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}/*
该函数在元素与canvas脚本API来绘制图形和动画。"><canvas>元素中绘制 100 个随机圆。每次我们想要这样做，我们可以使用这个函数来调用这个功能
draw();

而不是每次我们想重复一遍，都要写出所有的代码。函数可以包含任何您喜欢的代码 - 甚至可以从内部函数调用其他函数。以上函数例如调用random()函数三次，
由以下代码定义：
function random(number) {
  return Math.floor(Math.random()*number);
}
我们需要这个函数，因为浏览器的内置Math.random（）函数只生成一个 0 到 1 之间的随机十进制数。我们想要一个 0 到一个指定数字之间的随机整数。
[调用函数]
现在你可能很清楚这一点，但仅仅为了防止……，要在函数定义之后，实际使用它，你必须运行或调用它。这是通过将函数名包含在代码的某个地方，后跟圆括号来完成的。
function myFunction() {
  alert('hello');
}
myFunction()
[匿名函数]
但是您也可以创建一个没有名称的函数：
function() {
  alert('hello');
}
这个函数叫做匿名函数 — 它没有函数名！它也不会自己做任何事情。你通常将匿名函数与事件处理程序一起使用，例如，如果单击相关按钮，以下操作将在函数内运行代码：

var myButton = document.querySelector('button');
myButton.onclick = function() {
  alert('hello');
}
你还可以将匿名函数分配为变量的值，例如：
var myGreeting = function() {
  alert('hello');
}
现在可以使用以下方式调用此函数：
myGreeting();
您将主要使用匿名函数来运行负载的代码以响应事件触发（如点击按钮） - 使用事件处理程序。再次，这看起来像这样：
myButton.onclick = function() {
  alert('hello');
PS: 匿名函数也称为函数表达式。函数表达式与函数声明有一些区别。函数声明会进行声明提升（declaration hoisting），而函数表达式不会。

[函数参数]
一些函数需要在调用它们时指定参数 ——这些参数值需要放在函数括号内，才能正确地完成其工作。
Note: 参数有时称为参数（arguments），属性（properties）或甚至属性（attributes）

浏览器的内置字符串replace（）函数需要两个参数：在主字符串中查找的子字符串，以及用以下替换该字符串的子字符串：
var myText = 'I am a string';
var newString = myText.replace('string', 'sausage');
Note:当您需要指定多个参数时，它们以逗号分隔。

浏览器的内置字符串replace（）函数需要两个参数：在主字符串中查找的子字符串，以及用以下替换该字符串的子字符串：
var myText = 'I am a string';
var newString = myText.replace('string', 'sausage');
(Note:当您需要指定多个参数时，它们以逗号分隔。)

[函数作用域和冲突]
我们来谈一谈 scope即作用域 — 处理函数时一个非常重要的概念。当你创建一个函数时，函数内定义的变量和其他东西都在它们自己的单独的范围内，
意味着它们被锁在自己独立的隔间中，不能被函数外的代码访问。
所有函数的最外层被称为全局作用域。在全局作用域内定义的值可以在任意地方访问。
例如，假设您有一个 HTML 文件，它调用两个外部 JavaScript 文件，并且它们都有一个使用相同名称定义的变量和函数：
<!-- Excerpt from my HTML -->
<script src="first.js"></script>
<script src="second.js"></script>
<script>
  greeting();
</script>

// first.js
let name = 'Chris';
function greeting() {
  alert('Hello ' + name + ': welcome to our company.');
}

// second.js
let name = 'Zaptec';
function greeting() {
  alert('Our company is called ' + name + '.');
}
这两个函数都使用 greeting() 形式调用，但是你只能访问到 first.js 文件的greeting()函数（第二个文件被忽视了）。
另外，第二次尝试使用 let 关键字定义 name 变量导致了一个错误。

这有点像一个动物园。狮子，斑马，老虎和企鹅都保留在自己的园子中，只能拿到到它们园子中的东西 —— 与其函数作用域相同。如果他们能进入其他园子，就会出现问题。
不同的动物会在不熟悉的栖息地内感到真的不舒服 - 一只狮子或老虎会在企鹅的水多的，冰冷的的领域中感到可怕。最糟糕的是，狮子和老虎可能会尝试吃企鹅！
动物园管理员就像全局作用域 - 他或她有钥匙访问每个园子，重新投喂食物，照顾生病的动物等。
[主动学习：和 scope 玩耍]
!importont 该部分以文件的形式记录在另一文件页面————函数-控制器主动学习练习.html

[函数内部的函数]
请记住，您可以从任何地方调用函数，甚至可以在另一个函数中调用函数。这通常被用作保持代码整洁的方式 - 如果您有一个复杂的函数，如果将其分解成几个子函数，它更容易理解：
*/
function myBigFunction() {
  var myValue = 1;

  subFunction1(myValue);
  subFunction2(myValue);
  subFunction3(myValue);
}

function subFunction1(value) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}

function subFunction3(value) {
  console.log(value);
}
//正确内部函数代码示例
/*
【创建您自己的函数】
我们将构建的传统函数将被命名为 displayMessage()，它向用户展示一个传统的消息盒子于 web 页面的顶部。它充当浏览器内建的 alert() 函数更有用的替代品。
你已经看过了这个，但是我们回复一下我们的记忆——在你的浏览器的 JavaScript 控制台中，在任意一个页面里尝试以下代码

alert('This is a message');
这个函数只带有一个参数——在 alert box 中展示的字符串。您可以尝试改变字符串来改变消息。
这个alert()函数不是很好的：您可以alert()出这条信息，但是您不能很容易的表达其他内容，例如颜色，图标或者是其他东西。接下来我们将会构建一个更有趣的函数。
[基本函数]
PS：该部分笔记以实践为主，放在————创建自己的函数练习.html文档里
[调用函数]
PS:该部分笔记以实践为主，放在————创建自己的函数练习.html文档里
[使用参数列表改进函数]
1.第一步，修改函数的第一行代码：
function displayMessage() {
改成这样的：
function displayMessage(msgText, msgType) {

2.当我们调用函数的时候，我们可以在括号里添加两个变量，来指定显示在消息框里面的消息，和消息的类型。
为了使用第一个参数，把接下来的一行：
msg.textContent = 'This is a message box';
改成这样：
msg.textContent = msgText;

3.最后但同样重要的一点，我们来调用这个函数，并且使用了带参数的形式，修改下面这行：
btn.onclick = displayMessage;
改成这样：
btn.onclick = function() {
  displayMessage('Woo, this is a different message!');
};
如果我们要在点击事件里面绑定这个新函数，我们不能直接使用（btn.onclick = displayMessage('Woo, this is a different message!');）
前面已经讲过— 我们要把它放在一个匿名函数里面，不然函数会直接调用，而不是按钮点击之后才会调用，这不是我们想要的结果。
4.保存刷新，就像你所期待的那样现在你可以随意的指定消息框里面显示的消息！

[一个更加复杂的参数]
第一步，从 Github 上下载我们需要的图标 (警告图标 和 聊天图标) 。把图标保存在一个叫做icons 的文件夹下，和你的 HTML 文件在同一个目录下。
笔记: 警告和聊天图标是在这个网站( iconfinder.com) 上找到的，设计者是 Nazarrudin Ansyari. 感谢他！
下一步，找到页面的 CSS 文件。我们要修改下以便我们使用图标。首先，修改 .msgBox 的宽度：
width: 200px;
改成：
width: 242px;

下一步，在 .msgBox p { ... } 里面添加几条新规则：
padding-left: 82px;
background-position: 25px center;
background-repeat: no-repeat;
CSS 改完了以后我们就要来修改函数 displayMessage() 让它能够显示图标。在你的函数结束符之前}添加下面这几行代码：
*/
if (msgType === 'warning') {
  msg.style.backgroundImage = 'url(icons/warning.png)';
  panel.style.backgroundColor = 'red';
} else if (msgType === 'chat') {
  msg.style.backgroundImage = 'url(icons/chat.png)';
  panel.style.backgroundColor = 'aqua';
} else {
  msg.style.paddingLeft = '20px';
}
/*
来解释下，如果第二个参数 msgType 的值为 'warning', 我们的消息框将显示一个警告图标和一个红色的背景。如果这个参数的值是 'chat', 
将显示聊天图标和水蓝色的背景。如果 msgType 没有指定任何值 (或者不是'warning'和'chat'), 然后这个 else { ... } 代码块将会被执行，
代码的意思是给消息段落设置了一个简单的左内边距并且没有图标，也没有背景颜色。这么做是为了当没有提供 msgType 参数的时候给函数一个默认行为，
意思是这是一个可选参数（你没发现？其实我们已经用过了！就在这里btn.onclick = function() { displayMessage('Woo, this is a different message!'); };只是当时我们没有写这个else段，也就是啥操作也没做）！
现在来测试下我们的新函数，可以直接调用 displayMessage() 像这样：
displayMessage('Woo, this is a different message!');
或者这样：
displayMessage('Your inbox is almost full — delete some mails', 'warning');
displayMessage('Brian: Hi there, how are you today?','chat');

你能看到我们现在的函数稍微有了点用 (不是非常有用) ，一个小的新功能被我们写出来了（当然，函数可以做很多你想的到的和想不到的事）！

【函数返回值】
[什么是返回值？]
如果你看看替换功能 MDN 参考页面，你会看到一个返回值。知道和理解函数返回的值是非常有用的，因此我们尽可能地包含这些信息。

一些函数没有返回值就像 (在我们的参考页中，返回值在这种情况下被列出为空值 void 或未定义值 undefined 。).
例如，我们在前面文章中创建的 displayMessage() function , 由于调用的函数的结果，没有返回特定的值。它只是让一个提示框出现在屏幕的某个地方——就是这样！
通常，返回值是用在函数在计算某种中间步骤。你想得到最终结果，其中包含一些值。那些值需要通过一个函数计算得到，然后返回结果可用于计算的下一个阶段。
[在自定义的函数中使用返回值]
我们的 draw() 函数绘制 100 随机圆在 HTML 的<canvas>:
*/
function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
/*
在每个循环迭代，random()函数调用了三次，分别生成当前圆的 x 坐标，一个随机值 Y 坐标和半径。random()函数接受一个参数 - 一个整数，返回 0 到这个整数之间的随机数。看起来像这样：
function randomNumber(number) {
  return Math.floor(Math.random()*number);
}
这也可以写成下面这样：
function randomNumber(number) {
  var result = Math.floor(Math.random()*number);
  return result;
}
但是第一个版本写得更快，而且更紧凑。

我们每次调用函数都返回Math.floor(Math.random()*number)计算的数学结果。这个返回值出现在调用函数的位置上，并且代码继续。例如，如果我们运行下面的行：
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);

这三次random()调用分别返回值 500, 200 和 35，实际上这一行这样运行：
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
在运行该行之前，首先运行该行上的函数调用，并用其返回值替换该函数调用。
[主动学习：我们自己的返回值函数]
PS：笔记以练习文档—————返回值函数实践.html为主

【事件介绍】
[一系列事件]
就像上面提到的，事件是您在编程时系统内发生的动作或者发生的事情——系统会在事件出现时产生或触发某种信号，并且会提供一个自动加载某种动作（列如：运行一些代码）的机制
在 Web 中，事件在浏览器窗口中被触发并且通常被绑定到窗口内部的特定部分 — 可能是一个元素、一系列元素、
被加载到这个窗口的 HTML 代码或者是整个浏览器窗口。举几个可能发生的不同事件：
1.用户在某个元素上点击鼠标或悬停光标。 2.用户在键盘中按下某个按键。 3.用户调整浏览器的大小或者关闭浏览器窗口。
4.一个网页停止加载。 5.提交表单。 6.播放、暂停、关闭视频。 7.发生错误。
每个可用的事件都会有一个事件处理器，也就是事件触发时会运行的代码块。当我们定义了一个用来回应事件被激发的代码块的时候，我们说我们注册了一个事件处理器。
注意事件处理器有时候被叫做事件监听器——从我们的用意来看这两个名字是相同的，尽管严格地来说这块代码既监听也处理事件。
监听器留意事件是否发生，然后处理器就是对事件发生做出的回应。
(注： 网络事件不是 JavaScript 语言的核心——它们被定义成内置于浏览器的 JavaScript APIs。)
[一个简单的例子]
在接下来的例子中，我们的页面中只有一个 button，按下时，背景会变成随机的一种颜色。
*/
<button>Change color</button>
//JavaScript 代码如下所示：
const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}
btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
/*
我们使用 btn 变量存储 button，并使用了Document.querySelector() 函数。我们也定义了一个返回随机数字的函数。代码第三部分就是事件处理器。
btn变量指向 button 元素，在 button 这种对象上可触发一系列的事件，因此也就可以使用事件处理器。
我们通过将一个匿名函数（这个赋值函数包括生成随机色并赋值给背景色的代码）赋值给“点击”事件处理器参数，监听“点击”这个事件。

只要点击事件在<button>元素上触发，该段代码就会被执行。即每当用户点击它时，都会运行此段代码。
[这不仅应用在网页上]
比如，Node.js 是一种非常流行的允许开发者使用 JavaScript 来建造网络和服务器端应用的运行环境
。Node.js event model 依赖定期监听事件的监听器和定期处理事件的处理器——虽然听起来好像差不多，但是实现两者的代码是非常不同的，
Node.js 使用像 on ( ) 这样的函数来注册一个事件监听器，使用 once ( ) 这样函数来注册一个在运行一次之后注销的监听器。
 HTTP connect event docs 提供了很多例子。
您可以使用 JavaScript 来开发跨浏览器的插件（使用 WebExtensions 开发技术。事件模型和网站的事件模型是相似的，
仅有一点点不同——事件监听属性是大驼峰的（如onMessage而不是onmessage），还需要与 addListener 函数结合，
您现在不需要掌握这些，我们只想表明不同的编程环境下事件机制是不同的.

[使用网页事件的方式]
事件处理器属性
这个 onclick 是被用在这个情景下的事件处理器的属性，它就像 button 其他的属性（如 btn.textContent, or btn.style), 
但是有一个特别的地方——当您将一些代码赋值给它的时候，只要事件触发代码就会运行。(代码示例是上面的随机背景颜色部分)

您也可以将一个有名字的函数赋值给事件处理参数（正如我们在 Build your own function 中看到的），下面的代码也是这样工作的：
const btn = document.querySelector('button');

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
btn.onclick = bgChange;
有很多事件处理参数可供选择，我们来做一个实验。
将 btn.onclick 依次换成其他值，在浏览器中观察效果。(代码示例在codepen网站上)
1.btn.onfocus及btn.onblur — 颜色将于按钮被置于焦点或解除焦点时改变（尝试使用 Tab 移动至按钮上，然后再移开）。
这些通常用于显示有关如何在置于焦点时填写表单字段的信息，或者如果表单字段刚刚填入不正确的值，则显示错误消息。

2.btn.ondblclick — 颜色将仅于按钮被双击时改变。

3.window.onkeypress, window.onkeydown, window.onkeyup — 当按钮被按下时颜色会发生改变。keypress 指的是通俗意义上的按下按钮 (按下并松开), 
而 keydown 和 keyup 指的是按键动作的一部分，分别指按下和松开。注意如果你将事件处理器添加到按钮本身，它将不会工作 — 我们只能将它添加到代表整个浏览器窗口的 window对象中。

4.btn.onmouseover 和 btn.onmouseout — 颜色将会在鼠标移入按钮上方时发生改变，或者当它从按钮移出时。
[行内事件处理器 - 请勿使用]
你也许在你的代码中看到过这么一种写法：
<button onclick="bgChange()">Press me</button>

在 Web 上注册事件处理程序的最早方法是类似于上面所示的事件处理程序 HTML 属性(也称为内联事件处理程序)—
属性值实际上是当事件发生时要运行的 JavaScript 代码。上面的例子中调用一个在<script>元素在同一个页面上，但也可以直接在属性内插入 JavaScript
即使在单一文件中，内置事件处理器也不是一个好主意。一个按钮看起来还好，但是如果有一百个按钮呢？您得在文件中加上 100 个属性。
这很快就会成为维护人员的噩梦。使用 Java Script，您可以给网页中的 button 都加上事件处理器。就像下面这样：

const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = bgChange;
}
(注释: 将您的编程逻辑与内容分离也会让您的站点对搜索引擎更加友好。)

[addEventListener() 和 removeEventListener()]
这个细则给浏览器提供了一个函数 — addEventListener()。这个函数和事件处理属性是类似的，但是语法略有不同。我们可以重写上面的随机颜色背景代码：
*/
const btn = document.querySelector('button');

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
btn.addEventListener('click', bgChange);
/*
在addEventListener() 函数中，我们具体化了两个参数——我们想要将处理器应用上去的事件名称，和包含我们用来回应事件的函数的代码。
注意将这些代码全部放到一个匿名函数中是可行的：
*/
btn.addEventListener('click', function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
});
/*  
(在这个简单的、小型的项目中可能不是很有用，但是在大型的、复杂的项目中就非常有用了，可以非常高效地清除不用的事件处理器，
另外在其他的一些场景中也非常有效——比如您需要在不同环境下运行不同的事件处理器，您只需要恰当地删除或者添加事件处理器即可。)
这个机制带来了一些相较于旧方式的优点。有一个相对应的方法，removeEventListener()，这个方法移除事件监听器。
例如，下面的代码将会移除上个代码块中的事件监听器：
btn.removeEventListener('click', bgChange);
您也可以给同一个监听器注册多个处理器，下面这种方式不能实现这一点：
myElement.onclick = functionA;
myElement.onclick = functionB;
第二行会覆盖第一行，但是下面这种方式就会正常工作了：

myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);
当元素被点击时两个函数都会工作.
[我该使用哪种机制？]
在三种机制中，您绝对不应该使用 HTML 事件处理程序属性 - 这些属性已经过时了，而且也是不好的做法，如上所述。

另外两种是相对可互换的，至少对于简单的用途：
1.事件处理程序属性功能和选项会更少，但是具有更好的跨浏览器兼容性 (在 Internet Explorer 8 的支持下)，您应该从这些开始学起。
2.DOM Level 2 Events (addEventListener(), etc.) 更强大，但也可以变得更加复杂，并且支持不足（只支持到 Internet Explorer 9）。
但是您也应该尝试这个方法，并尽可能地使用它们。

第三种机制（DOM Level 2 Events (addEventListener(), etc.)）的主要优点是，如果需要的话，可以使用removeEventListener()删除事件处理程序代码，
而且如果有需要，您可以向同一类型的元素添加多个监听器。例如，您可以在一个元素上多次调用addEventListener('click', function() { ... })，
并可在第二个参数中指定不同的函数。对于事件处理程序属性来说，这是不可能的，因为后面任何设置的属性都会尝试覆盖较早的属性，例如：

(注解:如果您在工作中被要求支持比 Internet Explorer 8 更老的浏览器，那么您可能会遇到困难，因为这些古老的浏览器会使用与现代浏览器不同的事件处理模型。
但是不要害怕，大多数 JavaScript 库 (例如 jQuery ) 都内置了能够跨浏览器差异的函数。在你学习 JavaScript 旅程里的这个阶段，不要太担心这个问题。)

[其他事件概念——————主要是了解和明白就好]
本节我们将简要介绍一些与事件相关的高级概念。在这一点并不需要完全理解透彻，但它可能有助于你解释一些经常会遇到的代码模式。
[事件对象]
有时候在事件处理函数内部，您可能会看到一个固定指定名称的参数，例如event，evt或简单的e。这被称为事件对象，它被自动传递给事件处理函数，
以提供额外的功能和信息。例如，让我们稍稍重写一遍我们的随机颜色示例：
*/
function bgChange(e) {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}
const divs = document.querySelectorAll('div');

for (let i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
    e.target.style.backgroundColor = bgChange();
  }
}
btn.addEventListener('click', bgChange);
/*
在这里，您可以看到我们在函数中包括一个事件对象e，并在函数中设置背景颜色样式在e.target上 - 它指的是按钮本身。
事件对象 e 的target属性始终是事件刚刚发生的元素的引用。所以在这个例子中，我们在按钮上设置一个随机的背景颜色，而不是页面。

(Note: 您可以使用任何您喜欢的名称作为事件对象 - 您只需要选择一个名称，然后可以在事件处理函数中引用它。
开发人员最常使用 e / evt / event，因为它们很简单易记。坚持标准总是很好。)——target是目标、靶子的意思

当您要在多个元素上设置相同的事件处理程序时，e.target非常有用，并且在发生事件时对所有元素执行某些操作。
例如，你可能有一组 16 块方格，当它们被点击时就会消失。用 e.target 总是能准确选择当前操作的东西（方格）并执行操作让它消失，而不是必须以更困难的方式选择它。在下面的示例中 (请参见useful-eventtarget.html完整代码;也可以在线运行running live）
我们使用 JavaScript 创建了 16 个<div>元素。接着我们使用 document.querySelectorAll()选择全部的元素，然后遍历每一个，为每一个元素都添加一个onclick单击事件，每当它们点击时就会为背景添加一个随机颜色。

[阻止默认行为]
有时，你会遇到一些情况，你希望事件不执行它的默认行为。最常见的例子是 Web 表单，例如自定义注册表单。
当用户没有正确提交数据时，麻烦就来了 - 作为开发人员，你希望停止提交信息给服务器，并给他们一个错误提示，告诉他们什么做错了，
以及需要做些什么来修正错误。一些浏览器支持自动的表单数据验证功能，但由于许多浏览器不支持，因此建议你不要依赖这些功能，并实现自己的验证检查。
我们来看一个简单的例子。

首先，一个简单的 HTML 表单，需要你填入名（first name）和姓（last name）
<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text">
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text">
  </div>
  <div>
     <input id="submit" type="submit">
  </div>
</form>
<p></p>

这里我们用一个onsubmit事件处理程序（在提交的时候，在一个表单上发起submit事件）来实现一个非常简单的检查，用于测试文本字段是否为空。
如果是，我们在事件对象上调用preventDefault()函数，这样就停止了表单提交，然后在我们表单下面的段落中显示一条错误消息，告诉用户什么是错误的：
*/
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');
const para = document.querySelector('p');

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}
//显然，这是一种非常弱的表单验证——例如，用户输入空格或数字提交表单，表单验证并不会阻止用户提交——这不是我们例子想要达到的目的。
/*
[事件冒泡及捕获]
最后即将介绍的这个主题你常常不会深究，但如果你不理解这个主题，就会十分痛苦。事件冒泡和捕捉是两种机制，
主要描述当在一个元素上有两个相同类型的事件处理器被激活会发生什么。为了容易理解，我们来看一个例子

这是一个非常简单的例子，它显示和隐藏一个包含<video>元素的<div>元素：
<button>Display video</button>

<div class="hidden">
  <video>
    <source src="rabbit320.mp4" type="video/mp4">
    <source src="rabbit320.webm" type="video/webm">
    <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
  </video>
</div>

当‘’button‘’元素按钮被单击时，将显示视频，它是通过将改变<div>的class 属性值从hidden变为showing(这个例子的 CSS 包含两个class，
  它们分别控制这个<div>盒子在屏幕上显示还是隐藏。)：
btn.onclick = function() {
  videoBox.setAttribute('class', 'showing');
}
然后我们再添加几个onclick事件处理器，第一个添加在<div>元素上，第二个添加在<video>元素上。
这个想法是当视频 (<video>）外 <div>元素内这块区域被单击时，这个视频盒子应该再次隐藏；当单击视频 (<video>）本身，这个视频将开始播放。
*/
videoBox.onclick = function() {
  videoBox.setAttribute('class', 'hidden');
};
video.onclick = function() {
  video.play();
};
/*
但是有一个问题 - 当您点击video开始播放的视频时，它会在同一时间导致<div>也被隐藏。
这是因为video在<div>之内 - video是<div>的一个子元素 - 所以点击video实际上是同时也运行<div>上的事件处理程序。

[对事件冒泡和捕捉的解释]
当一个事件发生在具有父元素的元素上 (例如，在我们的例子中是<video>元素) 时，现代浏览器运行两个不同的阶段 - 捕获阶段和冒泡阶段。
在捕获阶段：
1.浏览器检查元素的最外层祖先<html>，是否在捕获阶段中注册了一个onclick事件处理程序，如果是，则运行它。
2.然后，它移动到<html>中单击元素的下一个祖先元素，并执行相同的操作，然后是单击元素再下一个祖先元素，依此类推，直到到达实际点击的元素。

在冒泡阶段，恰恰相反：
1.浏览器检查实际点击的元素是否在冒泡阶段中注册了一个onclick事件处理程序，如果是，则运行它
2.然后它移动到下一个直接的祖先元素，并做同样的事情，然后是下一个，等等，直到它到达<html>元素。
在现代浏览器中，默认情况下，所有事件处理程序都在冒泡阶段进行注册。因此，在我们当前的示例中，当您单击视频时，
这个单击事件从 <video>元素向外冒泡直到<html>元素。沿着这个事件冒泡线路：

1.它发现了video.onclick...事件处理器并且运行它，因此这个视频<video>第一次开始播放。
2.接着它发现了（往外冒泡找到的） videoBox.onclick...事件处理器并且运行它，因此这个视频<video>也隐藏起来了。

[用 stopPropagation() 修复问题]
这是令人讨厌的行为，但有一种方法来解决它！标准事件对象具有可用的名为 stopPropagation()的函数，当在事件对象上调用该函数时，
它只会让当前事件处理程序运行，但事件不会在冒泡链上进一步扩大，因此将不会有更多事件处理器被运行 (不会向上冒泡)。
所以，我们可以通过改变前面代码块中的第二个处理函数来解决当前的问题：
*/
video.onclick = function(e) {
  e.stopPropagation();
  video.play();
};
/*
(注解: 为什么我们要弄清楚捕捉和冒泡呢？那是因为，在过去糟糕的日子里，浏览器的兼容性比现在要小得多，Netscape（网景）只使用事件捕获，
而 Internet Explorer 只使用事件冒泡。当 W3C 决定尝试规范这些行为并达成共识时，他们最终得到了包括这两种情况（捕捉和冒泡）的系统，
最终被应用在现在浏览器里。)

(注解: 如上所述，默认情况下，所有事件处理程序都是在冒泡阶段注册的，这在大多数情况下更有意义。如果您真的想在捕获阶段注册一个事件，
那么您可以通过使用addEventListener()注册您的处理程序，并将可选的第三个属性设置为 true。)
[事件委托]
冒泡还允许我们利用事件委托——这个概念依赖于这样一个事实，如果你想要在大量子元素中单击任何一个都可以运行一段代码，您
可以将事件监听器设置在其父节点上，并让子节点上发生的事件冒泡到父节点上，而不是每个子节点单独设置事件监听器。

一个很好的例子是一系列列表项，如果你想让每个列表项被点击时弹出一条信息，您可以将click单击事件监听器设置在父元素<ul>上，
这样事件就会从列表项冒泡到其父元素<ul>上。
这个的概念在 David Walsh 的博客上有更多的解释，并有多个例子——看看(网址链接：How JavaScript Event Delegation Works.)

[总结]
现在您应该知道在这个早期阶段您需要了解的所有 web 事件。如上所述，事件并不是 JavaScript 的核心部分——它们是在浏览器 Web APIs 中定义的。
另外，理解 JavaScript 在不同环境下使用不同的事件模型很重要——从 Web api 到其他领域，如浏览器 WebExtensions 和 Node.js(服务器端 JavaScript)。
我们并不期望您现在了解所有这些领域，但是当您在学习 web 开发的过程中，理解这些事件的基础是很有帮助的。

*/ 
