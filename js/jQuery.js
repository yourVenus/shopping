/*
	作用：数组求和，
	参数 ：数组
	返回值 ： 求和的数字
*/
function sum(obj) {
	var num = 0;
	for (var i = 0; i < obj.length; i++) {
		num += obj[i];
	}
	return num;
}
/*
	作用 ： 获取元素
	参数 ：
		参数一： 字符串，是一个css选择器
		参数二：可选，是一个确定的元素
	
	返回值 ： 获取的元素
*/
function $(name, obj) {

	// 首位字符
	var first = name.charAt(0);

	obj = obj || document;


	if (first == '#') {

		var id = name.split('#')[1];
		return obj.getElementById(id);

	} else if (first == '.') {

		// 找到所有的元素
		var all = obj.getElementsByTagName('*');
		var str = name.split('.')[1];
		var num = [];

		for (var i = 0; i < all.length; i++) {
			if (all[i].className) { // 排除没有class的元素
				// 说明有class
				// 确定元素是否要找的	
				var arr = all[i].className.split(' ');
				for (var k = 0; k < arr.length; k++) {
					if (arr[k] == str) {
						num.push(all[i]);
					}
				}
			}
		}

		return num;

	} else {

		// 通过标签名找元素					
		return obj.getElementsByTagName(name);
	}

}

/*
	作用 ： 获取元素
	参数 ：
		参数一： 字符串，是一个css选择器
		参数二：可选，是一个确定的元素
	
	返回值 ： 获取的元素
*/
function $(name, parent) {
	parent = parent || document;
	var obj = parent.querySelectorAll(name);

	return obj;
}

/*
    封装一个写事件的函数 
	作用 ：给元素添加事件
	参数 ：
		参数一 ：添加事件的元素，元素
		参数二 ：不带on的事件 ， 字符串
		参数三 ：触发事件时，执行的代码，函数
	
 */
function bind(obj, event, fn) {
	obj['on' + event] = fn;
}


/*
 
    封装一个for循环,循环数组
	作用：通过for循环操作数组里面的每一个数据
	参数 ：
		参数一 ： 数组
		参数二 ： 函数，操作代码的函数function(el,i){}
 
		
 */
function forEach(obj, fn) {
	for (var i = 0; i < obj.length; i++) {
		fn(obj[i], i);
	}
}

/*
	封装一个兼容获取样式的函数
	作用 ： 获取元素的样式
	参数 ：
		参数一 ：元素
		参数二 ：元素的样式
	返回结果 ： 样式的值
	
 */
function getCSS(obj, attr) {

	if (obj.currentStyle) {
		// ie
		return obj.currentStyle[attr]
	} else {
		// 谷歌
		return getComputedStyle(obj)[attr];
	}
}

/*
	封装一个倒计时
	
		参数：
		对象 ：
			future:  时间戳
			
			success  :function(){}
			
			
*/

function countDown(obj) {

	// 获取未来时间戳
	var futher = new Date(obj.future).getTime();

	// 当前时间的时间戳
	var now = new Date().getTime();

	// 两个时间戳的差值
	var dis = parseInt((futher - now) / 1000);

	//换算天数
	var day = parseInt(dis / (60 * 60 * 24));

	// 还剩多少小时
	var h = parseInt((dis - day * 60 * 60 * 24) / 3600);

	// 剩下多少分钟
	var min = parseInt((dis - day * 3600 * 24 - h * 3600) / 60);

	// 剩下的秒钟数
	var s = dis - day * 3600 * 24 - h * 3600 - min * 60;

	// obj.success(1)

	typeof obj.success == 'function' && obj.success({
		day: day,
		hours: h,
		min: min,
		s: s
	});

}

function addClass(obj, className) {
	var str = obj.className;
	if (str) {
		// 判断要添加的class在元素里面是否有
		// if(str.indexOf(className) == -1){
		//  obj.className = obj.className+' '+className;
		// }
		var arr = str.split(' ');
		var onoff = false;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == className) {
				onoff = true;
			}
		}

		if (!onoff) {
			obj.className = obj.className + ' ' + className;
		}

	} else {
		obj.className = className;
	}
}


/*
				作用 ：删除某个元素的class
				参数：
					obj: 元素
					className : class值
					
		   
		   */

function removeClass(obj, className) {
	// 该元素是否应用class
	if (obj.className) {

		// box pox lis  [box,pox,lis]
		var arr = obj.className.split(' ');
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == className) {
				arr.splice(i, 1);
			}
		}
		obj.className = arr.join(' ');
		// if(arr.indexOf(className) != -1){
		// 	// 该元素存在要删除的class
		// 	
		// 	arr.splice(arr.indexOf(className),1);
		// 	
		// 	obj.className = arr.join(' ');
		// }

	}
}
/*
	 
		作用 ： 获取某个元素的上一个兄弟标签
		参数 ： 元素
	 
	 */
function prev(el) {
	if (el.nodeType != 1) {
		return '请传入一个元素';
	}
	return el.previousElementSibling
}
/*
	 
		作用 ： 获取某个元素的下一个兄弟标签
		参数 ： 元素
	 
	 */
function next(el) {
	if (el.nodeType != 1) {
		return '请传入一个元素'
	}
	return el.previousElementSibling
}
/*
 
	作用 ： 获取某个元素的父级标签
	参数 ： 元素
 
 */
function parent(el) {
	if (el.nodeType != 1) {
		return '请输入一个元素'
	}
	return el.parentNode;
}
// 获取上面所有兄弟标签
function prevAll(el) {
	//判断实参是否为元素 如果不为元素则不执行
	if (el.nodeType != 1) {
		return;
	}
	//声明一个空数组来盛放元素
	var arr = [];
	//加入一个函数来找到该元素的兄弟标签
	function fn(el) {
		//获取上一个兄弟标签
		var pr = el.previousElementSibling;
		//判断上面是否还有兄弟标签
		if (pr != null) {
			//符合条件往数组arr添加标签
			arr.push(pr);
			//递归方法反复执行 找到所有的兄弟标签，直到pr为空则结束
			fn(pr)
		}
	}
	//第一次递归的调用，要调用一次才会执行fn()
	fn(el)
	//返回数组arr获得的值
	return arr;
}
//获取下面的所有兄弟标签
function nextAll(el) {
	//判断实参是否为元素 如果不为元素则不执行
	if (el.nodeType != 1) {
		return;
	}
	//声明一个空数组来盛放找到的元素
	var arr = []
	//加入一个函数来找到该元素的兄弟标签
	function fn(el) {
		//获取上一个兄弟标签
		var ne = el.nextElementSibling;
		//判断上面是否还有兄弟标签
		if (ne != null) {
			//符合条件往数组arr中添加标签
			arr.push(ne);
			//递归方法反复执行 dao'dao
			fn(ne);
		}
	}
	fn(el);
	return arr;
}

function sibling(el, str) {
	//判断实参是否为元素，如果不为元素则不执行
	if (el.nodeType != 1) {
		return
	}
	//找到该元素的父级
	var parent = el.parentNode;
	//找到父级下面的所有子元素
	var children = parent.children;
	//声明一个新的数组来盛放获得的子元素
	var arr = [];
	//遍历循环获得所有子元素的数组children
	for (var i = 0; i < children.length; i++) {
	//排除arr数组里的自己
		if (children[i] != el) {
			//往数组中添加其他子元素
			arr.push(children[i])
		}
	}
	//判断是否有第二个参数
	if (str) {

		//获取字符串里面的第一个字符
		//判断是 .（class名） #（id名）  （标签名）
		var first = str.substr(0, 1);
		
		if (first == '.' ) {
			//传进来的是class名 .box box pox lis
			 //从下标为1的位置截取后面的所有
			var className = str.substring(1);
			//声明一个新的数组
			var arr2 = [];
			//循环数组arr 
			for (var i = 0; i < arr.length; i++) {
				//
				var arr1 = arr[i].className.split(' ');
				//
				for (var k = 0; k < arr1.length; k++) {
					if (arr1[k] == className) {
						arr2.push(arr[i]);
					}
				}
			}
			return arr2;
		} else {
			var a = [];
			for (var i = 0; i < arr.length; i++) {
				if (arr[i].nodeName == str.toUpperCase()) {
					a.push(arr[i])
				}
			}
			return a
		}
	} else {
		return arr;
	}
	
	
}
