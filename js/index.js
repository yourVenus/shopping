var menuContent = $('.menu-content')[0];
var swiper = $('#swiper2')[0];
var swiperWrapper = $('.swiper-wrapper',swiper)[0];
var conTent = $('.content')[0];
var swiperOne = $('#swiper3')[0];
var swiperWrapperOne = $('.swiper-wrapper',swiperOne)[0];
var swiperTwo = $('#swiper5')[0];
var swiperWrapperTwo = $('.swiper-wrapper',swiperTwo)[0];

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
//console.log(oData.contentFourt[2].type[2])
//console.log(oData,swiper,swiperWrapper)
//菜单
forEach(oData.menu, function(el, i) {
	
	var div = document.createElement('div');
	div.innerHTML +=
					  `
						<a href="">
						<i style="background:url(${oData.menu[i].imgs})no-repeat 50% 50%;background-size:24px 24px;"></i>
						<b>${oData.menu[i].text}</b>
						</a>
					  `
	div.className = 'item';
	menuContent.appendChild(div)
	var oA = div.querySelectorAll('a');
	//console.log(oA)
	forEach(oA,function(al,i){
		//console.log(al)
		bind(al,'mouseenter',function(){
			al.style.color = '#ff7b3a';
			
		});
		bind(al,'mouseleave',function(){
			al.style.color = '';
		
		});
	})
});
// 优惠卷商品轮播
forEach(oData.contentZf,function(el,i){
	 var div = document.createElement('div');
		div.innerHTML = 
						`
						<a href=""><img src="${oData.contentZf[i].img}">
						<h3>￥${oData.contentZf[i].Price}</h3>
						<h4>${oData.contentZf[i].title}</h4>
						<p>${oData.contentZf[i].type}</p>
						
						 </a>
						`
		div.className = 'swiper-slide'
		swiperWrapper.appendChild(div);
		var divs = $('.swiper-slide',swiperWrapper)
		forEach(divs,function(dl,l){
			if(l%2 ==0){
				dl.style.background = '#efeeed';
			}else{
				dl.style.background = '#f6f6f6';
			}
		})
})
//1F 人气商品
	//console.log(oData.contentOf[0].shop)
	forEach(oData.contentOf[0].shop,function(hl,i){
		var div = document.createElement('div');
	div.innerHTML = `
					
						<a href=""><img src="${oData.contentOf[0].shop[i].img}">
						<h3>${oData.contentOf[0].shop[i].type}</h3>
						<h4>￥${oData.contentOf[0].shop[i].Price}</h4>
						</a>
					
						`
	div.className = 'swiper-slide'					
	swiperWrapperOne.appendChild(div);
	})
//2F
forEach(oData.contentTf[0].shop,function(hl,i){
	var div = document.createElement('div');
div.innerHTML = `
				
					<a href=""><img src="${oData.contentTf[0].shop[i].img}">
					<h3>${oData.contentTf[0].shop[i].type}</h3>
					<h4>￥${oData.contentTf[0].shop[i].Price}</h4>
					</a>
				
					`
div.className = 'swiper-slide';					
swiperWrapperTwo.appendChild(div);
})
//3f
forEach(oData.contentThf[0].shop,function(el,i){
	
	var div = document.createElement('div');
	div.innerHTML = `
				
						<a href=""><img src="${oData.contentThf[0].shop[i].img}">
						<div class="info-box">
						<h3>${oData.contentThf[0].shop[i].type}</h3>
						<b class="price">${oData.contentThf[0].shop[i].Price}</b>
						</div>
						
						</a>

						`	
	div.className = 'item';	
	lists.appendChild(div);
})
//4f
forEach(oData.contentFf[0].shop,function(el,i){
	var div = document.createElement('div');
	div.innerHTML = `
				
						<a href=""><img src="${oData.contentFf[0].shop[i].img}">
						<h3>${oData.contentFf[0].shop[i].type}</h3>
						</a>

						`	
	div.className = 'item';	
	listOne.appendChild(div);
})
//5f
forEach(oData.contentFif[0].shop,function(el,i){
	var div = document.createElement('div');
	div.innerHTML = `
				
						<a href=""><img src="${oData.contentFif[0].shop[i].img}">
						<h3>${oData.contentFif[0].shop[i].type}</h3>
						</a>

						`	
	div.className = 'item';	
	listTwo.appendChild(div);
})
//6f
forEach(oData.contentSf[0].shop,function(el,i){
	var div = document.createElement('div');
	div.innerHTML = `
				
						<a href=""><img src="${oData.contentSf[0].shop[i].img}">
						<h3>${oData.contentSf[0].shop[i].type}</h3>
						</a>

						`	
	div.className = 'item';	
	listThree.appendChild(div);
})
//7f
forEach(oData.contentSvf[0].shop,function(el,i){
	var div = document.createElement('div');
	div.innerHTML = `
				
						<a href=""><img src="${oData.contentSvf[0].shop[i].img}">
						<h3>${oData.contentSvf[0].shop[i].type}</h3>
						</a>

						`	
	div.className = 'item';	
	listFour.appendChild(div);
})
//8f
forEach(oData.contentEf[0].shop,function(el,i){
	var div = document.createElement('div');
	div.innerHTML = `
				
						<a href=""><img src="${oData.contentEf[0].shop[i].img}">
						<h3>${oData.contentEf[0].shop[i].type}</h3>
						</a>

						`	
	div.className = 'item';	
	listFive.appendChild(div);
})
// 9f
forEach(oData.contentNf[0].shop,function(el,i){
	var div = document.createElement('div');
	div.innerHTML = `
				
						<a href=""><img src="${oData.contentNf[0].shop[i].img}">
						<h3>${oData.contentNf[0].shop[i].type}</h3>
						</a>

						`	
	div.className = 'item';	
	listSix.appendChild(div);
})
//10f
forEach(oData.contentTenf[0].shop,function(el,i){
	var div = document.createElement('div');
	div.innerHTML = `
				
						<a href=""><img src="${oData.contentTenf[0].shop[i].img}">
						<h3>${oData.contentTenf[0].shop[i].type}</h3>
						</a>

						`	
	div.className = 'item';	
	listSeven.appendChild(div);
})
//进入店铺
forEach(oData.contentTwf[0].shop,function(el,i){
	var div = document.createElement('div');
	div.innerHTML = `
				
						<a href=""><img src="${oData.contentTwf[0].shop[i].img}">
						<h3>${oData.contentTwf[0].shop[i].type}</h3>
						</a>

						`	
	div.className = 'item';	
	listEight.appendChild(div);
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
var hDynamic = infoBOX.firstElementChild;
console.log(infoBOX,hDynamic)
// forEach(infoBOX,function(el,i){
// 	this.onmouseover = function(){
// 		this.
// 	}
// })



	

