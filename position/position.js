mui.plusReady(function(){
	var myid=plus.webview.currentWebview().Id;
	$.ajax({
		url:"http://10.137.61.123:8080/nebula/recruit/searchListplus",
		type:"post",
		dataType:"json",
		data:{
			id:myid
		},
		success:function(json){
			let Div=$(".mui-content .insertinfo");
			let job=json.result.job;
			let salary=json.result.salary;
			let city=json.result.city;
			let education=json.result.education;
			let experience=json.result.experience;
			let name=json.result.name;
			let welfare=json.result.welfare;
			let type=json.result.type;
			let create_time=json.result.create_time;
			let div=`
			<div class="insertinfo">
			    <div>
				    <div class="ground2">
				       <h4>${job}</h4>
				       <span class="label">￥${salary}/月薪</span>
			        </div>
			        <div class="position-pannel">
					    <p>
						    <i class="iconfont icon-coordinates_fill">
						    <span class="icon">${city}</span>
						    </i>
						    <i class="iconfont icon-questions">
						    <span class="icon">${experience}</span>
						    </i>
						    <i>
						        <img src="../img/clock.png" />
						        <span class="icon">${create_time}</span>
						    </i>
					    </p>
			        </div>
				    <div class="picture">
					    <p id="Todetail">
						<td><img src="../img/common.png"width=50px height=40px align="left" border="0" /><a>${name}</a><br/>软件服务/上市公司/2000人以上</td><i class="iconfont icon-enter" style="float:right;margin-right:15px;font-weight:bold;font-size:18px"></i>
					    </p>
				    </div>
				</div>
			</div>
			`;
			Div.append(div);
			$("#Todetail").click(function(){
		    mui.openWindow({
		    	url:"../introduce/introduce.html",
		    	id:"pos",
		    	extras:{
		    		Name:name  //数据传递
		    	}
		    });
	});
		},
		error:function(){
			mui.toast("执行错误");
		}
	});
	//设置监听，然会页面后刷新页面
	document.getElementById("back").addEventListener("tap",function(){
		var tasklist=plus.webview.getWebviewById("eatras");
		tasklist.reload();
		mui.back();
	});
	
	$(".ground9").click(function(){
		alert("投递简历成功");
	});
	

	
	


	
	
	
});
