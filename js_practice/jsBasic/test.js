/**
 * Created by puppylpy on 06/03/2017.
 */


// !! Important: JavaScript采用IEEE754标准定义的64位浮点格式表示数字
// 值 (aka Fraction/Mantissa)	指数	                    Sign
// 52 bits (0 - 51) 	        11 bits (50 - 62)	    1 bit (63)

/*
 * "use strict" 指令在 JavaScript 1.8.5 (ECMAScript5) 中新增。
 * 它不是一条语句，但是是一个字面量表达式，在 JavaScript 旧版本中会被忽略。
 * "use strict" 的目的是指定代码在严格条件下执行。
 * 严格模式下你不能
 * 1. 使用未声明的变量。
 * 2. 不允许删除变量或对象。
 * 3. 不允许删除函数。
 * 4. 不允许变量重名:
 * 5. 不允许使用转义字符:        var x = \010;            // 报错
 * 6. 不允许对只读属性赋值:
 * 7. 不允许对一个使用getter方法读取的属性进行赋值
 * 8. 不允许删除一个不允许删除的属性
 * 9. 变量名不能使用 "eval" 字符串:
 * 10. 变量名不能使用 "arguments" 字符串:
 * 11. 由于一些安全原因，在作用域 eval() 创建的变量不能被调用：
 * 12. 禁止this关键字指向全局对象。
* */
"use strict";

var DEBUG_MODE = false;


/* 数字转换方法
* 方法	            描述
  toExponential()	把对象的值转换为指数计数法。
  toFixed()	        把数字转换为字符串，结果的小数点后有指定位数的数字。
  toPrecision()	    把数字格式化为指定的长度。
* */

    /* 正则表达式 */
    /* test() 方法是一个正则表达式方法。
     *  test() 方法用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。
     *
     *  exec() 方法用于检索字符串中的正则表达式的匹配。
     *  该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
     * */
    var str = "Visit Runoob!";
    var n = str.search(/Runoob/i);
    console.log("Regular Expression: "+n);

    var str2 = str.replace(/microsoft/i,"Runoob");
    console.log("Replace string: "+str2);

console.log("______________________________________________");

    var txt="";
    function message()
    {
        try {
            addalert("Welcome guest!");
        } catch(err) {
            txt="本页有一个错误。\n";
            txt+="错误描述：" + err.message + "\n";
            txt+="点击确定继续。\n";
            console.log(txt);
        }
    }

    message();


    function myFunction()
    {
        try {
            var x=document.getElementById("demo").value;
            if(x=="")    throw "值为空";
            if(isNaN(x)) throw "不是数字";
            if(x > 10) throw "太大";
            if(x < 5) throw "太小";
        } catch(err) {
            var y=document.getElementById("mess");
            y.innerHTML="错误：" + err + "。";
        }
    }

    myFunction();


console.log("______________________________________________");

// JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。
// JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。
    x = 5; // 变量 x 设置为 5

    elem = document.getElementById("demo"); // 查找元素
    elem.innerHTML = x;                     // 在元素中显示 x

    var x; // 声明 x, 被提升
    var elem;

    /*
    * 在之前的教程中我们已经了解了 "hoisting(提升)"。
     提升（Hoisting）是 JavaScript 默认将当前作用域提升到前面去的的行为。
     提升（Hoisting）应用在变量的声明与函数的声明。
     因此，函数可以在声明之前调用：
     */
    myFunction(5);

    function myFunction(y) {
        return y * y;
    }

    /* 这种错误经常会在 switch 语句中出现，switch 语句会使用恒等计算符(===)进行比较:
     以下实例，數字10会执行 alert 弹窗：
     /* 以下实例由于类型不一致，字串“10”不会执行 alert 弹窗： */
    var x = 10;
    switch(x) {
        case "10":
            console.log("Hello, String");
        case 10:
            console.log("Hello, Number");
        default:
            console.log("Switch nothing happens.");
    }

    var x = 0.1;
    var y = 0.2;
    var z = x + y            // z 的结果为 0.3
    if (z == 0.3) {
        console.log('浮點數 z = ' + z);
    } // 返回 false
    else {
        console.log('浮點數 z != ' + z);
    }



    /* JavaScript 不支持使用名字来索引数组，只允许使用数字索引。 */
    var points;
    points = [40, 100, 1, 5, 25, 10];


// debugger 关键字用于停止执行 JavaScript，并调用调试函数。
// 这个关键字与在调试工具中设置断点的效果是一样的。
// 如果没有调试可用，debugger 语句将无法工作。
if (DEBUG_MODE) {
    debugger;
}


/*
* 约束验证 HTML 输入属性
 属性	        描述
 disabled	    规定输入的元素不可用
 max	        规定输入元素的最大值
 min	        规定输入元素的最小值
 pattern	    规定输入元素值的模式
 required	    规定输入元素字段是必需的
 type 	        规则输入元素的类型

* 约束验证 CSS 伪类选择器
 选择器	        描述
 :disabled	    选取属性为 "disabled" 属性的 input 元素
 :invalid	    选取无效的 input 元素
 :optional	    选择没有"required"属性的 input 元素
 :required	    选择有"required"属性的 input 元素
 :valid	选取有效值的 input 元素

* Validity 属性
 input 元素的 validity 属性包含一系列关于 validity 数据属性:
 属性	            描述
 customError	    设置为 true, 如果设置了自定义的 validity 信息。
 patternMismatch	设置为 true, 如果元素的值不匹配它的模式属性。
 rangeOverflow	    设置为 true, 如果元素的值大于设置的最大值。
 rangeUnderflow	    设置为 true, 如果元素的值小于它的最小值。
 stepMismatch	    设置为 true, 如果元素的值不是按照规定的 step 属性设置。
 tooLong	        设置为 true, 如果元素的值超过了 maxLength 属性设置的长度。
 typeMismatch	    设置为 true, 如果元素的值不是预期相匹配的类型。
 valueMissing	    设置为 true，如果元素 (required 属性) 没有值。
 valid	            设置为 true，如果元素的值是合法的。
* */
function validateForm() {
    var name = document.forms["contactForm"]["contactName"].value;
    var message = document.forms["contactForm"]["comments"].value;

    if (name != null && name > 0 && name != "") {
        alert("Contact Form name: "+ name);
        return true;
    } else {
        alert("Contact Form name invalid!");
        return false;
    }

    if (message.validity.valueMissing) {
        alert("Contact Form message is empty!");
        return true;
    }
}


/*
* 什么是 JSON?
 JSON 英文全称 JavaScript Object Notation
 JSON 是一种轻量级的数据交换格式。
 JSON是独立的语言 *
 JSON 易于理解。

 函數                    用途
 JSON.parse()	        用于将一个 JSON 字符串转换为 JavaScript 对象。
 JSON.stringify()	    用于将 JavaScript 值转换为 JSON 字符串。
 * */
// 创建 JavaScript 字符串，字符串为 JSON 格式的数据
var text = '{ "sites" : [' +
    '{ "name":"Runoob" , "url":"http://www.runoob.com" },' +
    '{ "name":"Google" , "url":"http://www.google.com" },' +
    '{ "name":"Taobao" , "url":"http://www.taobao.com" } ]}';

var json_obj = JSON.parse(text);
for (var i=0;i<=json_obj.sites.length-1;i++) {
    document.getElementById("json_text"+i).innerHTML = "<a href='" + json_obj.sites[i].url + "'>" + json_obj.sites[i].name + "("+ i +")</a>";
}
document.write("JSON object length: "+json_obj.sites.length+"<br/><br/>");


/*
* javascript:void(0) 含义
* void 是 JavaScript 中非常重要的关键字，该操作符指定要计算一个表达式但是不返回值。
***************************************
* Ex:
* <script type="text/javascript">
* <!--
* void func()
* javascript:void func()
*
* 或者
*
* void(func())
* javascript:void(func())
* //-->
* </script>
****************************************
* href="#"与href="javascript:void(0)"的区别
*
* # 包含了一个位置信息，默认的锚是#top 也就是网页的上端。
* 而javascript:void(0), 仅仅表示一个死链接。
* 在页面很长的时候会使用 # 来定位页面的具体位置，格式为：# + id。
****************************************
*
* */

document.write('<a href="javascript:void(console.log(\'Void Event!\'))">单击此处发生 void call function</a><br/>');
document.write('<a href="javascript:void(alert(\'Warning!!!\'))">点我警告!</a><br/>');
// 以下实例中参数 a 将返回 undefined :
function getValue(){
    var a,b,c;
    a = void ( b = 5, c = 7 );
    document.write('a = ' + a + ' b = ' + b +' c = ' + c );
}

document.write('<a href="javascript:void(0);">点我没有反应的!(死鏈結)</a>');
document.write('<br>');
document.write('<a href="#pos">点我定位到指定位置!</a>');
document.write('<br>');


//在函数表达式存储在变量后，变量也可作为一个函数使用：
var x_func = function (a, b) {
    return a * b
};

var z = x_func(4, 3);

/*
* 自调用函数
 函数表达式可以 "自调用"。
 自调用表达式会自动调用。
 如果表达式后面紧跟 () ，则会自动调用。
 不能自调用声明的函数。
 通过添加括号，来说明它是一个函数表达式：
 */
(function () {
    var x = "Myself!!";      // 我将调用自己
    console.log("自调用函数: " + x);
})();

console.log("______________________________________________");



/*JavaScript 函数参数
 *****************************************************
 函数是对象
 在 JavaScript 中使用 typeof 操作符判断函数类型将返回 "function" 。
 但是JavaScript 函数描述为一个对象更加准确。
 JavaScript 函数有 属性 和 方法。
 arguments.length 属性返回函数调用过程接收到的参数个数：
 */

// myFunction() 和 window.myFunction() 是一样的
function myFunction1(a, b, c, d, e) {
    var numArray = arguments;
    var max = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > max) {
            max = numArray[i];
        }
    }
    console.log("My arguments' length = " + numArray.length + ', Max = ' + max);
}

myFunction1(1,2,'5','3',4);

console.log("______________________________________________");

var person = {
    firstName: "John",
    lastName: "Doe",
    printPerson: function() {
        console.log("Person's name: " + this.firstName + " " + this.lastName);
    }
};

person.printPerson();

/* 构造函数:
如果函数调用前使用了 new 关键字, 则是调用了构造函数。
这看起来就像创建了新的函数，但实际上 JavaScript 函数是重新创建的对象：
*/
function myFunction2(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}

/* This creates a new object */
var x = new myFunction2("John","Doe");
x.firstName;                             // 返回 "John"


/* 在 JavaScript 中, 函数是对象。JavaScript 函数有它的属性和方法。
 * call() 和 apply() 是预定义的函数方法。 两个方法可用于调用函数，两个方法的第一个参数必须是对象本身。
 * 两个方法都使用了对象本身作为第一个参数。 两者的区别在于第二个参数： apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，而call则作为call的参数传入（从第二个参数开始）。
 * 在 JavaScript 严格模式(strict mode)下, 在调用函数时第一个参数会成为 this 的值， 即使该参数不是一个对象。
 * 在 JavaScript 非严格模式(non-strict mode)下, 如果第一个参数的值是 null 或 undefined, 它将使用全局对象替代。
 */
function myFunction3(a, b) {
    return a * b;
}
var myObject = myFunction3.call(myObject, 10, 2);     // 返回 20

function myFunction4(a, b) {
    return a * b;
}
var myArray = [10, 2];
myObject = myFunction4.apply(myObject, myArray);  // 返回 20



/* JavaScript 闭包
 变量 add 指定了函数自我调用的返回字值。
 自我调用函数只执行一次。设置计数器为 0。并返回函数表达式。
 add变量可以作为一个函数使用。非常棒的部分是它可以访问函数上一层作用域的计数器。
 这个叫作 JavaScript 闭包。它使得函数拥有私有变量变成可能。
 计数器受匿名函数的作用域保护，只能通过 add 方法修改。
 */
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
function addButton(){
    var x = document.getElementById("demo2");
    x.getElementsByTagName("p")[0].innerHTML = add(); //將return的function 賦予給demo2 的 innerHTML

    if (x.getElementsByTagName("p")[0].innerHTML == 2) {
        x.getElementsByTagName("span")[0].innerHTML = " seconds";
    }
}

/* 闭包 closure EX2 */
var name = "The Window";
var object = {
    name : "My Javascript closure object example",
    getNameFunc : function(){
        var that = this;
        return function(){ return that.name; };
        // return function(){ return this.name; };
    }
};
alert(object.getNameFunc()());

var change_image = function () {
    var x = document.getElementsByTagName("img");
    x[0].src = "gradient_angle.jpg";
    x[0].style.width = "25%";
    x[0].style.border= "2px solid blue";
}

/*
 * onload 和 onunload 事件会在用户进入或离开页面时被触发。
 * onload 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。
 * onchange 事件常结合对输入字段的验证来使用。
 * onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。
 * onmousedown, onmouseup 以及 onclick 构成了鼠标点击事件的所有部分
 * 首先当点击鼠标按钮时，会触发 onmousedown 事件，当释放鼠标按钮时，会触发 onmouseup 事件，最后，当完成鼠标点击时，会触发 onclick 事件。
 * onfocus 元素获得焦点
 */
// 向DOM，HTML元素分配事件的方法
// 1. 向 HTML 元素分配 事件，您可以使用事件属性。
// <button onclick="displayDate()">点这里</button>
// 2. HTML DOM 允许您使用 JavaScript 来向 HTML 元素分配事件
document.getElementById("demo2").onclick=function(){
    console.log("Assign Event to element via Javascript");
}

/* 3. addEventListener()
 * addEventListener() 方法用于向指定元素添加事件句柄。同时方法添加的事件句柄不会覆盖已存在的事件句柄。
 * 你可以向同个元素添加多个同类型的事件句柄，如：两个 "click" 事件。
 * 第一个参数是事件的类型 (如 "click" 或 "mousedown").
 * 第二个参数是事件触发后调用的函数。
 * 第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。
 * 注意:不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"。
*/
document.getElementById("demo2").addEventListener("click", change_image);
document.getElementById("demo2").addEventListener("click", function(){ alert("Hello World!"); });

/*
 * 事件传递有两种方式：冒泡与捕获。
 * 事件传递定义了元素事件触发的顺序。 如果你将 <p> 元素插入到 <div> 元素中，用户点击 <p> 元素, 哪个元素的 "click" 事件先被触发呢？
 * 在 冒泡 中，内部元素的事件会先被触发，然后再触发外部元素，即： <p> 元素的点击事件先触发，然后会触发 <div> 元素的点击事件。
 * 在 捕获 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： <div> 元素的点击事件先触发 ，然后再触发 <p> 元素的点击事件。
 * 默认值为 false, 即冒泡传递
 * */

/* removeEventListener() */
document.getElementById("demo2").removeEventListener("click", change_image);
document.getElementById("demo2").removeEventListener("click", function(){ alert("Hello World!"); });


// Javascript node event and method
// http://www.runoob.com/jsref/dom-obj-all.html
document.getElementById("appendNode").addEventListener("click", addNode);
document.getElementById("removeNode").addEventListener("click", deleteNode);

function addNode() {
    var x = document.getElementById("demo2");
    var a = document.createElement("p");
    a.style.border = "2px solid blue";
    a.style.borderRadius = '4px';
    a.style.width="200px";
    a.style.backgroundColor="blue";
    a.style.color="white";
    // 如需向 <p> 元素添加文本，您必须首先创建文本节点。这段代码创建了一个文本节点：
    var n = document.createTextNode("Newly added node.");
    a.appendChild(n);
    x.appendChild(a);
}

//setInterval(addNode,3000);

function deleteNode() {
    var x = document.getElementById("demo2");
    var a = x.getElementsByTagName("p");
    var arrLength = a.length;
    if (a) {
        for (var i = arrLength - 1; i >= 0; i--) {
            console.log('Remove a[' + i + ']');
            x.removeChild(a[i]);
        }
        console.log('Removed all child nodes!');
    }
}
console.log("______________________________________________");

/* 创建Javascript 对象物件 */
/*******************************************/
// 直接建构法
// 这个例子创建了对象的一个新实例，并向其添加了四个属性：
person=new Object();
person.firstname="John";
person.lastname="Doe";
person.age=50;
person.eyecolor="blue";

// Or using
// person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};

/* 对象构造器
function person(firstname,lastname,age,eyecolor)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
}
var myFather=new person("John","Doe",50,"blue");
*/

// !! Important !!
// for loop in javascript object
txt='';
for (var x in person)
{
    txt=txt + ' ' + person[x];
}
console.log(txt);

console.log("______________________________________________");
// !! BOM - Browser Object Module
//**************************************************************************************
// 对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：
//      * window.innerHeight - 浏览器窗口的内部高度
//      * window.innerWidth - 浏览器窗口的内部宽度
//对于 Internet Explorer 8、7、6、5：
//      * document.documentElement.clientHeight
//      * document.documentElement.clientWidth
//或者
//      * document.body.clientHeight
//      * document.body.clientWidth

var winHeight = window.innerHeight || document.documentElement.clientHeight;
var winWidth = window.innerWidth || document.documentElement.clientWidth;
/* 其他 Window 方法:
 * window.open() - 打开新窗口
 * window.close() - 关闭当前窗口
 * window.moveTo() - 移动当前窗口
 * window.resizeTo() - 调整当前窗口的尺寸
*/

// screen.availWidth 属性返回访问者屏幕的宽度，以像素计，减去界面特性，比如窗口任务栏。
console.log("可用宽度: " + screen.availWidth);
// screen.availHeight 属性返回访问者屏幕的高度，以像素计，减去界面特性，比如窗口任务栏。
console.log("可用高度: " + screen.availHeight);
console.log("总宽度/高度: " + screen.width + "*" + screen.height);
console.log("可用宽度/高度: " + screen.availWidth + "*" + screen.availHeight);
console.log("色彩深度: " + screen.colorDepth);
console.log("色彩分辨率: " + screen.pixelDepth);

console.log("______________________________________________");
console.log("Current page url: " + location.href);
console.log("Current page path name : " + location.pathname);

function loc_assign () {
    // location.assign() 方法加载新的文档。
    window.location.assign("http://baidu.com");
}

// history.back() 方法加载历史列表中的前一个 URL。 这与在浏览器中点击后退按钮是相同的：
function web_back() {
    window.history.back();
}

// history forward() 方法加载历史列表中的下一个 URL。 这与在浏览器中点击前进按钮是相同的：
function web_forward() {
    window.history.forward();
}

console.log("______________________________________________");
/*
* 来自 navigator 对象的信息具有误导性，不应该被用于检测浏览器版本，这是因为：
    * navigator 数据可被浏览器使用者更改
    * 一些浏览器对测试站点会识别错误
    * 浏览器无法报告晚于浏览器发布的新操作系统
* */
txt='';
txt = "浏览器代号: " + navigator.appCodeName + "\n";
txt+= "浏览器名称: " + navigator.appName + "\n";
txt+= "浏览器版本: " + navigator.appVersion + "\n";
txt+= "启用Cookies: " + navigator.cookieEnabled + "\n";
txt+= "硬件平台: " + navigator.platform + "\n";
txt+= "用户代理: " + navigator.userAgent + "\n";
txt+= "用户代理语言: " + navigator.systemLanguage + "\n";
console.log(txt);


/*
* alert();
* confirm();
* prompt();
* setInterval();
* */

// 每一秒加一个点：setInterval
// *********************************************
// setInterval() - 间隔指定的毫秒数不停地执行指定的代码。
// var myTimer = setInterval(function(){alert("Hello")},3000);
// clearInterval(myTimer);
// *********************************************
// setTimeout() - 暂停指定的毫秒数后执行指定的代码
// var myClock = setTimeout(addNode, 3000);
// clearTimeout(myClock);

// Cookie
// 写入cookie
// document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/";
// 读取cookie
// var x = document.cookie;
// var ca = document.cookie.split(';');
// 删除 cookie 非常简单。您只需要设置 expires 参数为以前的时间即可，如下所示，设置为 Thu, 01 Jan 1970 00:00:00 GMT:


// Ajax loading
// *********************************************
/* AJAX 指的是异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。
* XMLHttpRequest 对象如果要用于 AJAX 的话，其 open() 方法的 async 参数必须设置为 true：
* xmlhttp.open("GET","ajax_test.html",true);
* 对于 web 开发人员来说，发送异步请求是一个巨大的进步。很多在服务器执行的任务都相当费时。AJAX 出现之前，这可能会引起应用程序挂起或停止。
* 通过 AJAX，JavaScript 无需等待服务器的响应，而是：
* 在等待服务器响应时执行其他脚本
* 当响应就绪后对响应进行处理
* async=false，但是对于一些小型的请求，也是可以的。
* 请记住，JavaScript 会等到服务器响应就绪才继续执行。如果服务器繁忙或缓慢，应用程序会挂起或停止。
*/
// *********************************************
// XHR 首先先創建XHR對象
var xmlhttp;
if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp=new XMLHttpRequest();
} else {
    // IE6, IE5 浏览器执行代码
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
// *********************************************
/* 再向服務器發送請求
 *
 方法	                            描述
 open(method,url,async)             规定请求的类型、URL 以及是否异步处理请求。
                                    * method：请求的类型；GET 或 POST
                                    * url：文件在服务器上的位置, 可以是任何類型的文件
                                    * async：true（异步）或 false（同步）
 send(string)                       将请求发送到服务器。
                                    string：仅用于 POST 请求
 setRequestHeader(header,value)	    向请求添加 HTTP 头。
                                    * header: 规定头的名称
                                    * value: 规定头的值
*/
xmlhttp.open("GET","/try/ajax/demo_get.php",true);
xmlhttp.send();
/* 在上面的例子中，您可能得到的是缓存的结果。为了避免这种情况，请向 URL 添加一个唯一的 ID：
xmlhttp.open("GET","/try/ajax/demo_get.php?t=" + Math.random(),true);
xmlhttp.send();
 */
/* POST method
* xmlhttp.open("POST","/try/ajax/demo_post2.php",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("fname=Henry&lname=Ford");
* */
// *********************************************
/* 服務器響應
 属性	        描述
 responseText	获得字符串形式的响应数据。
 responseXML	获得 XML 形式的响应数据。*/

// *********************************************
/* onreadystatechange 事件
 * 属性	                    描述
 onreadystatechange	        存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
 readyState	                存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
                            * 0: 请求未初始化
                            * 1: 服务器连接已建立
                            * 2: 请求已接收
                            * 3: 请求处理中
                            * 4: 请求已完成，且响应已就绪
 status	                    200: "OK"
                            404: 未找到页面
 */
// 当 readyState 等于 4 且状态为 200 时，表示响应已就绪：
xmlhttp.onreadystatechange=function()
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
}
/*
使用回调函数
回调函数是一种以参数形式传递给另一个函数的函数。
如果您的网站上存在多个 AJAX 任务，那么您应该为创建 XMLHttpRequest 对象编写一个标准的函数，并为每个 AJAX 任务调用该函数。
该函数调用应该包含 URL 以及发生 onreadystatechange 事件时执行的任务（每次调用可能不尽相同）：
*/

function myFunction3()
{
    loadXMLDoc("/try/ajax/ajax_info.txt",function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        }
    });
}