var menuContent = $('.menu-content')[0];
var swiper = $('#swiper2')[0];
var swiperWrapper = $('.swiper-wrapper',swiper)[0];
var conTent = $('.content')[0];
var swiperOne = $('#swiper3')[0];
var swiperWrapperOne = $('.swiper-wrapper',swiperOne)[0];
var swiperTwo = $('#swiper5')[0];
var swiperWrapperTwo = $('.swiper-wrapper',swiperTwo)[0];

var lists = $('.list')[0];
console.log(lists)
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
						<h3>${oData.contentThf[0].shop[i].type}</h3>
						</a>

						`	
	div.className = 'item';	
	lists.appendChild(div);
})


