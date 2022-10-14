/*
【Web API 简介】
[什么是 API?]
应用程序接口（API，Application Programming Interface）是基于编程语言构建的结构，使开发人员更容易地创建复杂的功能。它们抽象了复杂的代码，并提供一些简单的接口规则直接使用。

同样，比如说，编程来显示一些 3D 图形，使用以更高级语言编写的 API（例如 JavaScript 或 Python）
将会比直接编写直接控制计算机的 GPU 或其他图形功能的低级代码（比如 C 或 C++）来执行操作要容易得多。

[客户端 JavaScript 中的 API]

<JavaScript，API 和其他 JavaScript 工具之间的关系>
如上所述，我们讨论了什么是客户端 JavaScript API，以及它们与 JavaScript 语言的关系。让我们回顾一下，使其更清晰，并提及其他 JavaScript 工具的适用位置：

1.JavaScript — 一种内置于浏览器的高级脚本语言，您可以用来实现 Web 页面/应用中的功能。注意 JavaScript 也可用于其他象Node这样的的编程环境。但现在您不必考虑这些。
2.客户端 API —  内置于浏览器的结构程序，位于 JavaScript 语言顶部，使您可以更容易的实现功能。
3.第三方 API —  置于第三方普通的结构程序（例如 Twitter，Facebook），使您可以在自己的 Web 页面中使用那些平台的某些功能（例如在您的 Web 页面显示最新的 Tweets）。
4.JavaScript 库 —  通常是包含具有特定功能的一个或多个 JavaScript 文件，把这些文件关联到您的 Web 页以快速或授权编写常见的功能。例如包含 jQuery 和 Mootools
5.JavaScript 框架 —  从库开始的下一步，JavaScript 框架视图把 HTML、CSS、JavaScript 和其他安装的技术打包在一起，然后用来从头编写一个完整的 Web 应用。

[API 可以做什么？]
<常见浏览器 API>
特别地，您将使用的最常见的浏览器 API 类别（以及我们将更详细地介绍的）是：

1.操作文档的 API。内置于浏览器中。 最明显的例子是DOM（文档对象模型）API，它允许您操作 HTML 和 CSS — 创建、移除以及修改 HTML，
动态地将新样式应用到您的页面，等等。每当您看到一个弹出窗口出现在一个页面上，或者显示一些新的内容时，这都是 DOM 的行为。 
您可以在在Manipulating documents中找到关于这些类型的 API 的更多信息。

2.从服务器获取数据的 API 。 用于更新网页的一小部分是相当好用的。这个看似很小的细节能对网站的性能和行为产生巨大的影响 — 
如果您只是更新一个股票列表或者一些可用的新故事而不需要从服务器重新加载整个页面将使网站或应用程序感觉更加敏感和“活泼”。
使这成为可能的 API 包括XMLHttpRequest和Fetch API。您也可能会遇到描述这种技术的术语Ajax。
您可以在Fetching data from the server找到关于类似的 API 的更多信息。

3.用于绘制和操作图形的API。 目前已被浏览器广泛支持 — 最流行的是允许您以编程方式更新包含在 HTML <canvas> 元素中的像素数据以创建 2D 和 3D 场景的
Canvas和WebGL。例如，您可以绘制矩形或圆形等形状，将图像导入到画布上，然后使用 Canvas API 对其应用滤镜（如棕褐色滤镜或灰度滤镜），
或使用 WebGL 创建具有光照和纹理的复杂 3D 场景。这些 API 经常与用于创建动画循环的 API（例如window.requestAnimationFrame()
和其他 API 一起不断更新诸如动画和游戏之类的场景。

4.音频和视频 API。 例如HTMLMediaElement，Web Audio API和WebRTC允许您使用多媒体来做一些非常有趣的事情，比如创建用于播放音频和视频的自定义 UI 控件，
显示字幕字幕和您的视频，从网络摄像机抓取视频，通过画布操纵（见上），或在网络会议中显示在别人的电脑上，或者添加效果到音轨（如增益，失真，平移等）。

5.设备API。 基本上是以对网络应用程序有用的方式操作和检索现代设备硬件中的数据的 API。我们已经讨论过访问设备位置数据的地理定位 API，
因此您可以在地图上标注您的位置。其他示例还包括通过系统通知（参见Notifications API）或振动硬件（参见Vibration API）
告诉用户 Web 应用程序有用的更新可用。

6.客户端存储API。 在 Web 浏览器中的使用变得越来越普遍 - 如果您想创建一个应用程序来保存页面加载之间的状态，甚至让设备在处于脱机状态时可用，
那么在客户端存储数据将会是非常有用的。例如使用Web Storage API的简单的键 - 值存储以及使用IndexedDB API的更复杂的表格数据存储。

<常见第三方 API>

第三方 API 种类繁多; 下列是一些比较流行的你可能迟早会用到的第三方 API:

1.The Twitter API ,允许您在您的网站上展示您最近的推文等。
2.The Google Maps API , 允许你在网页上对地图进行很多操作（这很有趣，它也是 Google 地图的驱动器）。现在它是一整套完整的，能够胜任广泛任务的 API。其能力已经被Google Maps API Picker见证。
3.The Facebook suite of API ,允许你将很多 Facebook 生态系统中的功能应用到你的 app，使之受益，比如说它提供了通过 Facebook 账户登录、接受应用内支付、推送有针对性的广告活动等功能。
4.The YouTube API, 允许你将 Youtube 上的视频嵌入到网站中去，同时提供搜索 Youtube，创建播放列表等众多功能。
5.The Twilio API, 其为您的 app 提供了针对语音通话和视频聊天的框架，以及从您的 app 发送短信息或多媒体信息等诸多功能。  

[API 如何工作？]

一、它们是基于对象的

API 使用一个或多个 JavaScript objects 在您的代码中进行交互，这些对象用作 API 使用的数据（包含在对象属性中）的容器以及 API 提供的功能
（包含在对象方法中）。

(备注： 如果您不熟悉对象如何工作，则应继续学习 JavaScript objects 模块。)
让我们回到 Geolocation API 的例子 - 这是一个非常简单的 API，由几个简单的对象组成：

1.Geolocation其中包含三种控制地理数据检索的方法
2.Position, 表示在给定的时间的相关设备的位置。 — 它包含一个当前位置的 Coordinates 对象。还包含了一个时间戳，这个时间戳表示获取到位置的时间。
3.Coordinates, 其中包含有关设备位置的大量有用数据，包括经纬度，高度，运动速度和运动方向等。
*/
navigator.geolocation.getCurrentPosition(function(position) {
  var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
  var myOptions = {
    zoom: 8, //zoom缩放，放大仿小的意思  
    center: latlng,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    disableDefaultUI: true
  }
  //options是多种备用选择项内容的意思
  var map = new google.maps.Map(document.querySelector("#map_canvas"), myOptions);
});
/*

(备注： 当您第一次加载上述实例，应当出现一个对话框询问您是否乐意对此应用共享位置信息（参见 它们在适当的地方有额外的安全机制 这一稍后将会提到的部分）。
您需要同意这项询问以将您的位置于地图上绘制。如果您始终无法看见地图，您可能需要手动修改许可项。修改许可项的方法取决于您使用何种浏览器，
对于 Firefox 浏览器来说，在页面信息 > 权限 中修改位置权限，在 Chrome 浏览器中则进入 设置 > 隐私 > 显示高级设置 > 内容设置，其后修改位置设定。)

我们首先要使用 Geolocation.getCurrentPosition() 方法返回设备的当前位置。浏览器的 Geolocation 对象通过调用 Navigator.geolocation 属性来访问。
*/
navigator.geolocation.getCurrentPosition(function(position) { xxx });

//这相当于做同样的事情

var myGeo = navigator.geolocation;
myGeo.getCurrentPosition(function(position) { xxx });
/*  
 <但是我们可以使用 "点运算符" 将我们的属性和方法的访问链接在一起，减少了我们必须写的行数。>

Geolocation.getCurrentPosition() 方法只有一个必须的参数，这个参数是一个匿名函数，当设备的当前位置被成功取到时，这个函数会运行。 
这个函数本身有一个参数，它包含一个表示当前位置数据的 Position 对象。

<备注： 由另一个函数作为参数的函数称为 (callback function "回调函数").>

仅在操作完成时调用函数的模式在 JavaScript API 中非常常见 - 确保一个操作已经完成，然后在另一个操作中尝试使用该操作返回的数据。
这些被称为 **asynchronous **“异步”操作。由于获取设备的当前位置依赖于外部组件（设备的 GPS 或其他地理定位硬件），我们不能保证会立即使用返回的数据。
因此，这样子是行不通的：
*/
var position = navigator.geolocation.getCurrentPosition();
var myLatitude = position.coords.latitude;
/*
如果第一行还没有返回结果，则第二行将会出现错误，因为位置数据还不可用。出于这个原因，涉及同步操作的 API 被设计为使用 callback functions“回调函数”，
或更现代的 Promises 系统，这些系统在 ECMAScript 6 中可用，并被广泛用于较新的 API。

我们将 Geolocation API 与第三方 API（Google Maps API）相结合， — 我们正在使用它来绘制 Google 地图上由 getCurrentPosition()返回的位置。 
我们通过链接到页面上使这个 API 可用。 — 你会在 HTML 中找到这一行：

<script type="text/javascript" src="https://maps.google.com/maps/API/js?key=AIzaSyDDuGt0E5IEGkcE6ZfrKfUtE9Ko_de66pA"></script>

要使用该 API, 我们首先使用google.maps.LatLng()构造函数创建一个LatLng对象实例， 该构造函数需要我们的地理定位 Coordinates.latitude 和 
Coordinates.longitude (en-US)值作为参数：
*/
var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

//该对象实例被设置为 myOptions对象的center属性的值。然后我们通过调用google.maps.Map()构造函数创建一个对象实例来表示我们的地图，
// 并传递它两个参数 — 一个参数是我们要渲染地图的 <div> 元素的引用 (ID 为 map_canvas), 以及另一个参数是我们在上面定义的myOptions对象

var myOptions = {
  zoom: 8,
  center: latlng,
  mapTypeId: google.maps.MapTypeId.TERRAIN,
  disableDefaultUI: true
}

var map = new google.maps.Map(document.querySelector("#map_canvas"), myOptions);
/*
这样做一来，我们的地图呈现了。

最后一块代码突出显示了您将在许多 API 中看到的两种常见模式。 首先，API 对象通常包含构造函数，可以调用这些构造函数来创建用于编写程序的对象的实例。
其次，API 对象通常有几个可用的 options(如上面的myOptions对象)，可以调整以获得您的程序所需的确切环境 (根据不同的环境，编写不同的Options对象)。
API 构造函数通常接受 options 对象作为参数，这是您设置这些 options 的地方。

<备注： 如果您不能立即理解这个例子的细节，请不要担心。我们将在未来的文章中详细介绍第三方 API。>

二、它们有可识别的入口点

使用 API 时，应确保知道 API 入口点的位置。在 Geolocation API 中，这非常简单 - 它是 Navigator.geolocation 属性，它返回浏览器的 Geolocation 对象，所有有用的地理定位方法都可用。

文档对象模型 (DOM) API 有一个更简单的入口点 —它的功能往往被发现挂在 Document 对象，或任何你想影响的 HTML 元素的实例，例如：
*/
var em = document.createElement('em');   // create a new em element
var para = document.querySelector('p');   // reference an existing p element
em.textContent = 'Hello there!';   // give em some text content
para.appendChild(em);   // embed em inside para
/*
其他 API 具有稍微复杂的入口点，通常涉及为要编写的 API 代码创建特定的上下文。例如，Canvas API 的上下文对象是通过获取要绘制的 <canvas> 元素的引用来创建的，然后调用它的HTMLCanvasElement.getContext()方法：
*/
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

//然后，我们想通过调用内容对象 (它是CanvasRenderingContext2D的一个实例) 的属性和方法来实现我们想要对画布进行的任何操作，例如：

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
/*
<备注： 您可以在我们的 <弹跳球演示>中看到此代码的实际 <运行情况> (也可以参阅它< 现场运行>)。>

三、它们使用事件来处理状态的变化

PS:我们之前已经在课程中讨论了事件，在我们的 事件介绍文章中 - 详细介绍了客户端 Web 事件是什么以及它们在代码中的用法。
如果您还不熟悉客户端 Web API 事件的工作方式，则应继续阅读。

一些 Web API 不包含事件，但有些包含一些事件。当事件触发时，允许我们运行函数的处理程序属性通常在单独的“Event handlers”(事件处理程序) 部分的参考资料中列出。作为一个简单的例子，XMLHttpRequest 对象的实例 （每一个实例都代表一个到服务器的 HTTP 请求，来取得某种新的资源）都有很多事件可用，例如 onload 事件在成功返回时就触发包含请求的资源，并且现在就可用。

下面的代码提供了一个简单的例子来说明如何使用它：
*/
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
/*
前五行指定了我们要获取的资源的位置，使用XMLHttpRequest() 构造函数创建请求对象的新实例 ，打开 HTTP 的 GET 请求以取得指定资源，
指定响应以 JSON 格式发送，然后发送请求。

然后 onload 处理函数指定我们如何处理响应。我们知道请求会成功返回，并在需要加载事件（如onload 事件）之后可用（除非发生错误），
所以我们将包含返回的 JSON 的响应保存在superHeroes变量中，然后将其传递给两个不同的函数以供进一步处理。

四、它们在适当的地方有额外的安全机制

WebAPI 功能受到与 JavaScript 和其他 Web 技术（例如同源政策）相同的安全考虑 但是他们有时会有额外的安全机制。
例如，一些更现代的 WebAPI 将只能在通过 HTTPS 提供的页面上工作，因为它们正在传输潜在的敏感数据（例如 服务工作者 和 推送）。

另外，一旦调用 WebAPI 请求，用户就可以在您的代码中启用一些 WebAPI 请求权限。例如，通知 API 使用弹出对话框请求权限：

这些许可提示会被提供给用户以确保安全 - 如果这些提示不在适当位置，那么网站可能会在您不知情的情况下开始秘密跟踪您的位置，或者通过大量恼人的通知向您发送垃圾邮件。

【操作文档】
[web 浏览器的重要部分]
web 浏览器的软件中有很多活动的程序片段，而许多片段 web 开发人员无法使用 JavaScript 来控制或操作，因此 Web 浏览器是一个很复杂的软件组合。
你可能认为这样的限制是不是好事，但是浏览器被锁定是有充分理由的，主要集中在安全方面。如果一个网站可以访问您存储的密码或其他敏感信息，
犹如你一样登录到网站，试想会发生什么？

尽管有局限性，Web API 仍然允许我们访问许多的功能，使我们用 web 页做很多事情。有几个在代码中经常引用的非常明显的部位 - 
下面的图表表示了直接出现在 web 页面视图中的浏览器的主要部分：(这里有一个图片示例)

1.window 是载入浏览器的标签，在 JavaScript 中用Window对象来表示，使用这个对象的可用方法，你可以返回窗口的大小（参见Window.innerWidth和Window.innerHeight），
操作载入窗口的文档，存储客户端上文档的特殊数据（例如使用本地数据库或其他存储设备），为当前窗口绑定event handler，等等。
2.navigator 表示浏览器存在于 web 上的状态和标识（即用户代理）。在 JavaScript 中，用Navigator来表示。你可以用这个对象获取一些信息，
比如来自用户摄像头的地理信息、用户偏爱的语言、多媒体流等等。
3.document（在浏览器中用 DOM 表示）是载入窗口的实际页面，在 JavaScript 中用Document 对象表示，你可以用这个对象来返回和操作文档中 HTML 和 CSS 上的信息。
例如获取 DOM 中一个元素的引用，修改其文本内容，并应用新的样式，创建新的元素并添加为当前元素的子元素，甚至把他们一起删除。

[文档对象模型]
在浏览器标签中当前载入的文档用文档对象模型来表示。这是一个由浏览器生成的“树结构”，使编程语言可以很容易的访问 HTML 结构 — 例如浏览器自己在呈现页面时，
使用它将样式和其他信息应用于正确的元素，而页面呈现完成以后，开发人员可以用 JavaScript 操作 DOM。

这是一个很简单的页面，包含了一个<section> 元素，里面有一个图像和有链接的段落。HTML 源码如下：(这里有一个节点和树结构的示例图，放在iamges文件夹里了)

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple DOM example</title>
  </head>
  <body>
      <section>
        <img src="dinosaur.png" alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.">
        <p>Here we will add a link to the <a href="https://www.mozilla.org/">Mozilla homepage</a></p>
      </section>
  </body>
</html>

这里你可以看到，文档中每个元素和文本在树中都有它们自己的入口 — 称之为节点。你将用不同的术语来描述节点的类型和它们相对于其他节点的位置：

1.元素节点: 一个元素，存在于 DOM 中。
2.根节点: 树中顶层节点，在 HTML 的情况下，总是一个HTML节点（其他标记词汇，如 SVG 和定制 XML 将有不同的根元素）。
3.子节点: 直接位于另一个节点内的节点。例如上面例子中，IMG是SECTION的子节点。
4.后代节点: 位于另一个节点内任意位置的节点。例如 上面例子中，IMG是SECTION的子节点，也是一个后代节点。IMG不是BODY的子节点，
因为它在树中低了BODY两级，但它是BODY的后代之一。
5.父节点: 里面有另一个节点的节点。例如上面的例子中BODY是SECTION的父节点。
6.兄弟节点: DOM 树中位于同一等级的节点。例如上面例子中，IMG和P是兄弟。
7.文本节点: 包含文字串的节点
8.在用 DOM 工作之前，熟悉这些术语是很有用的，因为你将会遇到大量代码术语的使用。你在研究 CSS 时也会遇到这些术语（例如后代选择器、子选择器）

[主动学习：基本的 DOM 操作]
代码主要放在另一个html文件里了,笔记也主要在html文档里了
*/
var link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

/*
现在你有了一个存储在变量中的元素引用，你可以使用它的可用属性和方法来操作它（在<a>元素的情况下定义为接口HTMLAnchorElement，
它更常常用的父接口是HTMLElement和表示 DOM 中所有节点的Node）。首先，更新 Node.textContent属性的值来修改链接中的文字。在上面的代码后面加入一行代码：

我们也能修改链接指向的 URL，使得它被点击时不会走向错误的位置。在底部再加入下列代码：

注意，和 JavaScript 中的许多事情一样，有很多方法可以选择一个元素，并在一个变量中存储一个引用。Document.querySelector()是推荐的主流方法，
它允许你使用 CSS 选择器选择元素，使用很方便。上面的querySelector()调用会匹配它在文档中遇到的第一个<a>元素。如果想对多个元素进行匹配和操作，
你可以使用Document.querySelectorAll()，这个方法匹配文档中每个匹配选择器的元素，并把它们的引用存储在一个array中。

对于获取元素引用，还有一些更旧的方法，如：

1.Document.getElementById()， 选择一个id属性值已知的元素，例如<p id="myId">My paragraph</p>。ID 作为参数传递给函数，
即 var elementRef = document.getElementById('myId')。
2.Document.getElementsByTagName()， 返回页面中包含的所有已知类型元素的数组。如<p>s, <a>。元素类型作为参数传递给函数，
即var elementRefArray = document.getElementsByTagName('p').
<PS:在较老的浏览器中使用这两种方法而不是流行的querySelector()方法，但这样并不方便。>

最后，在内部链接的段落中添加文本节点，完美的结束句子。首先我们要使用Document.createTextNode()创建一个文本节点：
现在获取内部连接的段落的引用，并把文本节点绑定到这个节点上：
*/
var text = document.createTextNode(' — the premier source for web development knowledge.');
Document.getElementsByTagName();
Document.getElementById();//上面代码的复制，更直观一些
Document.createTextNode();

/*
<移动和删除元素>
*/
//一些代码术语摘要
Element.appendChild();
Node.cloneNode(); 
Element.removeChild();
Element.parentNode.removeChild();
/*
也许有时候你想移动或从 DOM 中删除节点，这是完全可能的。

1.如果你想把具有内部链接的段落移到 sectioin 的底部，简单的做法是：
sect.appendChild(linkPara);

这样可以把段落下移到 section 的底部。你可能想过要做第二个副本，但是情况并非如此 — linkPara是指向该段落唯一副本的引用。
2.如果你想做一个副本并也把它添加进去，只能用Node.cloneNode() 方法来替代。

3,删除节点也非常的简单，至少，你拥有要删除的节点和其父节点的引用。在当前情况下，我们只要使用Node.removeChild()即可，如下：
sect.removeChild(linkPara);

4.要删除一个仅基于自身引用的节点可能稍微有点复杂，这也是很常见的。没有方法会告诉节点删除自己，所以你必须像下面这样操作。
linkPara.parentNode.removeChild(linkPara);

<操作样式>
通过 JavaScript 以不同的方式来操作 CSS 样式是可能的。

首先，使用 Document.stylesheets返回CSSStyleSheet数组，获取绑定到文档的所有样式表的序列。然后添加/删除想要的样式。然而，我们并不想扩展这些特性，
因此它们在操作样式方面有点陈旧和困难，而现在有了更容易的方法。

一、第一种方法是直接在想要动态设置样式的元素内部添加内联样式。这是用HTMLElement.style (en-US)属性来实现。这个属性包含了文档中每个元素的内联样式信息。
你可以设置这个对象的属性直接修改元素样式。

要做个例子，把下面的代码行加到我们的例子中：
*/
//代码术语摘要
Document.stylesheets;
CSSStyleSheet;
HTMLElement.style;

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';
/*
重新载入页面，你将看到样式已经应用到段落中。如果在浏览器的Page Inspector/DOM inspector中查看段落，你会看到这些代码的确为文档添加了内联样式：
<p style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">We hope you enjoyed the ride.</p>

<备注： CSS 样式的 JavaSript 属性版本以小驼峰式命名法书写，而 CSS 版本带连接符号（backgroundColor 对 background-color）。确保你不会混淆，
否则就不能工作。>

二、现在我们来看看另一个操作文档样式的常用方法。

删除之前添加到 JavaScript 中的五行代码。
在 HTML 的<head>中添加下列代码 :

<style>
.highlight {
  color: white;
  background-color: black;
  padding: 10px;
  width: 250px;
  text-align: center;
}
</style>

现在我们改为使用 HTML 操作的常用方法 — Element.setAttribute() — 这里有两个参数，你想在元素上设置的属性，你要为它设置的值。在这种情况下，
我们在段落中设置类名为 highlight：
*/
para.setAttribute('class', 'highlight');
/*

刷新页面，看不到改变 — CSS 仍然应用到段落，但是这次给出 CSS 规则选择的类不是内联 CSS 样式。
两种方式各有优缺点，选择哪种取决于你自己。第一种方式无需安装，适合简单应用，第二种方式更加正统（没有 CSS 和 JavaScript 的混合，没有内联样式，
而这些被认为是不好的体验）。当你开始构建更大更具吸引力的应用时，你可能会更多地使用第二种方法，但这完全取决于你自己。

在这一点上，我们还没有做任何有用的事！使用 JavaScript 创建静态内容是毫无意义的 — 最好将其写入 HTML，而不使用 JavaScript。
用 JavaScript 创建内容也有其他问题（如不能被搜索引擎读取），比 HTML 复杂得多。

[主动学习：从 Window 对象中获取有用的信息]
PS:学习文件示例网页不存在.
你可以看到我们用一个<div>元素包裹屏幕的小部分，用来获得应用的 background tile。

首先，获取这个 div 的引用，然后获取视窗（显示文档的内部窗口）的宽度和高度，并存入变量中 — 
这两个值包含在Window.innerWidth 和 Window.innerHeight属性中。在已存在的<script>元素中加入下列代码：
*/
Window.innerWidth //关键代码术语
Window.innerHeight
Window.onresize

var div = document.querySelector('div');
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
//接下来，我们将动态地改变 div 的宽度和高度，使其等于视窗的宽度和高度。在您的代码下面添加以下两行：
div.style.width = WIDTH + 'px';
div.style.height = HEIGHT + 'px';
//Window对象有一个称为 resize 的可用事件。每次窗口调整大小时都会触发该事件 — 我们可以通过Window.onresize 事件处理程序来访问它，并返回每次改变大小的代码。在代码底部添加下列程序：

window.onresize = function() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  div.style.width = WIDTH + 'px';
  div.style.height = HEIGHT + 'px';
}
/*
【从服务器获取数据】
[Ajax 开始]
这个模型的问题是当你想更新网页的任何部分，例如显示一套新的产品或者加载一个新的页面，你需要再一次加载整个页面。
这是非常浪费的并且导致了差的用户体验尤其是现在的页面越来越大且越来越复杂。

这导致了创建允许网页请求小块数据（例如 HTML, XML, JSON, 或纯文本) 和 仅在需要时显示它们的技术，从而帮助解决上述问题。

这是通过使用诸如 XMLHttpRequest 之类的 API 或者 — 最近以来的 Fetch API 来实现。这些技术允许网页直接处理对服务器上可用的特定资源的 HTTP 请求，
并在显示之前根据需要对结果数据进行格式化。

<备注： 在早期，这种通用技术被称为 Asynchronous JavaScript and XML**（Ajax），** 因为它倾向于使用XMLHttpRequest 来请求 XML 数据。
但通常不是这种情况 (你更有可能使用 XMLHttpRequest 或 Fetch 来请求 JSON), 但结果仍然是一样的，术语“Ajax”仍然常用于描述这种技术。>

Ajax 模型包括使用 Web API 作为代理来更智能地请求数据，而不仅仅是让浏览器重新加载整个页面。
现在搜索一些东西，比如一个新产品。主要内容将会改变，但大部分周围的信息，如页眉，页脚，导航菜单等都将保持不变。

这是一件非常好的事情，因为：

1.页面更新速度更快，您不必等待页面刷新，这意味着该网站体验感觉更快，响应更快。
2.每次更新都会下载更少的数据，这意味着更少地浪费带宽。在宽带连接的桌面上这可能不是一个大问题，但是在移动设备和发展中国家没有无处不在的快速互联网服务是一个大问题。

为了进一步提高速度，有些网站还会在首次请求时将资产和数据存储在用户的计算机上，这意味着在后续访问中，他们将使用本地版本，
而不是在首次加载页面时下载新副本。内容仅在更新后从服务器重新加载。

(PS:本文不会涉及这种存储技术。我们稍后会在模块中讨论它。)

[基本的 Ajax 请求]
让我们看看使用XMLHttpRequest和Fetch如何处理这样的请求。对于这些例子，我们将从几个不同的文本文件中请求数据，并使用它们来填充内容区域。

术语:XMLHttpRequest
备注:以下笔记主要是实践练习，这里主要是摘要一些主要的关键词和语句笔记
PS:直接跳到第四步了
1.我们将通过构造一个 指向我们要加载的文本文件的相对 URL 来启动我们的函数，因为我们稍后需要它。任何时候 <select> 元素的值都与所选的 <option>
内的文本相同 (除非在值属性中指定了不同的值) — 例如 "Verse 1". 相应的诗歌文本文件是 "verse1.txt", 并与 HTML 文件位于同一目录中，因此只需要文件名即可。
但是，Web 服务器往往是区分大小写的，文件名没有空格。要将“Verse 1”转换为“verse1.txt”，我们需要将 V 转换为小写，删除空格，并在末尾添加.txt。 
这可以通过 replace(), toLowerCase(), 和 简单的 string concatenation 来完成。在 updateDisplay() 函数中添加以下代码：

2.要开始创建 XHR 请求，您需要使用 XMLHttpRequest() 的构造函数创建一个新的请求对象。 你可以把这个对象叫做你喜欢的任何东西，
但是我们会把它叫做 request 来保持简单。在之前的代码中添加以下内容：

3.接下来，您需要使用 open() 方法来指定用于从网络请求资源的 HTTP request method , 以及它的 URL 是什么。我们将在这里使用 GET 方法，
并将 URL 设置为我们的 url 变量。在你上面的代码中添加以下代码：

4.接下来，我们将设置我们期待的响应类型 — 这是由请求的 responseType 属性定义的 — 作为 text. 这并不是绝对必要的 — XHR 默认返回文本 
—但如果你想在以后获取其他类型的数据，养成这样的习惯是一个好习惯。接下来添加：

5.从网络获取资源是一个< asynchronous >"异步" 操作，这意味着您必须等待该操作完成（例如，资源从网络返回），然后才能对该响应执行任何操作，否则会出错，
将被抛出错误。XHR 允许你使用它的 onload 事件处理器来处理这个事件 — 当onload 事件触发时（当响应已经返回时）这个事件会被运行。发生这种情况时， 
response 数据将在 XHR 请求对象的响应属性中可用。 在后面添加以下内容。 你会看到，在 onload 事件处理程序中，
我们将 poemDisplay ( <pre> 元素 ) 的 textContent 设置为 request.response 属性的值。

6.以上都是 XHR 请求的设置 — 在我们告诉它之前，它不会真正运行，这是通过 send() 完成的。在你之前的代码下添加以下内容完成该函数：

7.这个例子中的一个问题就是它首次加载时不会显示任何诗。为了解决这个问题，在代码的底部添加以下两行 (正好在关闭的 </script> 标签之上) 默认加载第 1 节，
并确保 <select> 元素始终显示正确的值：


*/
//XMLHttpRequest代码集中演示
verse = verse.replace(" ", "");
verse = verse.toLowerCase();
let url = verse + '.txt';

let request = new XMLHttpRequest();

request.open('GET', url);

request.responseType = 'text';

request.onload = function() {
  poemDisplay.textContent = request.response;
};

request.send();

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';
/*
[Fetch]
Fetch API 基本上是 XHR 的一个现代替代品——它是最近在浏览器中引入的，它使异步 HTTP 请求在 JavaScript 中更容易实现，
对于开发人员和在 Fetch 之上构建的其他 API 来说都是如此。
*/
//替换掉XMLHttpRequest版本的代码
fetch(url).then(function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});
/*
[那么 Fetch 代码中发生了什么呢？]
首先，我们调用了fetch()方法，将我们要获取的资源的 URL 传递给它。这相当于现代版的 XHR 中的request.open(),另外，您不需要任何等效的send()方法。

然后，你可以看到.then()方法连接到了fetch()末尾 - 这个方法是Promises的一部分，是一个用于执行异步操作的现代 JavaScript 特性。fetch()返回一个 promise，
它将解析从服务器发回的响应。我们使用then()来运行一些后续代码，这是我们在其内部定义的函数。这相当于 XHR 版本中的onload事件处理程序。

当fetch() promise 解析时，这个函数会自动将响应从服务器传递给参数。在函数内部，我们获取响应并运行其text()方法。这基本上将响应作为原始文本返回，
这相当于在 XHR 版本中的responseType = 'text'。

你会看到 text() 也返回了一个 promise, 所以我们连接另外一个 .then() 到它上面，在其中我们定义了一个函数来接收 text() promise 解析的生文本。

[关于 promises]
当你第一次见到它们的时候，promises 会让你有点困惑，但现在不要太担心这个。在一段时间之后，您将会习惯它们，特别是当您了解更多关于现代 JavaScript api 的时候——大多数现代的 JavaScript api 都是基于 promises 的。

让我们再看看上面的 promises 结构，看看我们是否能更清楚地理解它：
*/
fetch(url).then(function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});
/*第一行是说‘’获取位于 url 里的资源 (fetch(url))‘’和“然后当 promise 解析后运行指定的函数 (.then(function() { ... }))”。
"解析"的意思是"在将来某一时刻完成指定的操作"。在本例中，指定的操作是从指定的 URL(使用 HTTP 请求) 获取资源，并返回对我们执行某些操作的响应。

实际上，传递给 then() 是一段不会立即执行的代码 — 而是当返回响应时代码会被运行。注意，你还可以选择把你的 promise 保存到一个变量里，
链接 .then() 在相同的位置。下面的代码会做相同的事情。
*/
let myFetch = fetch(url);

myFetch.then(function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});
//因为方法 fetch() 返回一个解析 HTTP 响应的 promise, 你在 .then() 中定义的任何函数会被自动给与一个响应作为一个参数。
//你可以给这个参数取任何名字，以下的例子依然可以实现：（例子里把 response 参数叫做狗饼干---'dogBiscuits'=狗饼干）

fetch(url).then(function(dogBiscuits) {
  dogBiscuits.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});
//但是把参数叫做描述其内容的名字更有意义。现在让我们来单独看一下函数：
/*
function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
}

response 对象有个 text() (en-US)方法，获取响应主体中的原始数据 a 并把它转换成纯文本，那是我们想要的格式。
它也返回一个 promise (解析结果文本字符串), 所以这里我们再使用 .then(), 在里面我们再定义一个操作文本字符串的函数。
我们设置诗歌的 element represents preformatted text which is to be presented exactly as written in the HTML file.">
<pre> 元素的 textContent 属性和这个文本字符串相同，这样就非常简单地解决了。

下面的代码块和我们原始的例子做的是相同的事，但它是不同的写法：
*/

//通常建议的promise链的代码标准写法
fetch(url).then(function(response) {
  return response.text()
}).then(function(text) {
  poemDisplay.textContent = text;
});
/*
很多开发者更喜欢这种样式，因为它更扁平并且按理说对于更长的 promise 链它更容易读 — 每一个 promise(承诺）接续上一个 promise，
而不是在上一个 promise 的里面 (会使得整个代码笨重起来，难以理解）。以上两种写法还有一个不同的地方是我们在response.text() 语句之前得包含一个
return 语句，用来把这一部分的结果传向 promise 链的下一段。

[一个更复杂的示例]
为了使本文更详尽，我们将看一个稍微复杂一点的示例，它展示了 Fetch 的一些更有趣的用法。

有很多复杂的代码处理按类别和搜索词过滤产品、操作字符串以便数据在 UI 中正确显示等等。我们不会在本文中讨论所有这些，
但是您可以在代码中找到大量的注释 (see can-script.js)。<PS:原文有80-100行有效代码，总共170多行代码，有详细的英文注释>

但是，我们会解释 Fetch 代码的含义。

第一个使用 Fetch 的块可以在 JavaScript 的开头找到：
*/

fetch('products.json').then(function(response) {
  if(response.ok) {
    response.json().then(function(json) {
      products = json;
      initialize();
    });
  } else {
    console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
  } //response.status(错误码) response.statusText(错误文本信息)
});
//学习社区源代码参考版,另一种方法
fetch('products.json')
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => initialize(json) )
  .catch( err => console.error(`Fetch problem: ${err.message}`) );

/*
这看起来和我们之前看到的相似，只是第二个 promise 是在一个条件语句中。在条件下，我们检查返回的 response 是否成功 — response.ok 属性包含一个布尔变量，
如果 response 是成功的 (e.g. 200 meaning "OK")，则是true；如果失败了，则是false。

如果 response 成功，我们运行第二个 promise — 然而，这次我们使用 json() (en-US)，而不是text() (en-US), 因为我们想要 response 返回的是一个结构化的
 JSON 数据，而不是纯文本。

如果 response 失败，我们将输出一个错误到控制台，指出网络请求失败，该控制台将报告响应的网络状态和描述性消息
 (分别包含在response.status和response.statusText属性中)。当然，一个完整的 web 站点可以通过在用户的屏幕上显示一条消息来更优雅地处理这个错误，
 也许还可以提供一些选项来补救这种情况。

第二个 Fetch 块可以在fetchBlob() 找到：
*/
fetch(url).then(function(response) {
  if(response.ok) {
    response.blob().then(function(blob) {
      objectURL = URL.createObjectURL(blob);
      showProduct(objectURL, product);
    });
  } else {
    console.log('Network request for "' + product.name + '" image failed with response ' + response.status + ': ' + response.statusText);
  }
});
//学习社区参考版本，另一个promise链方法
function fetchBlob(product) {
 // construct the URL path to the image file from the product.image property
 const url = `images/${product.image}`;
 // Use fetch to fetch the image, and convert the resulting response to a blob
 // Again, if any errors occur we report them in the console.
 fetch(url)
   .then( response => {
     if (!response.ok) {
       throw new Error(`HTTP error: ${response.status}`);
     }
     return response.blob();
   })
   .then( blob => showProduct(blob, product) )
   .catch( err => console.error(`Fetch problem: ${err.message}`) );
}

/*
它的工作原理和前一个差不多，除了我们放弃json() (en-US)而使用blob() (en-US) — 在本例中，我们希望以图像文件的形式返回响应，
为此使用的数据格式是<Blob> — 这个词是“二进制大对象”的缩写，基本上可以用来表示大型文件类对象——比如图像或视频文件。

一旦我们成功地接收到我们的 blob，我们就会使用它创建一个对象 URL createObjectURL(). 它返回一个指向浏览器中引用的对象的临时内部 URL。
这些不是很容易读懂，但是你可以通过打开 Can Store 看到，按 Ctrl-/右键单击一个图像，然后选择“View Image（查看图像）”选项 
(根据您使用的浏览器可能略有不同)。对象 URL 将在地址栏中可见，应该是这样的：
blob:http://localhost:7800/9b75250e-5279-e249-884f-d03eb1fd84f4

【第三方API】
什么是第三方 API?
第三方 API 是由第三方（通常是 Facebook，Twitter 或 Google 等公司）提供的 API，允许您通过 JavaScript 访问其功能，并在您自己的站点上使用它。
正如我们在 API 介绍章节 所展示的，最显著的例子就是运用 Google Maps APIs 在你的网页上展示自定义地图。

[它们植根于第三方服务器]
浏览器 API 在浏览器构建之初就存在 — 用 JavaScript 就可以立即访问它们。例如，例子中所使用的 Geolocation API 就是通过使用 Navigator 对象的
属性 geolocation 来访问的，它返回一个名为 Geolocation 的对象。 这个例子使用了这个对象的方法 getCurrentPosition() 来请求当前设备所处的地点：
*/
navigator.geolocation.getCurrentPosition(function(position) { xxx });
/*
第三方 API，从某种角度讲，植根于第三方服务器上。要通过 JavaScript 获取它们，您首先需要链接到其功能接口上并使其在您的页面上生效。通常来说，
这首先需要您通过一个 <script> 元素连接到第三方服务器所开放的 JavaScript 库，如下所示：
<script type="text/javascript" src="https://maps.google.com/maps/api/js?key=AIzaSyDDuGt0E5IEGkcE6ZfrKfUtE9Ko_de66pA"></script>

然后您便可使用该库中可用的对象了，如：
*/
var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
var myOptions = {
  zoom: 8,
  center: latlng,
  mapTypeId: google.maps.MapTypeId.TERRAIN,
  disableDefaultUI: true
}

var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
/*
代码中我们用 google.maps.LatLng() 构造器创建了一个新的 LatLng 对象，它包含了我们想展示的地址的纬度和经度，作为一个 Geolocation API 返回。
然后，我们创建了包含这个对象，和其他有关地图显示信息的选项对象 (myOptions) 。最后，用 google.maps.Map() 构造器创建了map对象，
它接受网页元素（地图展示处）和选项对象两个参数。

以上就是用 Google Maps API 建立一个简单地图所需要的所有信息。所有复杂的工作都全由你所连接的第三方服务器处理，包括展示正确地理位置的地图块，等等。

(备注： 一些 api 处理对其功能的访问略有不同，相反，它们要求开发人员向特定的 URL 模式发出 HTTP 请求 (参见从服务器获取数据)，以检索特定的数据。
这些被称为 RESTful api，稍后我们将在文章中展示这个示例。)

  PS:该案例笔记在另一个文件里面标注了，就不在这里标注了

【画图API】
[网络图形]
我们来讨论 HTML 的 多媒体和嵌入式 模块，早先的网页只有单调的文字，后来才引入了图像，起初是通过 <img> 元素的方式，
后来出现了类似于 background-image 的 CSS 属性和 SVG 图像等方式。

然而，这还不够好。当你能够使用 CSS 和 JavaScript 让 SVG 矢量图动起来时，位图却依然没有相应的支持。同时 SVG 动画的可用工具也少得可怜。
有效地生成动画、游戏画面、3D 场景和其他的需求依然没有满足，而这些在诸如 C++ 或者 Java 等底层语言中却司空见惯。

当浏览器开始支持 HTML 画布元素 <canvas> 和相关的 Canvas API（由苹果公司在 2004 年前后发明，后来其他的浏览器开始跟进）时，形势开始改善。下面你会看到，
canvas 提供了许多有用的工具，特别是当捆绑了由网络平台提供的一些其他的 API 时。它们用来生成 2D 动画、游戏画面和数据分析图，以及其他类型的 app。

大约在 2006 - 2007 年，Mozilla 开始测试 3D 画布。后来演化为 WebGL，它获得了各大浏览器厂商的认可，于是大约在 2009 - 2010 年间得到了标准化。
WebGL(web图片库的意思) 可以让你在 web 浏览器中生成真正的 3D 图形。下面的例子显示了一个简单的旋转的 WebGL 立方体。

由于原生的 WebGL 代码非常复杂，本文主要针对 2D 画布。然而，你也可以通过 WebGL 介绍页面 找到 WebGL 原生代码的教程，
来学习如何更容易地使用 WebGL 库来创建一个 3D 场景。(由于3D的网页代码很复杂，还是等学到一定程度在来看一看吧)

<canvas width="320" height="240"></canvas>
网页中会生成一块 320 × 240 像素的画布。
在 canvas 标签内，你可以放置一些反馈信息，如果用户的浏览器不支持画布功能，这些内容就会显示出来。
<canvas width="320" height="240">
  <p>卧槽你的浏览器竟然不支持 canvas！</p>
</canvas>

当然这条信息实在是没什么用！在实际情况中最好提供与画布内容相关的反馈信息。比如，如果无法渲染实时更新的股价曲线图，
就应提供一幅静态的、最近的股价曲线图，并用 alt 显示出价格信息。

[WebGL]
2D 内容告一段落，现在简单了解一下 3D 画布。3D 画布内容可通过的 WebGL API 实现，尽管它和 2D canvas API 都可在 <canvas> 元素上进行渲染，但两者是彼此独立的。

WebGL 基于 OpenGL 图形编程语言实现，可直接与 GPU 通信，基于此，编写纯 WebGL 代码与常规的 JavaScript 不尽相同，更像 C++ 那样的底层语言，
更加复杂，但无比强大。

使用库
由于 3D 绘图的复杂性，大多数人写代码时会使用第三方 JavaScript 库(比如 <Three.js、PlayCanvas (en-US) 或 Babylon.js (en-US)>)。
大多数库的原理都基本类似，提供创建基本的、自定义性状的功能、视图定位摄影和光效、表面纹理覆盖，等等。库负责 与 WebGL 通信，你只需完成更高阶工作。

接触任何一个库都意味着要学一套全新的 API（这里是第三方的版本），但与纯 WebGL 编程都大同小异
PS：主要笔记代码在文件哪里

【视频和音频API】
[HTML5 视频和音频]
使用原生浏览器控件的一个很大的问题在于，它们在各个浏览器中都不相同 — 对于跨浏览器的支持并不是很好！
另一个问题是，在大多数浏览器中原生控件难以通过键盘来操作。

你可以通过隐藏本地控件（通过删除 controls 属性），然后使用 HTML，CSS 和 JavaScript 编写自己的代码来解决这两个问题

[HTMLMediaElement API]
这部分笔记主要在文件里了
[小结]
我想我们已经在这篇文章中教过你足够多了。使用HTMLMediaElement API 可以为创建简单的视频和音频播放器提供丰富的可用功能，然而这只是冰山一角。

【客户端存储】
[客户端存储？]
在其他的 MDN 学习中我们已经讨论过 静态网站（static sites）和动态网站（ dynamic sites）的区别。大多数现代的 web 站点是动态的— 
它们在服务端使用各种类型的数据库来存储数据 (服务端存储), 之后通过运行服务端（ server-side）代码来重新获取需要的数据，把其数据插入到静态页面的模板中，
并且生成出 HTML 渲染到用户浏览上。

客户端存储以相同的原理工作，但是在使用上有一些不同。它是由 JavaScript APIs 组成的因此允许你在客户端存储数据 (比如在用户的机器上)，
而且可以在需要的时候重新取得需要的数据。这有很多明显的用处，比如：

1.个性化网站偏好（比如显示一个用户选择的窗口小部件，颜色主题，或者字体）。
2.保存之前的站点行为 (比如从先前的 session 中获取购物车中的内容，记住用户是否之前已经登陆过)。
3.本地化保存数据和静态资源可以使一个站点更快（至少让资源变少）的下载，甚至可以在网络失去链接的时候变得暂时可用。
4.保存 web 已经生产的文档可以在离线状态下访问。
通常客户端和服务端存储是结合在一起使用的。例如，你可以从数据库中下载一个由网络游戏或音乐播放器应用程序使用的音乐文件，将它们存储在客户端数据库中，
并按需要播放它们。用户只需下载音乐文件一次——在随后的访问中，它们将从数据库中检索。

<备注： 使用客户端存储 API 可以存储的数据量是有限的（可能是每个 API 单独的和累积的总量）;具体的数量限制取决于浏览器，也可能基于用户设置。有关更多信息，
获取更多信息，请参考浏览器存储限制和清理标准。>

[传统方法：cookies]
客户端存储的概念已经存在很长一段时间了。从早期的网络时代开始，网站就使用 cookies 来存储信息，以在网站上提供个性化的用户体验。
它们是网络上最早最常用的客户端存储形式。 因为在那个年代，有许多问题——无论是从技术上的还是用户体验的角度——都是困扰着 cookies 的问题。
这些问题非常重要，以至于当第一次访问一个网站时，欧洲居民会收到消息，告诉他们是否会使用 cookies 来存储关于他们的数据，
而这是由一项被称为欧盟 Cookie 条例的欧盟法律导致的。

由于这些原因，我们不会在本文中教你如何使用 cookie。毕竟它过时、存在各种安全问题，而且无法存储复杂数据，而且有更好的、
更现代的方法可以在用户的计算机上存储种类更广泛的数据。 cookie 的唯一优势是它们得到了非常旧的浏览器的支持，所以如果您的项目需要支持已经过时的浏览器
（比如 Internet Explorer 8 或更早的浏览器），cookie 可能仍然有用，但是对于大多数项目（很明显不包括本站）来说，您不需要再使用它们了。
其实 cookie 也没什么好说的，document.cookie一把梭就完事了。

<备注： 为什么仍然有新创建的站点使用 cookies？这主要是因为开发人员的习惯，使用了仍然使用 cookies 的旧库，以及存在许多 web 站点，
提供了过时的参考和培训材料来学习如何存储数据。>  

[新流派：Web Storage 和 IndexedDB]
现代浏览器有比使用 cookies 更简单、更有效的存储客户端数据的 API。
1.Web Storage API 提供了一种非常简单的语法，用于存储和检索较小的、由名称和相应值组成的数据项。当您只需要存储一些简单的数据时，比如用户的名字，
用户是否登录，屏幕背景使用了什么颜色等等，这是非常有用的。
2.IndexedDB API 为浏览器提供了一个完整的数据库系统来存储复杂的数据。这可以用于存储从完整的用户记录到甚至是复杂的数据类型，如音频或视频文件。

[未来：Cache API]
一些现代浏览器支持新的 Cache API。这个 API 是为存储特定 HTTP 请求的响应文件而设计的，它对于像存储离线网站文件这样的事情非常有用，
这样网站就可以在没有网络连接的情况下使用。缓存通常与 Service Worker API 组合使用，尽管不一定非要这么做。
 Cache 和 Service Workers 的使用是一个高级主题，我们不会在本文中详细讨论它，尽管我们将在下面的 离线文件存储 一节中展示一个简单的例子。

[存储简单数据 — web storage]
Web Storage API 非常容易使用 — 你只需存储简单的 键名/键值 对数据 (限制为字符串、数字等类型) 并在需要的时候检索其值。

你所有的 web storage 数据都包含在浏览器内两个类似于对象的结构中： <sessionStorage> 和 <localStorage>。第一种方法，只要浏览器开着，数据就会一直保存 
(关闭浏览器时数据会丢失) ，而第二种会一直保存数据，甚至到浏览器关闭又开启后也是这样。我们将在本文中使用第二种方法，因为它通常更有用。

1.Storage.setItem() 方法允许您在存储中保存一个数据项——它接受两个参数：数据项的名字及其值。试着把它输入到你的 JavaScript 控制台（如果你愿意的话，
可以把它的值改为你自己的名字！）
2.Storage.getItem() 方法接受一个参数——你想要检索的数据项的名称——并返回数据项的值。现在将这些代码输入到你的 JavaScript 控制台：

3.在输入第二行时，您应该会看到 myName变量现在包含name数据项的值。
Storage.removeItem() 方法接受一个参数——你想要删除的数据项的名称——并从 web storage 中删除该数据项。在您的 JavaScript 控制台中输入以下几行：
4.第三行现在应该返回 null — name 项已经不存在于 web storage 中。
*/
//代码示例汇总
localStorage.setItem('name','cdy');

var myName = localStorage.getItem('name');
myName 

localStorage.removeItem('name');
var myName = localStorage.getItem('name');
myName 
/*
[数据会一直存在！]
web storage 的一个关键特性是，数据在不同页面加载时都存在（甚至是当浏览器关闭后，对 localStorage 的而言）。

1.在浏览器的 JavaScript 控制台中输入这几行：
2.你应该看到 name 数据项返回。
3.现在关掉浏览器再把它打开。
4.再次输入下面几行：
5.你应该看到，尽管浏览器已经关闭，然后再次打开，但仍然可以使用该值。
*/
//代码示例汇总
localStorage.setItem('name','Chris');
var myName = localStorage.getItem('name');
myName

var myName = localStorage.getItem('name');
myName
/*
[为每个域名分离储存]
每个域都有一个单独的数据存储区 (每个单独的网址都在浏览器中加载). 你 会看到，如果你加载两个网站（例如 google.com 和 amazon.com）
并尝试将某个项目存储在一个网站上，该数据项将无法从另一个网站获取。

这是有道理的 - 你可以想象如果网站能够查看彼此的数据，就会出现安全问题！

该部分的实践例子在另一个案例文件里了
[存储复杂数据 — IndexedDB]
IndexedDB API（有时简称 IDB）是可以在浏览器中访问的一个完整的数据库系统，在这里，你可以存储复杂的关系数据。其种类不限于像字符串和数字这样的简单值。
你可以在一个 IndexedDB 中存储视频，图像和许多其他的内容。

但是，这确实是有代价的：使用 IndexedDB 要比 Web Storage API 复杂得多。在本节中，我们仅仅只能浅尝辄止地一提它的能力，不过我们会给你足够基础知识以帮助你开始。

[通过一个笔记存储示例演示]
在这里，我们将向您介绍一个示例，该示例允许您在浏览器中存储笔记并随时查看和删除它们，在我们进行时，我们将解释 IDB 的最基本部分并让您自己构建注释。

实际演示例子放在文件里了

[离线文件存储]
上面的示例已经说明了如何创建一个将大型资产存储在 IndexedDB 数据库中的应用程序，从而无需多次下载它们。这已经是对用户体验的一个很大的改进，
但仍然有一件事 - 每次访问网站时仍然需要下载主要的 HTML，CSS 和 JavaScript 文件，这意味着当没有网络连接时，它将无法工作。

这就是服务工作者和密切相关的Cache API 的用武之地。
服务工作者是一个 JavaScript 文件，简单地说，它是在浏览器访问时针对特定来源（网站或某个域的网站的一部分）进行注册的。注册后，
它可以控制该来源的可用页面。它通过坐在加载的页面和网络之间以及拦截针对该来源的网络请求来实现这一点。

当它拦截一个请求时，它可以做任何你想做的事情（参见用例思路），但经典的例子是离线保存网络响应，然后提供响应请求而不是来自网络的响应。
实际上，它允许您使网站完全脱机工作。

Cache API 是另一种客户端存储机制，略有不同 - 它旨在保存 HTTP 响应，因此与服务工作者一起工作得非常好。
<备注： 现在大多数现代浏览器都支持服务工作者和缓存。在撰写本文时，Safari 仍在忙着实施它，但它应该很快就会存在。>

[IndexDB-视频的例子]

1.对于这个简单的例子，我们已经存储了视频的名称以获取数组 opf 对象：
*/
const videos = [
  { 'name' : 'crystal' },
  { 'name' : 'elf' },
  { 'name' : 'frog' },
  { 'name' : 'monster' },
  { 'name' : 'pig' },
  { 'name' : 'rabbit' }
];
/*
2.首先，一旦数据库成功打开，我们就运行一个init()函数。这会遍历不同的视频名称，尝试加载由videos数据库中的每个名称标识的记录。 
如果在数据库中找到每个视频（通过查看request.result评估是否容易检查true- 如果记录不存在，那么undefined），视频文件（存储为 blob）
和视频名称将直接传递给displayVideo()函数以放置它们在用户界面中。如果没有，视频名称将传递给fetchVideoFromNetwork()函数...你猜对了 - 
从网络中获取视频。
*/
function init() {
  // Loop through the video names one by one
  for(let i = 0; i < videos.length; i++) {
    // Open transaction, get object store, and get() each video by name
    let objectStore = db.transaction('videos').objectStore('videos');
    let request = objectStore.get(videos[i].name);
    request.onsuccess = function() {
      // If the result exists in the database (is not undefined)
      if(request.result) {
        // Grab the videos from IDB and display them using displayVideo()
        console.log('taking videos from IDB');
        displayVideo(request.result.mp4, request.result.webm, request.result.name);
      } else {
        // Fetch the videos from the network
        fetchVideoFromNetwork(videos[i]);
      }
    };
  }
}
/*
3.以下片段是从内部fetchVideoFromNetwork()获取的 - 这里我们使用两个单独的fetch()请求获取视频的 MP4 和 WebM 版本。然后，
我们使用该Body.blob()方法将每个响应的主体提取为 blob，为我们提供可以在以后存储和显示的视频的对象表示。 我们在这里遇到了一个问题 - 
这两个请求都是异步的，但我们只想在两个 promises 都满足时尝试显示或存储视频。幸运的是，有一种处理这种问题的内置方法 - Promise.all()。
这需要一个参数 - 引用您要检查放置在数组中的履行的所有单个承诺 - 并且本身是基于承诺的。 当所有这些承诺都履行完毕时，
all()承诺将通过包含所有个人履行价值的数组来实现。在all()块中，您可以看到我们displayVideo()之前调用函数，就像在 UI 中显示视频一样，
然后我们也调用storeVideo()函数将这些视频存储在数据库中。
*/
let mp4Blob = fetch('videos/' + video.name + '.mp4').then(response =>
  response.blob()
);
let webmBlob = fetch('videos/' + video.name + '.webm').then(response =>
  response.blob()
);;

// Only run the next code when both promises have fulfilled
Promise.all([mp4Blob, webmBlob]).then(function(values) {
  // display the video fetched from the network with displayVideo()
  displayVideo(values[0], values[1], video.name);
  // store it in the IDB using storeVideo()
  storeVideo(values[0], values[1], video.name);
});
/*
4.我们storeVideo()先来看看吧。这与您在上一个示例中看到的用于向数据库添加数据的模式非常相似 - 我们打开一个readwrite事务并获取对象存储引用videos，
创建一个表示要添加到数据库的记录的对象，然后使用它添加它IDBObjectStore.add()。
*/
function storeVideo(mp4Blob, webmBlob, name) {
  // Open transaction, get object store; make it a readwrite so we can write to the IDB
  let objectStore = db.transaction(['videos'], 'readwrite').objectStore('videos');
  // Create a record to add to the IDB
  let record = {
    mp4 : mp4Blob,
    webm : webmBlob,
    name : name
  }

  // Add the record to the IDB using add()
  let request = objectStore.add(record);

  //...

};
/*
5.最后但并非最不重要的是，我们displayVideo()创建了在 UI 中插入视频然后将它们附加到页面所需的 DOM 元素。最有趣的部分如下所示 - 
要在<video>元素中实际显示我们的视频 blob，我们需要使用该URL.createObjectURL()方法创建对象 URL（指向存储在内存中的视频 blob 的内部 URL）。
完成后，我们可以将对象 URL 设置为 <source> 元素src属性的值，并且它可以正常工作。
*/
function displayVideo(mp4Blob, webmBlob, title) {
  // Create object URLs out of the blobs
  let mp4URL = URL.createObjectURL(mp4Blob);
  let webmURL = URL.createObjectURL(webmBlob);

  //...

  let video = document.createElement('video');
  video.controls = true;
  let source1 = document.createElement('source');
  source1.src = mp4URL;
  source1.type = 'video/mp4';
  let source2 = document.createElement('source');
  source2.src = webmURL;
  source2.type = 'video/webm';

  //...
}
/*
[一个 service worker 例子  以indexDB-API存储复杂数据-视频为例子]
让我们看一个例子，让你对这可能是什么样子有所了解。我们已经创建了另一个版本的视频存储示例，我们在上一节中看到了 - 这个功能完全相同，
只是它还通过服务工作者将 Cache，CSS 和 JavaScript 保存在 Cache API 中，允许示例脱机运行！

1.注册服务工作者
首先要注意的是，在主 JavaScript 文件中放置了一些额外的代码（请参阅index.js）。首先，我们进行特征检测测试，
以查看serviceWorker该Navigator对象中是否有该成员。如果返回 true，那么我们知道至少支持服务工作者的基础知识。
在这里，我们使用该ServiceWorkerContainer.register()方法将sw.js文件中包含的服务工作者注册到它所驻留的源，
因此它可以控制与它或子目录相同的目录中的页面。当其承诺履行时，服务人员被视为已注册。
*/
  // Register service worker to control making site work offline, 在网页的JS主代码底部区域哪里进行引用，表明服务注册者如何工作以及运行
  if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js')
             .then(function() { console.log('Service Worker Registered'); });
  }

/*
<备注：sw.js文件的给定路径是相对于站点源的，而不是包含代码的 JavaScript 文件。
服务人员在https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js。
原点是https://mdn.github.io，因此给定的路径必须是/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js。
如果您想在自己的服务器上托管此示例，则必须相应地更改此示例。这是相当令人困惑的，但出于安全原因，它必须以这种方式工作。>

2.安装 service worker
下次访问服务工作者控制下的任何页面时（例如，重新加载示例时），将针对该页面安装服务工作者，这意味着它将开始控制它。发生这种情况时，
install会向服务工作人员发起一个事件; 您可以在服务工作者本身内编写代码来响应安装。

让我们看一下sw.js文件（服务工作者）中的一个例子。您将看到安装侦听器已注册self。此self关键字是一种从服务工作文件内部引用服务工作者的全局范围的方法。

在install 处理程序内部，我们使用 ExtendableEvent.waitUntil()事件对象上可用的方法来表示浏览器不应该完成服务工作者的安装，直到其中的 promise 成功完成。

这是我们在运行中看到 Cache API 的地方。我们使用该 CacheStorage.open() 方法打开一个可以存储响应的新缓存对象（类似于 IndexedDB 对象存储）。
此承诺通过Cache表示video-store缓存的对象来实现。然后，我们使用该 Cache.addAll() 方法获取一系列资产并将其响应添加到缓存中。
*/

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('video-store').then(function(cache) {
      return cache.addAll([
        '/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/',
        '/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.html',
        '/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js',
        '/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/style.css'
      ]);
    })
  );
 });
/*
3.响应未来的请求
在我们的 HTML 页面上注册并安装了服务工作者，并且所有相关资产都添加到我们的缓存中，我们几乎准备好了。还有一件事要做，写一些代码来响应进一步的网络请求。

这就是第二位代码的sw.js作用。我们向服务工作者全局范围添加另一个侦听器，该范围在fetch引发事件时运行处理函数。
只要浏览器在服务工作者注册的目录中请求资产，就会发生这种情况。

在处理程序内部，我们首先记录所请求资产的 URL。然后，我们使用该FetchEvent.respondWith()方法为请求提供自定义响应。

在这个块中，我们CacheStorage.match()用来检查是否可以在任何缓存中找到匹配的请求（即匹配 URL）。如果未找到匹配，或者undefined如果未找到匹配，
则此承诺将满足匹配的响应。

如果找到匹配项，我们只需将其作为自定义响应返回。如果没有，我们从网络中获取（）响应并返回该响应。
*/
self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
/*
4.测试离线示例
要测试我们的服务工作者示例，您需要加载它几次以确保它已安装。完成后，您可以：
(1).尝试拔掉网络连接/关闭 Wifi。
(2).如果您使用的是 Firefox，请选择文件>脱机工作。
(3).转到 devtools，然后选择Application> Service Workers，如果您使用的是 Chrome，请选中Offline选中。
如果再次刷新示例页面，您仍应该看到它加载得很好。所有内容都是脱机存储的 - 缓存中的页面资源以及 IndexedDB 数据库中的视频。

*/



