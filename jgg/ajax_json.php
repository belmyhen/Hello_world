<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
</script>
</head>
<body>

<h2>使用 XMLHttpRequest 来获取文件内容</h2>
<p>文件内容是标准的 JSON 格式，可以使用 JSON.parse 方法将其转换为 JavaScript 对象。</p>

<p id="demo"></p>
<div id="div0"></div>
<script>


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		var myObj, i, j, x = "";
        myObj = JSON.parse(this.responseText);
        //document.getElementById("demo").innerHTML = myObj.sites[0].name;
		
		for (i in myObj.sites) {
			x += "<h1>" + myObj.sites[i].name + "</h1>";
			for (j in myObj.sites[i].info) {
				x += myObj.sites[i].info[j] + "<br />";	
			}
			//x += "<h1>" + myObj.sites[i].name + "</h1>";
			//for (j in myObj.sites[i].info) {
			//	x += myObj.sites[i].info[j] + "<br>";
			//}
		}
		document.getElementById("demo").innerHTML = x;
    }
};
xmlhttp.open("GET", "try/ajax/json_demo.txt", true);
xmlhttp.send();


</script>

<p>查看 JSON 文件数据 <a href="try/ajax/json_demo.txt" target="_blank">json_demo.txt</a></p>
<button>click me</button>
</body>
</html>