package cn.tentact.nebula.company;

import com.jfinal.plugin.activerecord.Record;

import cn.tentact.nebula.dao.CompanyDao;

public class CompanyService {
	private CompanyDao dao=new CompanyDao();
	public Record searchCompanyInfo(String name) {
		Record record=dao.searchCompanyInfo(name);
		return record;
	}

}
