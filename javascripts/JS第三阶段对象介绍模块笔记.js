/*
【JavaScript 对象基础】
[对象基础]
对象是一个包含相关数据和方法的集合（通常由一些变量和函数组成，我们称之为对象里面的属性和方法），让我们通过一个例子来了解它们。
PS：例子通过实践文件来进行的
如同 Javascript 中的很多东西一样，创建一个对象通常先定义初始化变量。 尝试在您已有的文件中 JavaScript 代码下面输入以下内容，保存刷新页面：
var person = {};

恭喜，你刚创建了你的第一个对象。干的漂亮！但这是一个空对象，所以我们做不了更多的事情。像下面一样更新下我们的对象：
*/

var person = {
  name : ['Bob', 'Smith'],
  age : 32,
  gender : 'male',
  interests : ['music', 'skiing'],
  bio : function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};

//保存刷新后，尝试在你的浏览器控制台输入下面的内容：
person.name[0]
person.age
person.interests[1]
person.bio()
person.greeting()
/*
现在在你的对象里得到了一些数据和功能（functionality），现在可以通过简单的语法访问他们了！
Note:如果做上面的东西遇到了麻烦，尝试拿你的代码与我们的版本做对比——对比 oojs-finished.html (也可以 看实际效果)。
一个对于初学者很常见的错误是在最后一个成员后面多了一个逗号，这会引发错误。

所以发生了什么？一个对象由许多的成员组成，每一个成员都拥有一个名字（像上面的 name、age），和一个值（如 ['Bob', 'Smith']、32）。
每一个名字/值（name/value）对被逗号分隔开，并且名字和值之间由冒号（:）分隔，语法规则如下所示：

var objectName = {
  member1Name : member1Value,
  member2Name : member2Value,
  member3Name : member3Value
}
对象成员的值可以是任意的，在我们的 person 对象里有字符串 (string)，数字 (number)，两个数组 (array)，两个函数 (function)
。前 4 个成员是资料项目，被称为对象的属性 (property)，后两个成员是函数，允许对象对资料做一些操作，被称为对象的方法 (method)

一个如上所示的对象被称之为对象的字面量 (iteral)——手动的写出对象的内容来创建一个对象。不同于从类实例化一个对象，我们会在后面学习这种方式。
当你想要传输一些有结构和关联的资料时常见的方式是使用字面量来创建一个对象，举例来说，发起一个请求到服务器以存储一些数据到数据库，
发送一个对象要比分别发送这些数据更有效率，而且比起数组更为易用，因为你使用名字 (name) 来标识这些资料。

【点表示法】
在上面的例子中，你使用了点表示法 (dot notation) 来访问对象的属性和方法。对象的名字表现为一个命名空间 (namespace)，
它必须写在第一位——当你想访问对象内部的属性或方法时，然后是一个点 (.)，紧接着是你想要访问的项目，标识可以是简单属性的名字 (name)，
或者是数组属性的一个子元素，又或者是对象的方法调用。如下所示：

person.age
person.interests[1]
person.bio()

[子命名空间]
可以用一个对象来做另一个对象成员的值。例如将 name 成员
name : ['Bob', 'Smith'],
改成
name : {
  first : 'Bob',
  last : 'Smith'
},

这样，我们实际上创建了一个子命名空间，听起来有点复杂，但用起来很简单，你只需要链式的再使用一次点表示法，像这样：
person.name.first
person.name.last

注意：你需要改变你之前的代码，从
name[0]
name[1]

改成
name.first
name.last
否则，你的方法不再有效。

[括号表示法]
另外一种访问属性的方式是使用括号表示法 (bracket notation)，替代这样的代码
*/
person.age
person.name.first

//使用如下所示的代码：

person['age']
person['name']['first']
/*
这看起来很像访问一个数组的元素，从根本上来说是一回事儿，你使用了关联了值的名字，而不是索引去选择元素。
难怪对象有时被称之为关联数组 (associative array) 了——对象做了字符串到值的映射，而数组做的是数字到值的映射。(也就是说对象使用字符串选取成员，数组用括号数字选取成员)
[设置对象成员]
目前我们仅仅看到了如何访问对象的成员，而你其实也可以设置对象成员的值，通过声明你要设置的成员，像这样：
*/
person.age = 45
person['name']['last'] = 'Cratchit'

//尝试这些代码，然后再查看这些成员是否已经被改变了
person.age
person['name']['last']

//设置成员并不意味着你只能更新已经存在的属性的值，你完全可以创建新的成员，尝试以下代码：
person['eyes'] = 'hazel'
person.farewell = function() { alert("Bye everybody!") }

//现在你可以测试你新创建的成员
person['eyes']
person.farewell()

//括号表示法一个有用的地方是它不仅可以动态的去设置对象成员的值，还可以动态的去设置成员的名字。

//比如说，我们想让用户能够在他们的数据里存储自己定义的值类型，通过两个 input 框来输入成员的名字和值，通过以下代码获取用户输入的值：
var myDataName = nameInput.value
var myDataValue = nameValue.value

//我们可以这样把这个新的成员的名字和值加到 person 对象里：
person[myDataName] = myDataValue

//为了测试这个功能，尝试在你的代码里添加以下几行，就在 person 对象的右花括号的下面：
var myDataName = 'height'
var myDataValue = '1.75m'
person[myDataName] = myDataValue

//现在，保存并刷新，在输入框里输入以下代码：
person.height
//这是使用点表示法无法做到的，点表示法只能接受字面量的成员的名字，不接受变量作为名字。
/*
["this"的含义]
你也许在我们的方法里注意到了一些奇怪的地方，看这个例子：
/*
greeting: function() {
  alert('Hi! I\'m ' + this.name.first + '.');
}
你也许想知道"this"是什么，关键字"this"指向了当前代码运行时的对象 "this"是非常有用的——
它保证了当代码的上下文 (context) 改变时变量的值的正确性（比如：不同的 person 对象拥有不同的 name 这个属性，很明显 greeting 这个方法需要使用的是它们自己的 name）。*/

//让我们以两个简单的 person 对象来说明：

var person1 = {
  name : 'Chris',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}
var person2 = {
  name : 'Brian',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}
/*
在这里，person1.greeting() 会输出："Hi! I'm Chris."；person2.greeting() 会输出："Hi! I'm Brain."，即使 greeting 这个方法的代码是一样的。
就像我们之前说的，this 指向了代码所在的对象 (其实代码运行时所在的对象)。在字面量的对象里 this 看起来不是很有用，
但是当你动态创建一个对象（例如使用构造器）时它是非常有用的，之后你会更清楚它的用途。

[你一直在使用对象]
当你使用过这些例子之后，你可能会发现你对点表示法并不陌生，这是因为我们在这个课程里一直在使用它，
每次我们学习的示例使用浏览器内建的 API 和 JavaScript 的一些对象时，我们就在使用对象，因为，这些功能是由跟我们所看到的对象同样的结构来构建的，
虽然比我们自己定义的要复杂许多。

所以当我们这样使用字符串的方法时：
myString.split(',');
你正在使用一个字符串实例上可用的方法，你随时都可以在代码里使用字面量创建一个字符串，字符串会自动的被创建为字符串 (String) 的实例，
因此会有一些常见的方法和属性可用。

当你这样访问 document 对象时：
*/
var myDiv = document.createElement('div');
var myVideo = document.querySelector('video');
/*
你正在使用Document实例上可用的方法。每个页面在加载完毕后，会有一个 Document 的实例被创建，叫做 document，它代表了整个页面的结构，内容和一些功能，
比如页面的 URL。同样的，这意味 document 有一些可用的方法和属性。

这同样适用许多其他内建的对象或 API，你使用过有—— Array，Math，等。
请注意内建的对象或 API 不会总是自动地创建对象的实例，举例来说，这个 Notifications API——允许浏览器发起系统通知，

需要你为每一个你想发起的通知都使用构造器进行实例化。尝试在 JavaScript 终端里输入以下代码
*/
var myNotification = new Notification('Hello!');

//我们会在之后的文章里学习到构造器。

//Note: 这样来理解对象之间通过消息传递来通信是很有用的——当一个对象想要另一个执行某种动作时，它通常会通过那个对象的方法给其发送一些信息，并且等待回应，即我们所知的返回值。
/*
【对象原型】
JavaScript 常被描述为一种基于原型的语言 (prototype-based language)——每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。
原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，
它解释了为何一个对象会拥有定义在其他对象中的属性和方法。

准确地说，这些属性和方法定义在 Object 的构造器函数 (constructor functions) 之上的prototype属性上，而非对象实例本身。

在传统的 OOP 中，首先定义“类”，此后创建对象实例时，类中定义的所有属性和方法都被复制到实例中。
在 JavaScript 中并不如此复制——而是在对象实例和它的构造器之间建立一个链接（它是__proto__属性，是从构造函数的prototype属性派生的），
之后通过上溯原型链，在构造器中找到这些属性和方法。

(注意：理解对象的原型（可以通过Object.getPrototypeOf(obj)或者已被弃用的__proto__属性获得）与构造函数的prototype属性之间的区别是很重要的。
前者是每个实例上都有的属性，后者是构造函数的属性。也就是说，Object.getPrototypeOf(new Foobar())和Foobar.prototype指向着同一个对象。)

[使用 Javascript 中的原型]

在 javascript 中，函数可以有属性。每个函数都有一个特殊的属性叫作原型（prototype） ，正如下面所展示的。请注意，
下面的代码是独立的一段 (在网页中没有其他代码的情况下，这段代码是安全的)。
*/
function doSomething(){}
console.log( doSomething.prototype );
// It does not matter how you declare the function, a function in javascript will always have a default prototype property.
var doSomething = function(){};
console.log( doSomething.prototype );

/*
正如上面所看到的，doSomething 函数有一个默认的原型属性，它在控制台上面呈现了出来。运行这段代码之后，控制台上面应该出现了像这样的一个对象。

{
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}

现在，我们可以添加一些属性到 doSomething 的原型上面，如下所示。
*/
function doSomething(){}
doSomething.prototype.foo = "bar";
console.log( doSomething.prototype );

/*
结果：
{
    foo: "bar", //新增的原型属性
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}

然后，我们可以使用 new 运算符来在现在的这个原型基础之上，创建一个 doSomething 的实例。正确使用 new 运算符的方法就是在正常调用函数时，
在函数名的前面加上一个 new 前缀。通过这种方法，在调用函数前加一个 new ，它就会返回一个这个函数的实例化对象。然后，就可以在这个对象上面添加一些属性.
*/
function doSomething(){}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log( doSomeInstancing );
/*
结果：
{
    prop: "some value",
    __proto__: {
        foo: "bar",
        constructor: ƒ doSomething(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
}  

(就像上面看到的，doSomeInstancing 的 __proto__ 属性就是doSomething.prototype. 但是这又有什么用呢？好吧，当你访问 doSomeInstancing 的一个属性，
浏览器首先查找 doSomeInstancing 是否有这个属性。如果 doSomeInstancing 没有这个属性，然后浏览器就会在 doSomeInstancing 的 __proto__ 中查找这个属性 (也就是 doSomething.prototype).
如果 doSomeInstancing 的 __proto__ 有这个属性，那么 doSomeInstancing 的 __proto__ 上的这个属性就会被使用。否则，如果 doSomeInstancing 的 __proto__ 没有这个属性，
浏览器就会去查找 doSomeInstancing 的 __proto__ 的 __proto__ ，看它是否有这个属性。默认情况下，所有函数的原型属性的 __proto__ 就是 window.Object.prototype. 
所以 doSomeInstancing 的 __proto__ 的 __proto__ (也就是 doSomething.prototype 的 __proto__ (也就是 Object.prototype)) 会被查找是否有这个属性。
如果没有在它里面找到这个属性，然后就会在 doSomeInstancing 的 __proto__ 的 __proto__ 的 __proto__ 里面查找。然而这有一个问题：doSomeInstancing 的 __proto__ 的 __proto__ 的 __proto__ 不存在。
最后，原型链上面的所有的 __proto__ 都被找完了，浏览器所有已经声明了的 __proto__ 上都不存在这个属性，然后就得出结论，这个属性是 undefined.)
PS:总结起来就是类似于操作系统的文件逻辑，逐层递进，一个个文件文件找，找不到就是没有，大概就是这样的
*/
function doSomething(){}
doSomething.prototype.foo = "bar";
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
console.log("doSomething.prop:           " + doSomething.prop);
console.log("doSomething.foo:            " + doSomething.foo);
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);
/* 
结果：
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar

[理解原型对象]
PS:代码主体在另一个文件里，本部分主要是简要笔记
让我们回到 Person() 构造器的例子。
本例中我们将定义一个构造器函数：

function Person(first, last, age, gender, interests) {
  // 属性与方法定义
};

然后创建一个对象实例：
var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

在这个列表中，你可以看到定义在 person1 的原型对象、即 Person() 构造器中的成员—— name、age、gender、interests、bio、greeting。
同时也有一些其他成员—— watch、valueOf 等等——这些成员定义在 Person() 构造器的原型对象、即 Object 之上。下图展示了原型链的运作机制。

那么，调用 person1 的“实际定义在 Object 上”的方法时，会发生什么？比如：
person1.valueOf()

这个方法仅仅返回了被调用对象的值。在这个例子中发生了如下过程：

1.浏览器首先检查，person1 对象是否具有可用的 valueOf() 方法。
2.如果没有，则浏览器检查 person1 对象的原型对象（即 Person构造函数的 prototype 属性所指向的对象）是否具有可用的 valueof() 方法。
3.如果也没有，则浏览器检查 Person() 构造函数的 prototype 属性所指向的对象的原型对象（即 Object构造函数的 prototype 属性所指向的对象）
是否具有可用的 valueOf() 方法。这里有这个方法，于是该方法被调用。
(备注： 必须重申，原型链中的方法和属性没有被复制到其他对象——它们被访问需要通过前面所说的“原型链”的方式。)

备注： 没有官方的方法用于直接访问一个对象的原型对象——原型链中的“连接”被定义在一个内部属性中，在 JavaScript 语言标准中用 [[prototype]] 表示（
参见 ECMAScript）。然而，大多数现代浏览器还是提供了一个名为 __proto__ （前后各有 2 个下划线）的属性，其包含了对象的原型。
你可以尝试输入 person1.__proto__ 和 person1.__proto__.__proto__，看看代码中的原型链是什么样的！

[prototype 属性：继承成员被定义的地方]

那么，那些继承的属性和方法在哪儿定义呢？如果你查看 Object 参考页，会发现左侧列出许多属性和方法——大大超过我们在 person1 对象中看到的继承成员的数量。
某些属性或方法被继承了，而另一些没有——为什么呢？

原因在于，继承的属性和方法是定义在 prototype 属性之上的（你可以称之为子命名空间 (sub namespace) ）——那些以 Object.prototype. 开头的属性，
而非仅仅以 Object. 开头的属性。prototype 属性的值是一个对象，我们希望被原型链下游的对象继承的属性和方法，都被储存在其中。

于是 Object.prototype.watch()、Object.prototype.valueOf() 等等成员，适用于任何继承自 Object() 的对象类型，包括使用构造器创建的新的对象实例。

Object.is()、Object.keys()，以及其他不在 prototype 对象内的成员，不会被“对象实例”或“继承自 Object() 的对象类型”所继承。
这些方法/属性仅能被 Object() 构造器自身使用。

(备注： 这看起来很奇怪——构造器本身就是函数，你怎么可能在构造器这个函数中定义一个方法呢？其实函数也是一个对象类型，你可以查阅 Function() 构造器的参考文档以确认这一点)

1.你可以检查已有的 prototype 属性。回到先前的例子，在 JavaScript 控制台输入：
Person.prototype

2.输出并不多，毕竟我们没有为自定义构造器的原型定义任何成员。缺省状态下，构造器的 prototype 属性初始为空白。现在尝试：
Object.prototype

你会看到 Object 的 prototype 属性上定义了大量的方法；如前所示，继承自 Object 的对象都可以使用这些方法。

JavaScript 中到处都是通过原型链继承的例子。比如，你可以尝试从 String、Date、Number 和 Array 全局对象的原型中寻找方法和属性。
它们都在原型上定义了一些方法，因此当你创建一个字符串时：
*/
var myString = 'This is my string.';
/*
myString 立即具有了一些有用的方法，如 split()、indexOf()、replace() 等。

(警告: prototype 属性大概是 JavaScript 中最容易混淆的名称之一。你可能会认为，this 关键字指向当前对象的原型对象，
其实不是（还记得么？原型对象是一个内部对象，应当使用 __proto__ 访问）。prototype 属性包含（指向）一个对象，你在这个对象中定义需要被继承的成员。)


我们曾经讲过如何用 Object.create() 方法创建新的对象实例。
例如，在上个例子的 JavaScript 控制台中输入：
var person2 = Object.create(person1);

create() 实际做的是从指定原型对象创建一个新的对象。这里以 person1 为原型对象创建了 person2 对象。在控制台输入：
person2.__proto__

结果返回对象person1。

[constructor 属性]
每个实例对象都从原型中继承了一个 constructor 属性，该属性指向了用于构造此实例对象的构造函数。

例如，在控制台中尝试下面的指令：
*/
person1.constructor
person2.constructor
/*
都将返回 Person() 构造器，因为该构造器包含这些实例的原始定义。 一个小技巧是，你可以在 constructor 属性的末尾添加一对圆括号（括号中包含所需的参数），
从而用这个构造器创建另一个对象实例。毕竟构造器是一个函数，故可以通过圆括号调用；只需在前面添加 new 关键字，便能将此函数作为构造器使用。

在控制台中输入：
var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);

现在尝试访问新建对象的属性，例如：
*/
person3.name.first
person3.age
person3.bio()
/*
正常工作。通常你不会去用这种方法创建新的实例；但如果你刚好因为某些原因没有原始构造器的引用，那么这种方法就很有用了。
此外，constructor 属性还有其他用途。比如，想要获得某个对象实例的构造器的名字，可以这么用：
instanceName.constructor.name

具体地，像这样：
person1.constructor.name

[修改原型]

我们从下面这个例子来看一下如何修改构造器的 prototype 属性。

在已有的 JavaScript 的末尾添加如下代码，这段代码将为构造器的 prototype 属性添加一个新的方法：
Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
}
保存代码，在浏览器中加载页面，然后在控制台输入：
person1.farewell();

你会看到一条警告信息，其中还显示了构造器中定义的人名；这很有用。但更关键的是，整条继承链动态地更新了，任何由此构造器创建的对象实例都自动获得了这个方法。

再想一想这个过程。我们的代码中定义了构造器，然后用这个构造器创建了一个对象实例，此后向构造器的 prototype 添加了一个新的方法：
*/

function Person(first, last, age, gender, interests) {
// 属性与方法定义
};

var person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);
Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
}
/*
但是 farewell() 方法仍然可用于 person1 对象实例——旧有对象实例的可用功能被自动更新了。这证明了先前描述的原型链模型。
这种继承模型下，上游对象的方法不会复制到下游的对象实例中；下游对象本身虽然没有定义这些方法，但浏览器会通过上溯原型链、从上游对象中找到它们。
这种继承模型提供了一个强大而可扩展的功能系统。

你很少看到属性定义在 prototype 属性中，因为如此定义不够灵活。比如，你可以添加一个属性：
Person.prototype.fullName = 'Bob Smith';

但这不够灵活，因为人们可能不叫这个名字。用 name.first 和 name.last 组成 fullName 会好很多：
Person.prototype.fullName = this.name.first + ' ' + this.name.last;

然而，这么做是无效的，因为本例中 this 引用全局范围，而非函数范围。访问这个属性只会得到 undefined undefined。
但这个语句若放在先前定义在 prototype 上的方法中则有效，因为此时语句位于函数范围内，从而能够成功地转换为对象实例范围。
你可能会在 prototype 上定义常属性 (constant property) （指那些你永远无需改变的属性），但一般来说，在构造器内定义属性更好。

(备注： 关于 this 关键字指代（引用）什么范围/哪个对象，这个问题超出了本文讨论范围。事实上，这个问题有点复杂，如果现在你没能理解，也不用担心。)
<事实上，一种极其常见的对象定义模式是，在构造器（函数体）中定义属性、在 prototype 属性上定义方法。>如此，构造器只包含属性定义，
而方法则分装在不同的代码块，代码更具可读性。例如：

// 构造器及其属性定义
function Test(a,b,c,d) {
  // 属性定义
};
// 定义第一个方法
Test.prototype.x = function () { ... }
// 定义第二个方法
Test.prototype.y = function () { ... }

// 等等……
【面向对象编程的基本概念】
本篇文正社区没有中文翻译版，只有英文，暂时不理,应该是并到下一篇文章去了

【JavaScript 中的类】
[类和构造函数]
你可以使用 class 关键字声明一个类。下面是上一篇文章中关于 Person 类的一个声明：
*/
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}
/*
在这个 Person 类的声明中，有：

1.一个 name 属性。
2.一个需要 name 参数的构造函数，这一参数用于初始化新的对象的 name 属性。
3.一个 introduceSelf() 方法，使用 this 引用了对象的属性。
name; 这一声明是可选的：你可以省略它，因为在构造函数中的 this.name = name; 这行代码会在初始化 name 属性前自动创建它。
但是，在类声明中明确列出属性可以方便阅读代码的人更容易确定哪些属性是这个类的一部分。

你也可以在声明属性时，为其初始化一个默认值。就像这样：name = '';。

构造函数使用 constructor 关键字来声明。就像在类声明外的构造函数一样，它会：
1.创建一个新的对象
2.将 this 绑定到这个新的对象，你可以在构造函数代码中使用 this 来引用它
3.执行构造函数中的代码
4.返回这个新的对象
如上文中给出的类声明的代码，你可以像这样创建和使用一个新的 Person 实例：
*/
const giles = new Person('Giles');
giles.introduceSelf(); // Hi! I'm Giles
/*
注意，我们使用类的名字来调用构造函数，即示例中的 Person。

[省略构造函数]
如果你不需要任何特殊的初始化内容，你可以省略构造函数，默认的构造函数会被自动生成：
*/
class Animal {

  sleep() {
    console.log('zzzzzzz');
  }

}

const spot = new Animal();

spot.sleep(); // 'zzzzzzz'
/*
[继承]
对于上文给出的 Person 类，我们声明一个它的子类 Professor。
*/
class Professor extends Person {

  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}
/*
我们使用 extends 关键字来声明这个类继承自另一个类。

我们为 Professor 类添加了一个新的属性 teaches，就像声明的那样。
因为我们想在创建新的 Professor 时设置 teaches，我们需要声明一个需要 name 和 teaches 参数的构造函数。
构造函数中需要做的第一件事是使用 super() 调用父类的构造函数，并传递 name 参数。父类的构造函数会设置 name 属性。
然后 Professor 的构造函数接着设置 teaches 属性。

(备注： 如果子类有任何自己的初始化内容需要完成，[它也必须先使用 super() 来调用父类的构造函数，]并传递父类构造函数期望的任何参数。)

我们还覆盖了父类的 introduceSelf() 方法，并添加了一个新的方法 grade()，来为论文打分（我们的教授不是很好，只是随意地为论文打分）。

有了这个声明，我们现在可以创建和使用 professor 实例了：
*/
const walsh = new Professor('Walsh', 'Psychology');
walsh.introduceSelf();  // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade('my paper'); // some random grade
/*
[封装]
最后，让我们了解一下 JavaScript 中如何实现封装。在上一篇文章中，我们讨论了我们为什么想要使得 Student 的 year 属性变为私有的，我们可以在不破坏任何使用了 Student 类的代码的情况下，修改射箭课程的规则。

这里，就像我们之前想要的那样，声明了 Student 类：
*/
class Student extends Person {

  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }


  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }

}

//在这个类的声明中，#year 是一个私有数据属性。我们可以构造一个 Student 对象，然后在内部使用 #year，但如果在类的外部尝试访问 #year，浏览器将会抛出错误：

const summers = new Student('Summers', 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

//summers.#year; // SyntaxError(错误代码示例)

//私有数据属性必须在类的声明中声明，而且其名称需以 # 开头。
/*
[私有方法]
与私有数据属性一样，你也可以声明私有方法。而且名称也是以 # 开头，只能在类自己的方法中调用：
*/
class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log('You called me?');
  }

}
const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'

//myExample.#somePrivateMethod(); // SyntaxError(错误代码示例)
/*
【使用 JSON】
[什么是 JSON?]
JSON 是一种按照 JavaScript 对象语法的数据格式，这是 Douglas Crockford 推广的。虽然它是基于 JavaScript 语法，但它独立于 JavaScript，
这也是为什么许多程序环境能够读取（解读）和生成 JSON。

JSON 可以作为一个对象或者字符串存在，前者用于解读 JSON 中的数据，后者用于通过网络传输 JSON 数据。 
这不是一个大事件——JavaScript 提供一个全局的可访问的 JSON 对象来对这两种数据进行转换。
一个 JSON 对象可以被储存在它自己的文件中，这基本上就是一个文本文件，扩展名为 .json， 还有 MIME type 用于 application/json.

JSON 结构
我们已经可以推测出 JSON 对象就是基于 JavaScript 对象，而且这几乎是正确的。您可以把 JavaScript 对象原原本本的写入 JSON 数据——字符串，数字，数组，
布尔还有其它的字面值对象。这允许您构造出一个对象树，如下：
(json数据)
{
  "squadName" : "Super hero squad",
  "homeTown" : "Metro City",
  "formed" : 2016,
  "secretBase" : "Super tower",
  "active" : true,
  "members" : [
    {
      "name" : "Molecule Man",
      "age" : 29,
      "secretIdentity" : "Dan Jukes",
      "powers" : [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name" : "Madame Uppercut",
      "age" : 39,
      "secretIdentity" : "Jane Wilson",
      "powers" : [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name" : "Eternal Flame",
      "age" : 1000000,
      "secretIdentity" : "Unknown",
      "powers" : [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}

如果我们要加载对象进入 JavaScript 程序，以保存为一个名为 superHeroes 对象为例，我们使用.或[] 访问对象内的数据（关于.和[]概念,见对象基础)。如：
*/
superHeroes.hometown
superHeroes["active"]
/*
为了访问对象中的对象，您只需简单地链式访问（通过属性名和数组索引）。例如，访问 superHeroes 对象中的 members 数组对象的第二个元素的 powers 数组对象的第三个元素，您可以这样做：

superHeroes["members"][1]["powers"][2]

1.首先我们有变量名 superHeroes，储存对象。
2.在对象中我们想访问 members 属性，所以我们使用 ["members"]。
3.members 包含有对象数组，我们想要访问第二个元素，所以我们使用[1]。
4.在对象内，我们想访问 powers 属性，所以我们使用 ["powers"]。
5.powers 属性是一个包含英雄技能的数组。我们想要第三个，所以我们使用[2]。

[JSON 数组]
前面我们已经说过，”我们已经可以推测出 JSON 对象就是基于 JavaScript 对象，而且这几乎是正确的“——我们说几乎正确的原因是数组对象也是一种合法的 JSON 对象，例如：
*/
[
  {
    "name" : "Molecule Man",
    "age" : 29,
    "secretIdentity" : "Dan Jukes",
    "powers" : [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name" : "Madame Uppercut",
    "age" : 39,
    "secretIdentity" : "Jane Wilson",
    "powers" : [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
/*  
上面是完全合法的 JSON。您只需要通过数组索引就可以访问数组元素，如[0]["powers"][0]。

PS:其他注意事项
1.JSON 是一种纯数据格式，它只包含属性，没有方法。
2.JSON 要求在字符串和属性名称周围使用双引号。单引号无效。
3.甚至一个错位的逗号或分号就可以导致 JSON 文件出错。您应该小心的检查您想使用的数据 (虽然计算机生成的 JSON 很少出错，只要生成程序正常工作)。您可以通过像 JSONLint 的应用程序来检验 JSON。
4.JSON 可以将任何标准合法的 JSON 数据格式化保存，不只是数组和对象。比如，一个单一的字符串或者数字可以是合法的 JSON 对象。虽然不是特别有用处……
5.与 JavaScript 代码中对象属性可以不加引号不同，JSON 中只有带引号的字符串可以用作属性。

[主动学习 : 一个 JSON 示例]
好了，让我们通过运行这个示例来展示我们如何利用 JSON 数据。
PS:该示例代码主要在另一个文件上，这里是一些主要笔记

[加载我们的 JSON]
为了载入 JSON 到页面中，我们将使用 一个名为XMLHTTPRequest的 API（常称为 XHR）。这是一个非常有用的 JavaScript 对象，
使我们能够通过代码来向服务器请求资源文件 (如：图片，文本，JSON，甚至 HTML 片段)，意味着我们可以更新小段内容而不用重新加载整个页面。
这将有更多响应页面，听起来让人兴奋，但是这部分超出我们本部分的文章，所以就不多详述了。

[对象和文本间的转换]

上述示例就访问 JSON 而言是简单的，因为我们设置了 XHR 来访问 JSON 格式数据：
request.responseType = 'json';

但是有时候我们没有那么幸运，我们接收到一些 字符串作为 JSON 数据，然后我们想要将它转换为对象。当我们想要发送 JSON 数据作为信息，
我们将需要转换它为字符串，我们经常需要正确的转换数据，幸运的是，这两个问题在 web 环境中是那么普遍以至于浏览器拥有一个内建的 JSON，包含以下两个方法。

1.parse(): 以文本字符串形式接受 JSON 对象作为参数，并返回相应的对象。(字符串文本转整体json对象)
2.stringify(): 接收一个对象作为参数，返回一个对应的 JSON 字符串。(整体json对象转文本字符串 例子：'{"name":"Chris","age":"38"}')

您可以看看我们 heroes-finished-json-parse.html 示例的第一个操作 (见 source code) ，除了返回的是 text，这做了一件与我们之前一模一样的事情，
然后使用 parse() 来将他转换成为 JavaScript 对象。关键片段如下：
*/
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function() {
  var superHeroesText = request.response; // get the string from the response
  var superHeroes = JSON.parse(superHeroesText); // convert it to an object
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}

//正如您所想，stringify() 做相反的事情。尝试将下面的代码输入您的浏览器 JS 控制台来看看会发生什么：

var myJSON = { "name" : "Chris", "age" : "38" };
myJSON
var myString = JSON.stringify(myJSON);
myString

//这儿我们创建了一个 JavaScript 对象，然后检查了它包含了什么，然后用stringify() 将它转换成 JSON 字符串，最后保存返回值作为变量。然后再一次检查。
/*
【实践对象构造】
PS：本片文章也是注重实践的，所以笔记会放到文档中去,一些主要笔记会记在这里

[让我们开始吧]

(1)脚本的第一部分是这样的：
*/
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function random(min,max) {
  return Math.floor(Math.random()*(max-min)) + min;
}

function randomColor() {
  return 'rgb(' +
         random(0, 255) + ', ' +
         random(0, 255) + ', ' +
         random(0, 255) + ')';
}
/*
这个脚本使用变量代指了 <canvas> 元素，然后对其调用 getContext() 从而我们获得一个开始画画的环境。存储以上操作结果的变量（ctx）是一个对象，
直接代指画布上的一块允许我们绘制 2D 图形的区域。

接下来，我们设置 width 和 height 变量，并且让画布元素的宽和高（分别使用 canvas.width 和 canvas.height 表示）等于浏览器的宽和高
（也就是网页显示的区域 — 可以从 Window.innerWidth 和 Window.innerHeight参数获得）。
你会看到我们在这里串联了多个赋值表达式在一起，这样能更快地设置变量——这是完全正确的。

第一个函数为我们生成一个 min 至 max 之间的随机整数，第二个函数为我们生成一个随机的颜色值。

(2)为程序中的小球建立模型
首先，我们将下面的构造器加入到代码的底部。
*/
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size; 
}

/*
这个构造器中定义了每个小球需要的参数：

1.x 和 y 坐标 —— 小球在屏幕上最开始时候的坐标。坐标的范围从 0（左上角）到浏览器视口的宽和高（右下角）。
2.水平和竖直速度（velX 和 velY）—— 我们会给每个小球一个水平和竖直速度。实际上，当我们让这些球开始运动时候，每过一帧都会给小球的 x 和 y 坐标加一次这些值。
3.color —— 每一个小球会有自己的颜色。
4.size —— 每一个小球会有自己的大小 — 也就是小球的半径，以像素为单位。

[画小球]
(3)首先给小球的原型加上 draw() 方法：
*/
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}
/*
通过使用这个函数，通过使用我们之前定义的 ctx对象 的方法，我们就可以让在屏幕上画出小球了。ctx 的内容区域就像是一张纸，现在我们就可以命令我们的笔画一点东西。

1.首先，我们使用 beginPath() 来声明我们现在要开始在纸上画一个图形了。
2.然后，我们使用 fillStyle 来定义这个图形的颜色 — 这个值正是小球的颜色属性。
3.接下来，我们使用 arc() 方法来在纸上画出一段圆弧。有这些参数：
 x 和 y 是圆弧的中心的坐标 —— 也就是小球的中心坐标。
 圆弧的半径 —— 小球的半径。
 最后两个参数是开始和结束，也就是圆弧对应的夹角，单位以弧度表示。这里我们用的是 0 和 2 * PI，也就是 360 度（如果你设置成 0 和 1 * PI，则只会出现一个半圆，也就是 180 度）
4.最后，我们使用 fill() 方法，也就是声明我们结束了以 beginPath() 开始的绘画，并且使用我们之前设置的颜色进行填充。

[更新小球的数据]
我们可以在一个固定位置画出小球，但是他们不会动，我们需要一个函数来更新一些东西。在 JavaScript 文件底部加上下面的代码，
(4)也就是给小球原型加上一个 update() 方法。
*/
Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}
/*
函数的前四个部分用来检查小球是否碰到画布的边缘。如果碰到，我们反转小球的速度方向来让它向反方向移动。就比如说，如果小球正向上移动（正 velY），
然后垂直速度发生改变，小球就向下移动（负 velY）。

在这四部分中，我们：

1.检查小球的 x 坐标是否大于画布的宽度（小球会从右边缘离开）。
2.检查小球的 x 坐标是否小于 0（小球会从左边缘离开）。
3.检查小球的 y 坐标是否大于画布的高度（小球会从下边缘离开）。
4.检查小球的 y 坐标是否小于 0（小球会从上边缘离开）。
5.在每种情况下，我们都会加上小球的半径，因为 x/y 坐标是小球中心的坐标，我们希望小球在其边界接触浏览器窗口的边界时反弹，而不是小球的一部分都不见了再返回。

最后两行，我们将 velX 的值加到 x 的坐标上，将 velY 的值加到 y 坐标上 —— 每次调用这个方法的时候小球就移动这么多

[让球动起来]
现在就变得非常有趣了。我们在画布上加上一些小球，并且让他们动起来。

(5)首先我们需要一个地方储存小球，下面的数组会干这件事 —— 现在将它添加到你的代码底部：
*/
let balls = [];

while (balls.length < 25) {
    let size = random(10, 20);
    let ball = new Ball(
      // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(-7, 7),
      random(-7, 7),
      randomColor(),
      size
    );
    balls.push(ball);
  }

//几乎所有的动画效果都会用到一个运动循环，也就是每一帧都自动更新视图。这是大多数游戏或者其他类似项目的基础。
//(6)现在将它添加到你的代码底部：
function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();//添加完整，为了整齐
  }

  requestAnimationFrame(loop);
}
loop();
/*
loop() 函数做了下面的事情：
1.将整个画布的颜色设置成半透明的黑色。然后使用 fillRect()（这四个参数分别是起始的坐标、绘制的矩形的宽和高）画出一个填充满整个画布的矩形。
这是在下一个视图画出来时用来遮住之前的视图的。如果不这样做得话，你就会在屏幕上看到一条蛇的形状而不是小球的运动了。
用来填充的颜色设置成半透明的rgba(0,0,0,0.25)，也就是让之前的视图留下来一点点，从而你可以看到小球运动时的轨迹。
如果你将 0.25 设置成 1 时，你就完全看不到了。试着改变其中的值查看造成的影响。
2.当且仅当小球数量小于 25 时，将 random() 函数产生的数字传入新的小球实例从而创建一个新的小球，并且加入到数组中。因此当屏幕上有 25 个小球时，不会再出现更多小球。你可以改变这个值，从而看到不同小球个数造成的影响。如果你的电脑或者浏览器性能不怎么样的话，几千个小球的速度就会明显慢下来。
3.遍历数组中的所有小球，并且让每个小球都调用 draw() 和 update() 函数来将自己画出来，并且再接下来的每一帧都按照其速度进行位置的更新。
4.使用 requestAnimationFrame() 方法再运行一次函数 —— 当一个函数正在运行时传递相同的函数名，从而每隔一小段时间都会运行一次这个函数，
这样我们可以得到一个平滑的动画效果。这主要是通过递归完成的 —— 也就是说函数每次运行的时候都会调用自己，从而可以一遍又一遍得运行。

最后但是非常重要的是，加上下面这一行 —— 让动画开始运行的话我们需要调用这个函数。
loop();

[添加碰撞检测]
现在会更加有趣，给我们的项目加上碰撞检测，从而小球会知道他们正在撞击其他的球。

(7)首先在 update() 方法后添加以下方法（即 Ball.prototype.update 的下面）。
*/
//其实是在第四步之后添加一下代码
Ball.prototype.collisionDetect = function() {
  for (let j = 0; j < balls.length; j++) {
    if (this !== balls[j]) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = randomColor();
      }
    }
  }
}
/*
这个方法有一点点复杂，如果不理解的话不必过分担心，下面是对它的解释：
1.对于每个小球，我们都要检查其他的小球是否和当前这个小球相撞了。为了达到此目的，我们构造另外一个 for 循环来遍历 balls[] 数组中的小球。
2.在循环里面，我们使用一个 if 语句来检查遍历的小球是否是当前的小球。我们不希望检测到一个小球撞到了自己！为了达到这个目的，我们需要检查当前小球 (即正在调用 collisionDetect 方法的球) 是否和被循环到的小球 (for 循环检测中的当前遍历所引用的球) 是不是同一个。我们使用 ! 来否定判断，因此只有两个小球不是同一个时，条件判断中的代码才会运行。
3.我们使用了一个常见的算法来检测两个小球是否相撞了，两个小球中心的距离是否小于两个小球的半径之和。这些会在 2D 碰撞检测 介绍地更加详细。
4.如果检测到了碰撞，会运行 if 语句中的代码。我们会将两个小球的颜色都设置成随机的一种。我们也可以将这步操作变得复杂一点，比如让两个小球弹开，
那样需要植入更加复杂的代码。像这样的物理场景，有以下专门的库比如 PhysicsJS，matter.js，Phaser 等。

我们也需要在每一帧动画中都调用这个函数，因此在 balls[i].update() 加上下面的代码：
balls[i].collisionDetect();








*/
