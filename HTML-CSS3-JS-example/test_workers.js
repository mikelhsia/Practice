// 由于 web worker 位于外部文件中，它们无法访问下例 JavaScript 对象：
// - window 对象
// - document 对象
// - parent 对象
var i=0;

function timedCount() {
	i = i+1;
	if (i % 5 == 0) {
		postMessage(i);
	}
	setTimeout("timedCount()", 500);
}

timedCount();
