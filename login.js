//JQuery的主方法
$(function(){
	$(".login-pannel").show();
	
	//为选项卡添加点击事件 
	$(".tab dt").on("tap",function(){
		var i=$(".tab dt").index($(this));
		$(".tab dt").removeClass("active"); //删除所有dt的active样式
        $(this).addClass("active");  //点击的dt添加active样式
        if(i==0){
			$(".registor-pannel").hide();
			$(".login-pannel").show();
		}
		else{
			$(".login-pannel").hide();
			$(".registor-pannel").show();
		}
	});
	
	
	
	//登录按钮
	$(".login-pannel .btn").on("tap",function(){
		//登录校验内容 ，正则表达式，用户名
		var reg=new RegExp("^[a-zA-Z0-9@\._]{3,30}$");
		var username=$(".login-pannel [name='username']").val();
		if(reg.test(username)==false){
			mui.toast("用户名错误");
			return;
		}
		//校验密码
		reg=new RegExp("^[a-zA-Z0-9@\._]{6,30}$");
		var password=$(".login-pannel [name='password']").val();
		if(reg.test(password)==false){
			mui.toast("密码错误");
			return ;
		}
		//发送登录请求
		$.ajax({
			
			url:"http://10.137.61.123:8080/nebula/jobseeker/login",
			/*192.168.43.70*/
			type:"post",
			dataType:"json",
			data:{
				"username":username,
				"password":password
			},
			success:function(json){
				if(json.result){
					mui.openWindow("index.html","index");
				}else{
					mui.toast("登录失败");
				}
			},
			error:function(){
				mui.toast("执行异常")
			}

		})
	});
	
	//注册按钮
	$(".registor-pannel .btn").on("tap",function(){
		//正则表达式验证注册用户名
		var reg=new RegExp("^[a-zA-Z0-9@\._]{3,30}$");
		var username=$(".registor-pannel [name='username']").val();
		if(reg.test(username)==false){
			mui.toast("用户名格式错误");
			return ;
		}
		//正则表达式校验密码
		reg=new RegExp("^[a-zA-Z0-9@\._]{6,30}$");
		var password=$(".registor-pannel [name='password']").val();
		if(reg.test(password)==false){
			mui.toast("密码格式错误");
			return ;
		}
		
		var repassword=$(".registor-pannel [name='repassword']").val();
		if(reg.test(repassword)==false){
			mui.toast("确认密码格式错误");
			return ;
		}
		
		if(password!=repassword){
			mui.toast("两次密码不一致");
			return ;
		}
		
		//发送注册请求
		$.ajax({
			url:"http://10.137.61.123:8080/nebula/jobseeker/add",
			type:"post",
			dataType:"json",
			data:{
				"username":username,
				"password":password
			},
			success:function(json){
				if(json.result){
					mui.toast("注册成功");
					mui.openWindow("login.html","login");
				}
				else{
					mui.toast("用户名已被占用");
				}
			},
			error:function(){
				mui.toast("执行异常");
			}
			

		})
	});
	
	
})
