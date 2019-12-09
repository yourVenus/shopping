var listTen = $('.list-ten')[0];
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
//判断
var btn = document.getElementById('button');
var usr = document.getElementById('username');
var verif = document.getElementById('verification');
var pasw = document.getElementById('password');
var cof = document.getElementById('confirm');
var checks = document.getElementById('check')
console.log(btn,usr,verif,pasw)
btn.onclick = function(){
	var value = usr.value;
	//判断账号输入框是否为空
	if(value.trim()){
		//用户名正则，4到16位（字母，数字，下划线，减号）
		var name = /^[a-zA-Z0-9_-]{4,16}$/;
		//手机号正则
		var call =  /^1[3456789]\d{8}\d$/;
		//Email正则
		var emil =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		//判断用户输入账号的格式
		if(call.test(value) || name.test(value) || emil.test(value)){
			var valuep = pasw.value;
			//判断是否输入密码
			if(valuep.trim()){
				//至少8个字符，至少1个大写字母，1个小写字母和1个数字,不能包含特殊字符（非数字字母）：
				var pPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
				if(pPattern.test(valuep)){
                    var valuec = cof.value;
                    //确认密码
                    if(valuec == valuep){
                        var valuev = verif.value;
                        //判断是否输入验证码
                        if(valuev.trim()){  
                            if(check.checked){
                                alert('注册成功，赶紧去登录吧( •̀ ω •́ )y');
                                
                                window.location.href = "login.html";	
                            } else{
                                alert('请勾选')
                            }
                        }else{
                            alert('请输入验证码')
                        }
                    }else{
                        alert('两次输入的密码不一致')
                    }
					
				}else{
					alert('密码错误：至少8个字符，至少1个大写字母，1个小写字母和1个数字,不能包含特殊字符（非数字字母）')
				} 
			}else{
				alert('请输入密码')
			}
		}else{
			alert('请输入账户的正确格式')
		}
	}else{
		alert('请输入账号')
	}
}