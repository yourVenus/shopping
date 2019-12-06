var menuContent = $('.menu-content')[0];
var swiper = $('#swiper2')[0];
//菜单
forEach(oData.menu, function(el, i) {
	
	var div = document.createElement('div');
	div.innerHTML +=
					  `
						<a href="" id = "onA">
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