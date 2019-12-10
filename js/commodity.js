var menuContent = $('.menu-content')[0];
var cotbox = $('.cont-box')[0];
var listTen = $('.list-ten')[0];
var listall = $('.listall')[0];
var listed = $('.listed')[0];
//console.log(oData.contentFourt[2].type[2])
//console.log(oData,swiper,swiperWrapper)
//菜单
forEach(oData.strip, function(el, i) {
	var str ='';
	str = `<a style="float:left;text-decoration: none;">${el}</a>`
	listed.innerHTML += str
});
//底部
forEach(oData.contentFourt,function(el,i){
	var div = document.createElement('div');
	
		div.innerHTML =`
					<h3>${el.title}</h3>
					
				   `
	div.className = 'item';
	var lis = document.createElement('li')
	forEach(el.type,function(tl,p){
	
		lis.innerHTML += `
							<a href="">${tl}</a>
						`
			})
	
		div.appendChild(lis)
	console.log(oData.contentFourt[0].type[0])
	listTen.appendChild(div);
	
})
//列表信息
forEach(oData.information,function(el,i){
	var divs = document.createElement('div');
	divs.innerHTML =`
					<h4>${el.type}</h4>
					
				   `
	divs.className = 'item';
	var str = '';
	forEach(el.title,function(tl,l){
		str = `<a style=" display: block;
		font-size: 14px;
		line-height: 26px;
		opacity: .5;
		text-decoration: none;color:#111111; cursor: pointer;">${tl}</a>`
		divs.innerHTML += str;
		
	})
	divs.className = 'item';

	listall.appendChild(divs);
})

var oneNav = $('.one-nav')[0];
var liS = $('li',oneNav);
var divOne = $('.pop-box',liS[1])[0];
var divTwo = $('.pop-box',liS[2])[0];
forEach(oData.navigation[0].type,function(el,i){
	
	divOne.innerHTML +=`<a>${el}</a>` 
	
	liS[1].appendChild(divOne)
	var oA = $('a',divOne);
	forEach(oA,function(al,l){
		al.onmouseenter = function(){
			al.style.background = '#fff';
		}
		al.onmouseleave = function(){
			al.style.background = 'none';
		}
	})
liS[1].onmouseenter = function(){
	divOne.style.display = 'block';	
}
liS[1].onmouseleave = function(){
	divOne.style.display = 'none';
}
})


forEach(oData.navigation[1].type,function(el,i){
	
	divTwo.innerHTML +=`<a>${el}</a>` 
	
	liS[2].appendChild(divTwo);
	var oA = $('a',divTwo);
	forEach(oA,function(al,l){
		al.onmouseenter = function(){
			al.style.background = '#fff';
		}
		al.onmouseleave = function(){
			al.style.background = 'none';
		}
	})
liS[2].onmouseenter = function(){
	divTwo.style.display = 'block';
}
liS[2].onmouseleave = function(){
	divTwo.style.display = 'none';
}
})

var divThree = $('.pop-about')[0]
liS[5].onmouseenter = function(){
	divThree.style.display = 'block';
}
liS[5].onmouseleave = function(){
	divThree.style.display = 'none';
}

var divFour = $('.pop-phone')[0]
liS[6].onmouseenter = function(){
	divFour.style.display = 'block';
}
liS[6].onmouseleave = function(){
	divFour.style.display = 'none';
}
//console.log(oneNav,liS,oData.downmenu)
	//下拉菜单
	
var divItem = $('.item',menuContent);
forEach(divItem,function(el,i){
	var str = '';
	

	if(i>1){
		var str1 =''
		str = `<div class="pop-box"></div>`
		divItem[i].innerHTML+=str;
		var popBox= divItem[i].querySelector('.pop-box');
			forEach(oData.downmenu[i].type,function(tl,l){
				str1 = `<a>${tl}</a>`
				popBox.innerHTML += str1;
							
		})
		var oA = el.querySelector('#onA');
		var popboxAll = el.querySelector('.pop-box'); 
		el.onmouseenter = function(){
			oA.style.color = '#ff7b3a';
			popboxAll.style.display = 'block';
			
		}
		el.onmouseleave = function(){
			oA.style.color = '#000';
			popboxAll.style.display = 'none';
		}
		}
		
		console.log(oA,popboxAll)	
})
//商品左侧
forEach(oData.parameter,function(el,i){
	var divs = document.createElement('div')
	divs.innerHTML = `
					
					<b>${el.title}</b>
					<span>${el.type}</span>
					
					`
	divs.className = 'item';
	cotbox.appendChild(divs)				
})
var box = document.querySelector('.box');
			var warp = document.querySelector('.warp');
			var oImg = warp.querySelector('img');
			
			
			// 鼠标移入,创建一个div
			box.addEventListener('mouseenter',function(ev){
				ev = ev || window.event;
				ev.cancelBubble = true;
				warp.style.display= 'block';
				// 创建一个div
				var div = document.createElement('div');
				div.className = 'item';
				// 把创建的div插入到box
				box.appendChild(div);				
				box.addEventListener('mouseleave',function(){					
					div.remove();
						warp.style.display = 'none';				
				})			
				/*
					设置div出现的位置
				
				*/
				var disx = ev.pageX - this.offsetLeft - div.offsetWidth/2;
				var disy = ev.pageY - this.offsetTop - div.offsetHeight/2;
				
				var maxL = box.clientWidth - div.offsetWidth;
				var maxT = box.clientHeight - div.offsetHeight;
				
				if(disx>=maxL){
					disx = maxL;
				}else if(disx<0){
					disx = 0;
				}
				if(disy>=maxT){
					disy = maxT;
				}else if(disy<=0){
					disy = 0;
				}
				
				div.style.left = disx + 'px';
				div.style.top = disy + 'px';
				
				
				// 鼠标移动
				
				box.addEventListener('mousemove',function(ev){
					ev = ev || window.event;
					var x = ev.pageX - box.offsetLeft - div.offsetWidth/2;
					var y = ev.pageY - box.offsetTop - div.offsetHeight/2;
					if(x>=maxL){
						x = maxL;
					}else if(x<0){
						x = 0;
					}
					if(y>=maxT){
						y = maxT;
					}else if(y<=0){
						y = 0;
					}
					
					div.style.left = x + 'px';
					div.style.top = y + 'px';
					
					
					// 获取一个div移动的比例值
					var b_L = x/maxL;
					var b_T = y/maxT;
					
					
					// img移动的最大距离
					var imgW = oImg.offsetWidth - warp.offsetWidth;
					var imgH = oImg.offsetHeight - warp.offsetHeight;
					
					oImg.style.left = -imgW*b_L +'px';
					oImg.style.top = -imgH*b_T +'px';
					
					
				})
			})	














	

