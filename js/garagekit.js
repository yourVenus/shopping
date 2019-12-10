var menuContent = $('.menu-content')[0];


var lists = $('.list')[0];
var listOne = $('.list-one')[0];
var listTwo = $('.list-two')[0];
var listThree = $('.list-three')[0];
var listFour = $('.list-four')[0];
var listFive = $('.list-five')[0];
var listSix = $('.list-six')[0];
var listSeven = $('.list-seven')[0];
var listEight = $('.list-eight')[0];
var listNine=$('.list-nine')[0];
var listTen = $('.list-ten')[0];
var listTen = $('.list-ten')[0];
//console.log(oData.contentFourt[2].type[2])
//console.log(oData,swiper,swiperWrapper)
//菜单
forEach(oData.menu, function(el, i) {
	var jump = oData.website;
	var div = document.createElement('div');
	div.innerHTML +=
					  `
						<a href="${jump[i]}" id = "onA">
						<i style="background:url(${oData.menu[i].imgs})no-repeat 50% 50%;background-size:24px 24px;"></i>
						<b>${oData.menu[i].text}</b>
						</a>
					  `
	div.className = 'item';
	menuContent.appendChild(div)
});


// 优惠卷商品轮播

//1F 人气商品
	

//2F

//3f
forEach(oData.contentA[0].shop,function(el,i){
	
	var div = document.createElement('div');
	div.innerHTML = `
				
						<a href=""><img src="${oData.contentA[0].shop[i].img}">
						<div class="info-box">
						<h3>${oData.contentA[0].shop[i].type}</h3>
						<b class="price">￥${oData.contentA[0].shop[i].Price}</b>
						</div>
						
						</a>

						`	
	div.className = 'item';	
	lists.appendChild(div);
})
//4f
forEach(oData.contentB[0].shop,function(el,i){
	var div = document.createElement('div');
	div.innerHTML = `
				
						<a href=""><img src="${oData.contentB[0].shop[i].img}">
						<div class="info-box">
						<h3>${oData.contentB[0].shop[i].type}</h3>
						<b class="price">￥${oData.contentB[0].shop[i].Price}</b>
						</div>
						</a>

						`	
	div.className = 'item';	
	listOne.appendChild(div);
})
//5f
forEach(oData.contentC[0].shop,function(el,i){
	var div = document.createElement('div');
	div.innerHTML = `
				
						<a href=""><img src="${oData.contentC[0].shop[i].img}">
						<div class="info-box">
						<h3>${oData.contentC[0].shop[i].type}</h3>
						<b class="price">￥${oData.contentC[0].shop[i].Price}</b>
						</div>
						</a>

						`	
	div.className = 'item';	
	listTwo.appendChild(div);
})
//6f
forEach(oData.contentD[0].shop,function(el,i){
	var div = document.createElement('div');
	div.innerHTML = `
				
						<a href=""><img src="${oData.contentD[0].shop[i].img}">
						<div class="info-box">
						<h3>${oData.contentD[0].shop[i].type}</h3>
						<b class="price">￥${oData.contentD[0].shop[i].Price}</b>
						</div>
						</a>

						`	
	div.className = 'item';	
	listThree.appendChild(div);
})
//7f
forEach(oData.contentE[0].shop,function(el,i){
	var div = document.createElement('div');
	div.innerHTML = `
				
						<a href=""><img src="${oData.contentE[0].shop[i].img}">
						<div class="info-box">
						<h3>${oData.contentE[0].shop[i].type}</h3>
						<b class="price">￥${oData.contentE[0].shop[i].Price}</b>
						</div>
						</a>

						`	
	div.className = 'item';	
	listFour.appendChild(div);
})
//8f
forEach(oData.contentF[0].shop,function(el,i){
	var div = document.createElement('div');
	div.innerHTML = `
				
						<a href=""><img src="${oData.contentF[0].shop[i].img}">
						<div class="info-box">
						<h3>${oData.contentF[0].shop[i].type}</h3>
						<b class="price">￥${oData.contentF[0].shop[i].Price}</b>
						</div>
						</a>

						`	
	div.className = 'item';	
	listFive.appendChild(div);
})
// 9f
forEach(oData.contentG[0].shop,function(el,i){
	var div = document.createElement('div');
	div.innerHTML = `
				
						<a href=""><img src="${oData.contentG[0].shop[i].img}">
						<div class="info-box">
						<h3>${oData.contentG[0].shop[i].type}</h3>
						<b class="price">￥${oData.contentG[0].shop[i].Price}</b>
						</div>
						</a>

						`	
	div.className = 'item';	
	listSix.appendChild(div);
})


//LINK
forEach(oData.contentThi[0].shop,function(el,i){
	var div = document.createElement('div');
	div.innerHTML = `
				
					<a href="" style="background:url(${oData.contentThi[0].shop[i].img})no-repeat 50% 50%;background-size: cover;">
					<h3>${oData.contentThi[0].shop[i].title}</h3>
					<p>${oData.contentThi[0].shop[i].type}</p>
					</a>

						`						
	div.className = 'item';	
	listNine.appendChild(div);
})
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
var infoBOX = $('.info-box');

//console.log(infoBOX)
forEach(infoBOX,function(el,i){
	var hDynamic = el.querySelector('h3');
	hDynamic.onmouseenter=function(){
		el.style.bottom = '0';
		el.style.background = 'rgb(0,0,0,.5)';
		
		hDynamic.style.color = '#fff';
		hDynamic.style.overflow = 'visible';

	};
	el.onmouseleave=function(){
		el.style.bottom = '-43px';
		el.style.background = 'none';
		hDynamic.style.overflow = 'hidden';
		hDynamic.style.color = 'black';
	};
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















	

