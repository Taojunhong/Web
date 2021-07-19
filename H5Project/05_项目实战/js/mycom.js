window.onload = function() {
	//获取元素节点
	var arrowNode = document.querySelector("#head>#headMain>#arrow")
	var headLiNodes = document.querySelectorAll("#head>#headMain>#nav li")
	var firstLiNode = headLiNodes[0]
	var headUpNodes = document.querySelectorAll("#head>#headMain>#nav #up")
	var firstUpNode = headUpNodes[0]
	var headNode = document.getElementById("head")
	var content = document.getElementById("content")
	var conLiNodes = document.querySelectorAll("#content .list>li")

	//头部function交互
	headFun()
	function headFun() {
		firstUpNode.style.width = "100%"
		arrowNode.style.left = firstLiNode.offsetLeft + firstLiNode.offsetWidth / 2 - arrowNode.offsetWidth / 2 + "px"

		for(var i = 0; i < headLiNodes.length; i++) {
			headLiNodes[i].index = i
			headLiNodes[i].onclick = function() {
				move(this.index)
				console.log(this.index)
			}
			
			function move(index){
				for(var i = 0; i < headUpNodes.length; i++) {
					headUpNodes[i].style.width=""
				}
				headUpNodes[index].style.width = "100%"
				arrowNode.style.left = headLiNodes[index].offsetLeft + headLiNodes[index].offsetWidth / 2 - arrowNode.offsetWidth / 2 + "px"
			}
		}

	}

	//主体内容部function交互
	contentFun()
	function contentFun() {
		content.style.height = document.documentElement.offsetHeight - head.offsetHeight + "px"
		for(var i = 0; i < conLiNodes.length; i++) {
			conLiNodes[i].style.height = document.documentElement.offsetHeight - head.offsetHeight + "px"
		}
	}
}