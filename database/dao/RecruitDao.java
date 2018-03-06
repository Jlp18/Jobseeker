package cn.tentact.nebula.dao;

import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

public class RecruitDao {
	public List<Record> searchList(long start,long length){
		String sql=Db.getSql("searchList");
		List<Record> list=Db.find(sql, start, length);
		return list;
	}
	public Record searchListplus(int id) {
		String sql=Db.getSql("searchListplus");
		Record record=Db.findFirst(sql,id);
		return record;
	}

}
