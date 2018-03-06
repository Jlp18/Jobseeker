mui.plusReady(function(){
	var myname=plus.webview.currentWebview().Name;  //接受跳转原始也传递 的数据
	$.ajax({
		url:"http://10.137.61.123:8080/nebula/company/searchCompanyInfo",
		type:"post",
		dataType:"json",
		data :{
			"name":myname
		},
		success: function(json){
			let Div=$(".mui-content .infos");
			let companyname=json.result.name;
			let address=json.result.address;
			let domain=json.result.domain;
			let type=json.result.type;
			let property=json.result.property;
			let scale=json.result.scale;
			
			let div=`
			<div class="infos">
			    <div class="introduce">
			        <h2>${companyname}</h2>
				    <div class="companyinfo">
					    <dl>
						    <dt>
							    <span class="character">性质</span>
							    <span class="info">${property}</span>
						    </dt>
						    <dt>
							    <span class="character">规模</span>
							    <span class="info">${scale}</span>
						    </dt>
					    </dl>
					    <dl>
						    <dt>
							    <span class="character">行业</span>
							    <span class="info">${type}</span>
						    </dt>
					    </dl>
					    <dl>
						    <dt >
							    <span class="character">地址</span>
						    </dt>
						    <dt >
							    <span class="special_info">${address}</span>
						    </dt>
							
					    </dl>
		            </div>
		            <div class="picture">
		        	    <img src="../img/company.jpg" width="320" height="240" />
		            </div>
		            <div class="detail_info">
		        	       <p>${companyname}股份有限公司以软件与信息服务为主营业务，创立于2001年6月18日，并于2011年10月26日在深圳证券交易所创业板上市（股票简称：“华宇软件”，股票代码：300271），注册资金1.48亿元。
		        	       </p>
		        	       <p>${companyname}总部位于北京市海淀区清华科技园，目前拥有10家全资子公司或控股子公司。其中，北京华宇信息技术有限公司成立于2009年，主要从事电子政务产品与服务业务，华宇信息的员工中具有本科及以上学历的占83%以上，2013年度被评为北京最佳雇主30强。
		        	       </p>
		        	       <p>${companyname}秉承“自强不息，厚德载物”的企业精神，坚持诚信为本的价值观，以“提供专业的技术、优秀的产品和卓越的服务，以信息化创造客户价值”为使命，专注于电子政务领域的软件与信息服务，为客户的信息化事业提供全方位的解决方案与服务，是国内领先的电子政务解决方案提供商。
		        	       </p>
		        	       <p>${companyname}的优势业务涵盖了客户信息系统的全生命周期，包括信息化系统规划咨询、应用软件定制开发、信息化系统建设、信息化应用推广、信息化系统运维服务。目前，华宇主要客户来自法院、检察院行业，司法行政、政府委办局、食药监、质检、税务、工商等政府单位，及金融、卫生等其他企事业单位多个领域。根据IDC中国电子政务研究报告，华宇自2006年至今连续7年位列中国电子政务IT解决方案供应商10强。在法院、检察院信息化建设领域，华宇连续多年市场占有率第一，客户遍及全国。
		        	       </p>
		        	       <p>${companyname}及其全资子公司持有工业和信息化部颁发的“计算机信息系统集成一级资质证书”、国家保密局颁发的“涉及国家秘密的计算机信息系统集成甲级资质证书”和“涉及国家秘密的计算机信息系统集成软件单项资质证书”，是国家认定的“高新技术企业”、“软件企业”、“国家规划布局内重点软件企业”、“安防工程企业（一级）”，取得了中国信息安全测评中心颁发的“信息安全服务资质证书”；是中关村科技园区管理委员会认定的“中关村国家自主创新示范区十百千工程企业”、“中关村国家自主创新示范区核心区重点创新型企业”；通过了CMMI（软件能力成熟度模型集成）3级认证、ISO 9001质量管理体系认证、ISO/IEC 20000 IT服务管理体系认证和ISO/IEC27001信息安全管理体系认证，是中国电子工业标准化技术协会信息技术服务分会（简称ITSS分会）副会长单位，并首批通过信息技术服务运行维护标准符合性评估。公司优秀产品和案例曾荣获国务院办公厅和科技部颁发的“优秀软件奖”及北京市科技委员会颁发的“北京市科学技术奖”，主要产品通过中关村国家自主创新示范区新技术新产品（服务）认定。公司目前拥有200余项具有自主知识产权的软件产品，主要产品和技术居于国内领先地位。
		        	       </p>
		        	       <p>${companyname}结合电子政务服务经验与符合国际标准的服务管理框架，综合运用先进的服务工具，通过以北京总部服务呼叫中心、技术专家、遍及全国30余处现场服务网点和近300人的专业服务队伍建立的专业化服务体系，为全国各地用户提供及时、专业的信息化服务，其中为北京市高级人民法院提供的运维服务被工业和信息化部评为“全国电子政务运维示范项目”。
		        	       </p>
		        	       <p>${companyname}软件积极履行社会责任，华宇助学基金会自2006年成立以来，通过各种社会活动，了解和支持社会公益事业，捐助在教育中需要帮助的孩子；截至2014年1月，已累计捐款100多万元，资助人数300余人， 资助地区包括内蒙古、西藏、青海、北京、河南、重庆、湖南等地，向超过20所学校的家庭贫困学生提供慈善捐助。
		        	       </p>
		            </div>
		             
			    </div>
			</div>
		    `;
		    Div.append(div);
		},
		error:function(){
			mui.toast("执行错误");
		}
	});
});