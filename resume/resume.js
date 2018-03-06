function clickItem(json) {
	let type = json.type;
	let callback;
	if(type == "picker") {
		callback = function() {
			let obj = $(this);
			let picker = new mui.PopPicker();
			let value = obj.find(".value").data("value"); //控件原有值
			picker.setData(json.data);
			picker.pickers[0].setSelectedValue(value)
			picker.show(function(items) {
				let element = obj.find(".value");
				element.html(items[0].value + "<i class='iconfont icon-enter'></i>");
				element.data("value", items[0].value)
				picker.dispose();
			});
		}
	} else if(type == "prompt") {
		callback = function() {
			let obj = $(this);
			mui.prompt(json.message, json.placeholder, json.title, json.btn, function(result) {
				if(result.index == 1) {
					let element = obj.find(".value");
					let regExp = new RegExp(json.pattern);
					if(regExp.test(result.value)) {
						element.html(result.value + json.unit + "<i class='iconfont icon-enter'></i>");
					} else {
						mui.toast("填写错误");
					}
				}

			}, 'div');
		}

	} else if(type == "datePicker") {
		callback = function() {
			let obj = $(this);
			let dtPicker = new mui.DtPicker({
				type: "date",
				beginDate: new Date(1900,1,1),
				endDate: new Date(2018,1,1),
			});
			dtPicker.show(function(items) {
				let element = obj.find(".value");
				
				let year = items.y.value;
				let month = items.m.value;
				let date = items.d.value;
				let temp = year + "-" + month + "-" + date;
				element.html(temp + "<i class='iconfont icon-enter'></i>");
				dtPicker.dispose();
			});
		}
	}
	$(json.el).on("tap", callback);

	if(type == "editor") {
		var editor = new Eleditor({
			el: json.el,
			toolbars: [
				"editText",
				"deleteThis",
				"cancel"
			]
		});
		
	$(json.el).data("editor",editor);
	}
}
mui.ready(function() {
	let array = [{
			el: "#sex",
			type: "picker",
			data: [{
				value: '男',
				text: '男'
			}, {
				value: '女',
				text: '女'
			}]
		}, {
			el: "#birthday",
			type: "datePicker"
		},
		{
			el: "#height",
			message: "请输入您的身高",
			placeholder: "",
			title: "身高",
			btn: ["取消", "确认"],
			unit: "cm",
			pattern: "^[12][0-9]{2}$",
			type: "prompt"
		},
		{
			el: "#weight",
			message: "请输入您的体重",
			placeholder: "",
			title: "体重",
			btn: ["取消", "确认"],
			unit: "kg",
			pattern: "^[0-9][0-9]{1,2}$",
			type: "prompt"
		},

		{
			el: "#marriage",
			data: [{
				value: '未婚',
				text: '未婚'
			}, {
				value: '已婚',
				text: '已婚'
			}],
			type: "picker"
		},
		{
			el: "#ancestral_home",
			message: "输入您的籍贯",
			placeholder: "",
			title: "籍贯",
			btn: ["取消", "确认"],
			unit: "",
			pattern: "^[\u4e00-\u9fa5]{2,4}$",
			type: "prompt"
		},
		{
			el: "#info [name='education']",
			data: [{
				value: '无',
				text: '无'
			}, {
				value: '中专',
				text: '中专'
			}, {
				value: '大专',
				text: '大专'
			}, {
				value: '本科',
				text: '本科'
			}, {
				value: '研究生',
				text: '研究生'
			}, {
				value: '博士',
				text: '博士'
			}],
			type: "picker"
		},
		{
			el: "#tel",
			message: "输入您的电话",
			placeholder: "",
			title: "电话",
			btn: ["取消", "确认"],
			unit: "",
			pattern: "^[1][0-9]{10}$",
			type: "prompt"
		},
		{
			el: "#email",
			message: "输入您的邮箱",
			placeholder: "",
			title: "邮箱",
			btn: ["取消", "确认"],
			unit: "",
			pattern: "^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$",
			type: "prompt"
		},
		{
			el: "[name='school']",
			message: "输入您的学校",
			placeholder: "",
			title: "学校",
			btn: ["取消", "确认"],
			unit: "",
			pattern: "^[\u4e00-\u9fa5]{4,20}$",
			type: "prompt"
		}, {
			el: "[name='major']",
			message: "输入您的专业",
			placeholder: "",
			title: "专业",
			btn: ["取消", "确认"],
			unit: "",
			pattern: "^[\u4e00-\u9fa5]{4,20}$",
			type: "prompt"
		},
		{
			el: "#education [name='education']",
			data: [{
				value: '无',
				text: '无'
			}, {
				value: '中专',
				text: '中专'
			}, {
				value: '大专',
				text: '大专'
			}, {
				value: '本科',
				text: '本科'
			}, {
				value: '研究生',
				text: '研究生'
			}, {
				value: '博士',
				text: '博士'
			}],
			type: "picker"
		},
		{
			el: "#education [name='year']",
			message: "输入您的毕业年份",
			placeholder: "",
			title: "年份",
			btn: ["取消", "确认"],
			unit: "",
			pattern: "^[12][0-9]{3}$",
			type: "prompt"
		},
		{
			el: "#work [name='company']",
			message: "输入您工作过的企业名称",
			placeholder: "",
			title: "企业",
			btn: ["取消", "确认"],
			unit: "",
			pattern: "^[a-zA-Z0-9\u4e00-\u9fa5]{2,40}$",
			type: "prompt"
		},
		{
			el: "#work [name='hiredate']",
			type: "datePicker"
		}, {
			el: "#work [name='leavedate']",
			type: "datePicker"
		}, {
			el: "#work [name=content]",
			type: "editor"
		}
	];
	$(".operate").on("tap", function() {
		if($(this).text() == "修改") {
			$(this).text("保存");
			
			for(let one of array) {
				clickItem(one);
			}
			let dynamic = $("[name='dynamic']")
			dynamic.html(dynamic.text()+"&nbsp;&nbsp;（长按删除）");
			
			$("#education .btn[name='add']").on("tap", function() {
				//解除已有控件的点击事件
				for(let one of array) {
					if(one.type == "editor") {
						$(one.el).removeAttr("Eleditor-Inited");
					} else {
						$(one.el).unbind("tap");
					}
				}

				let temp = `
					<dt name="dynamic">教育经历&nbsp;&nbsp;(长按删除)</dt>
					<dd>
						<a name="school">
							<span class="label">毕业学校</span>
							<span class="value"><i class="iconfont icon-enter"></i></span>
						</a>
					</dd>
					<dd>
						<a name="major">
							<span class="label">所学专业</span>
							<span class="value"><i class="iconfont icon-enter"></i></span>
						</a>
					</dd>
					<dd>
						<a name="education">
							<span class="label">学历</span>
							<span class="value"><i class="iconfont icon-enter"></i></span>
						</a>
					</dd>
					<dd>
						<a name="year">
							<span class="label">毕业年份</span>
							<span class="value"><i class="iconfont icon-enter"></i></span>
						</a>
					</dd>
				`;
				$("#education dl").append(temp);
				//为所有控件重新绑定点击事件
				for(let one of array) {
					clickItem(one);
				}
				//为所有动态的内容解除长按事件
				$("[name='dynamic']").unbind("longtap");
				//为所有的动态内容绑定长按事件
				$("[name='dynamic']").on("longtap", function() {
					//TODO 震动
					plus.device.vibrate(100);
					let obj = $(this);
					mui.confirm("是否删除选中的内容", "提示信息", ["否", "是"], function(result) {
						if(result.index == 1) {
							obj.nextUntil("dt").remove();
							obj.remove();
						}
					}, "div");
				});
			});

		} else {
			$(this).text("修改");
			
			for(let one of array) {
				if(one.type == "editor") {
					let editor=$(one.el).data("editor");
					editor.destory();
					$(one.el).removeData("editor");
				} else {
					$(one.el).unbind("tap");
				}
			}
			$(".btn[name='add']").unbind("tap");
			let dynamic = $("[name='dynamic']")
			dynamic.text(dynamic.text().substring(0,4))
		}
	});
	
	mui.back=function(){
		mui.openWindow("/index.html","index.html",{});
	}
	/*$("header a").click(function(){
		mui.openWindow("index.html","index.html",{});
		mui.window.history.back(-1);
	});
	*/
	
});
	//			$(one.el).removeAttr("Eleditor-Inited");
	
	

mui.plusReady(function(){
	

	
	/*$(".head-photo").on("tap",function(){
		let btn=null;
	if(plus.device.vendor.toLowerCase()=="xiaomi"){
		btn = [{title:"从手机相册选择"}]
	}else{
		btn = [{title:"拍摄照片"}],[{title:"从手机相册选择"}]
	}
	plus.nativeUI.actionSheet({
		title:"修改用户头像",
		cancel:"取消",
		buttons:btn,
	},function(button){
		if((button.index==1 && btn.length==2)){
			//拍摄照片
			var cmr=plus.camera.getCamera();
			var res=cmr.supportedImageResolutions[0];
			var fmt=cmr.supportedImageFormats[0];
			cmr.captureImage(function(path){
				plus.io.resolveLocalFileSystemURL(path,function(entry){
					var wating = plus.nativeUI.showWaiting();
					var p =entry.toLocalURL();
					$(".photo").css("background-image","url(../img/user.jpg)");
					var task = plus.uploader.createUpload("http://10.137.61.123:8080/nebula/jobseeker/upLoadPhoto",{
						method: "POST"
					},
					function(t,status){  //上传完成
						if(status==200){
							mui.toast("上传成功");
							wating.close();  //关闭等待提示按钮
						}else{
							mui.toast("上传失败");
							wating.close();  //关闭等待提示按钮
						}
					}
					);
					//添加其他参数
					//task.addData("name","test");
					task.addFile("url(../img/user.jpg)",{
						key:"dddd"
					});
					task.start();
				},function(e){
					mui.toast("读取照片文件错误");
				});
			},{
				resolution: res,
				format: fmt
			});
		}else if((button.index ==1 && btn.length ==1)||button.index==2){
			//相册选择
		}
	}
	)
	});*/
	
	
});

