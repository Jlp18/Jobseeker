package cn.tentact.nebula.dao;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

public class JobSeekerDao {
	public boolean login(String username,String password) {
		String sql=Db.getSql("login");
		long count= Db.queryLong(sql,username,password);
		boolean bool=count==1?true:false;
		return bool;
	}
	
	public boolean hasUser(String username) {
		String sql=Db.getSql("hasUser");
		long count=Db.queryLong(sql,username);
		return count==1?true:false;
	}
	
	public void add(String username,String password) {
		String sql=Db.getSql("add");
		Db.update(sql,username,password);
	}
	
	public Record searchInfo(String username) {
		String sql=Db.getSql("searchJobseekerInfo");
		Record record=Db.findFirst(sql,username);
		return record;
	}

}
