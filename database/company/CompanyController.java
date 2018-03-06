package cn.tentact.nebula.company;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;

public class CompanyController extends Controller {
	private CompanyService companyService=new CompanyService();
	public void searchCompanyInfo() {
		String name=getPara("name");
		Record record=companyService.searchCompanyInfo(name);
		renderJson("result",record);
	}

}
