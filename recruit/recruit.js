mui.ready(function(){
	//加载全部的招聘信息
	$.ajax({
		url: "http://10.137.61.123:8080/nebula/recruit/searchList",
		type: "post",
		dataType: "json",
		data: {
			start:0,
			length:1000
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
					url:"../position/position.html",
					id:"eatras",
					extras:{
						Id:json.result[0].id       //数据传递
							
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
					url:"../position/position.html",
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
					url:"../position/position.html",
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
					url:"../position/position.html",
					id:"eatras",
					extras:{
						Id:json.result[3].id
							
					}
				});
			});
			
			
			
			//第五条信息
				let li4 = `
				<li id="id4">
					<a>
						<div class="letter">${json.result[4].type.charAt(0)}</div>
						<div class="info">
							<div>
								<span class="little-header">${json.result[4].job}</span>
								<span class="date">${json.result[4].create_time}</span>
							</div>
							<div>
							    <span class="company">${json.result[4].name}</span>
								<span class="salary">${json.result[4].salary}</span>
							</div>
							<div>
								<i class="iconfont icon-coordinates_fill"></i>
								<span class="city">${json.result[4].city}</span>
								<i class="iconfont icon-people_fill"></i>
								<span class="education">${json.result[4].education}</span>
								<i class="iconfont icon-transaction_fill"></i>
								<span class="welfare">${json.result[4].welfare}</span>
							</div>
						</div>
					</a>
				</li>
			`;
			ul.append(li4);
			
			$(".recruit ul #id4").click(function(){
				mui.openWindow({
					url:"../position/position.html",
					id:"eatras",
					extras:{
						Id:json.result[4].id	
					}
				});
			});
			
			//第六条信息
				let li5 = `
				<li id="id5">
					<a>
						<div class="letter">${json.result[5].type.charAt(0)}</div>
						<div class="info">
							<div>
								<span class="little-header">${json.result[5].job}</span>
								<span class="date">${json.result[5].create_time}</span>
							</div>
							<div>
							    <span class="company">${json.result[5].name}</span>
								<span class="salary">${json.result[5].salary}</span>
							</div>
							<div>
								<i class="iconfont icon-coordinates_fill"></i>
								<span class="city">${json.result[5].city}</span>
								<i class="iconfont icon-people_fill"></i>
								<span class="education">${json.result[5].education}</span>
								<i class="iconfont icon-transaction_fill"></i>
								<span class="welfare">${json.result[5].welfare}</span>
							</div>
						</div>
					</a>
				</li>
			`;
			ul.append(li5);
			
			$(".recruit ul #id5").click(function(){
				mui.openWindow({
					url:"../position/position.html",
					id:"eatras",
					extras:{
						Id:json.result[5].id
					}
				});
			});
			
			//第七条信息
			let li6 = `
			<li id="id6">
				<a>
					<div class="letter">${json.result[6].type.charAt(0)}</div>
					<div class="info">
						<div>
							<span class="little-header">${json.result[6].job}</span>
							<span class="date">${json.result[6].create_time}</span>
						</div>
						<div>
							<span class="company">${json.result[6].name}</span>
						    <span class="salary">${json.result[6].salary}</span>
						</div>
						<div>
							<i class="iconfont icon-coordinates_fill"></i>
							<span class="city">${json.result[6].city}</span>
							<i class="iconfont icon-people_fill"></i>
							<span class="education">${json.result[6].education}</span>
							<i class="iconfont icon-transaction_fill"></i>
							<span class="welfare">${json.result[6].welfare}</span>
						</div>
					</div>
				</a>
			</li>
			`;
			ul.append(li6);
			
			$(".recruit ul #id6").click(function(){
				mui.openWindow({
					url:"../position/position.html",
					id:"eatras",
					extras:{
						Id:json.result[6].id
					}
				});
			});
			
			
			//第八条招聘信息
			let li7 = `
				<li id="id7">
					<a>
						<div class="letter">${json.result[7].type.charAt(0)}</div>
						<div class="info">
							<div>
								<span class="little-header">${json.result[7].job}</span>
								<span class="date">${json.result[7].create_time}</span>
							</div>
							<div>
							    <span class="company">${json.result[7].name}</span>
								<span class="salary">${json.result[7].salary}</span>
							</div>
							<div>
								<i class="iconfont icon-coordinates_fill"></i>
								<span class="city">${json.result[7].city}</span>
								<i class="iconfont icon-people_fill"></i>
								<span class="education">${json.result[7].education}</span>
								<i class="iconfont icon-transaction_fill"></i>
								<span class="welfare">${json.result[7].welfare}</span>
							</div>
						</div>
					</a>
				</li>
			`;
			ul.append(li7);
			
			$(".recruit ul #id7").click(function(){
				mui.openWindow({
					url:"../position/position.html",
					id:"eatras",
					extras:{
						Id:json.result[7].id
							
					}
				});
			});
    	},
		error: function(){
			mui.toast("执行错误");
		}
	});
});
