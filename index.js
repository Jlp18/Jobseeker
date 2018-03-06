mui.ready(function(){
	
	//加载用户信息
	$.ajax({
		url: "http://10.137.61.123:8080/nebula/jobseeker/searchInfo",
		type:"post",
		dataType: "json",
		success: function(json){
			let username = json.result.username;
			let tel=json.result.tel;                                                                                                       
			let email=json.result.email;
			let exp=json.result.exp;
			let type=json.result.type;
			$("#username").text(username);
			$(".type").text(type);
			$(".percent").css("width", exp % 1000 / 1000 * 100 + "%");
			$(".level").text("LV" + Math.floor(exp / 1000));
		},
		error: function(){
			mui.toast("执行错误");
		}
		
	});
	
	//加载最新的4条招聘信息
	$.ajax({
		url: "http://10.137.61.123:8080/nebula/recruit/searchList",
		type: "post",
		dataType: "json",
		data: {
			start:0,
			length:4
		},
		success: function(json){
			let ul=$(".recruit ul");
			//使用模版字符串 
			
			//第一个招聘信息
			let li0 = `
				<li id="id0">
					<a>
						<div class="letter">${json.result[0].type.charAt(0)}</div>
						<div class="info">
							<div>
								<span class="little-header">${json.result[0].job}</span>
								<span class="date">${json.result[0].create_time}</span>
							</div>
							<div>
							    <span class="company">${json.result[0].name}</span>
								<span class="salary">${json.result[0].salary}</span>
							</div>
							<div>
								<i class="iconfont icon-coordinates_fill"></i>
								<span class="city">${json.result[0].city}</span>
								<i class="iconfont icon-people_fill"></i>
								<span class="education">${json.result[0].education}</span>
								<i class="iconfont icon-transaction_fill"></i>
								<span class="welfare">${json.result[0].welfare}</span>
							</div>
						</div>
					</a>
				</li>
			`;
			ul.append(li0);
			
			$(".recruit ul #id0").click(function(){
				mui.openWindow({
					url:"position/position.html",
					id:"eatras",
					extras:{
						Id:json.result[0].id
							
					}
				});
			});
			
			//第二个招聘信息
			let li1 = `
				<li id="id1">
					<a>
						<div class="letter">${json.result[1].type.charAt(0)}</div>
						<div class="info">
							<div>
								<span class="little-header">${json.result[1].job}</span>
								<span class="date">${json.result[1].create_time}</span>
							</div>
							<div>
							    <span class="company">${json.result[1].name}</span>
								<span class="salary">${json.result[1].salary}</span>
							</div>
							<div>
								<i class="iconfont icon-coordinates_fill"></i>
								<span class="city">${json.result[1].city}</span>
								<i class="iconfont icon-people_fill"></i>
								<span class="education">${json.result[1].education}</span>
								<i class="iconfont icon-transaction_fill"></i>
								<span class="welfare">${json.result[1].welfare}</span>
							</div>
						</div>
					</a>
				</li>
			`;
			ul.append(li1);
			
			$(".recruit ul #id1").click(function(){
				mui.openWindow({
					url:"position/position.html",
					id:"eatras",
					extras:{
						Id:json.result[1].id
							
					}
				});
			});
			
			//第三条招聘信息
			let li2 = `
				<li id="id2">
					<a>
						<div class="letter">${json.result[2].type.charAt(0)}</div>
						<div class="info">
							<div>
								<span class="little-header">${json.result[2].job}</span>
								<span class="date">${json.result[2].create_time}</span>
							</div>
							<div>
							    <span class="company">${json.result[2].name}</span>
								<span class="salary">${json.result[2].salary}</span>
							</div>
							<div>
								<i class="iconfont icon-coordinates_fill"></i>
								<span class="city">${json.result[2].city}</span>
								<i class="iconfont icon-people_fill"></i>
								<span class="education">${json.result[2].education}</span>
								<i class="iconfont icon-transaction_fill"></i>
								<span class="welfare">${json.result[2].welfare}</span>
							</div>
						</div>
					</a>
				</li>
			`;
			ul.append(li2);
			
			$(".recruit ul #id2").click(function(){
				mui.openWindow({
					url:"position/position.html",
					id:"eatras",
					extras:{
						Id:json.result[2].id
							
					}
				});
			});
			
			
			//第四条招聘信息
			let li3 = `
				<li id="id3">
					<a>
						<div class="letter">${json.result[3].type.charAt(0)}</div>
						<div class="info">
							<div>
								<span class="little-header">${json.result[3].job}</span>
								<span class="date">${json.result[3].create_time}</span>
							</div>
							<div>
							    <span class="company">${json.result[3].name}</span>
								<span class="salary">${json.result[3].salary}</span>
							</div>
							<div>
								<i class="iconfont icon-coordinates_fill"></i>
								<span class="city">${json.result[3].city}</span>
								<i class="iconfont icon-people_fill"></i>
								<span class="education">${json.result[3].education}</span>
								<i class="iconfont icon-transaction_fill"></i>
								<span class="welfare">${json.result[3].welfare}</span>
							</div>
						</div>
					</a>
				</li>
			`;
			ul.append(li3);
			
			$(".recruit ul #id3").click(function(){
				mui.openWindow({
					url:"position/position.html",
					id:"eatras",
					extras:{
						Id:json.result[3].id
							
					}
				});
			});
    	},
		error: function(){
			mui.toast("执行错误");
		}
	});
	
	
	window.addEventListener('refresh', function(e){//执行刷新
       location.reload();
    });
	
	$("#myresume").click(function(){
		
		mui.openWindow("resume/resume.html","resume.html",{});
		
	});
	
	$("#myrecruit").click(function(){
		mui.openWindow("recruit/recruit.html","recruit.html",{});
	});
	
	
});


			
			
			
			
			/*for(let one of json.result){
				let id = one.id;
				myid[i++]=id;
				let job = one.job;
				myjob[i++]=job;
				let salary = one.salary;
				mysalary[i++]=salary;
				let city = one.city;
				let education = one.education;
				let experience = one.experience;
				let name = one.name;
				let welfare = one.welfare;
				let type = one.type;
				let create_time = one.create_time;
				
				
				//使用模版字符串 
				let li = `
					<li>
						<a>
							<div class="letter">${type.charAt(0)}</div>
							<div class="info">
								<div>
								   <span class="little-header">${job}</span>
								   <span class="date">${create_time}</span>
							    </div>
								<div>
									<span class="company">${name}</span>
									<span class="salary">${salary}</span>
								</div>
								<div>
									<i class="iconfont icon-coordinates_fill"></i>
									<span class="city">${city}</span>
									<i class="iconfont icon-people_fill"></i>
									<span class="education">${education}</span>
									<i class="iconfont icon-transaction_fill"></i>
									<span class="welfare">${welfare}</span>
								</div>
							</div>
						</a>
					</li>
				`;
				ul.append(li);

			}
				$(".recruit ul").click(function(){
					mui.openWindow({
						url:"position/position.html",
						id:"eatras",
						extras:{
							Id:json.result[0].id
							
						}
					});
				
				});*/