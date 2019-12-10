var menuContent = $('.menu-content')[0];
var swiper = $('#swiper2')[0];
var brand = $('.brand')[0];
var items = $('.item', brand)[0];
var allshopcontent = $('.allshopcontent')[0];
var lists = $('.list',allshopcontent)[0];

var listTen = $('.list-ten')[0];

console.log(brand,items)
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
//品牌
forEach(oData.brand,function(el,i){
 var str ='';
 str = `<a>${el}</a>`
 items.innerHTML += str;
})
//全部商品
forEach(oData.advance,function(el,i){
	var As = document.createElement('a');
	As.innerHTML +=`
					<div class="cover">
						<img src="${el.img}">
					</div>
					<div class="info-box">
						<h3 >${el.type}</h3>
						<b class="price">￥${el.Price}</b>
					</div>
					`
	As.className = 'item'
	lists.appendChild(As)
	var hy = $('h3',As)[0];
		As.onmouseenter =function(){
			As.style.outline='1px solid #ff7b39'
			hy.style.color = '#ff7b39';

		}
		As.onmouseleave = function(){
			As.style.outline = 'none'
			hy.style.color = '#222'
		}
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
