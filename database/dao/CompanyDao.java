package cn.tentact.nebula.dao;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

public class CompanyDao {
	public Record searchCompanyInfo(String name) {
		String sql=Db.getSql("searchCompanyInfo");
		Record record=Db.findFirst(sql, name);
		return record;
	}

}
