package cn.tentact.nebula.recruit;

import java.util.List;

import com.jfinal.plugin.activerecord.Record;

import cn.tentact.nebula.dao.RecruitDao;

public class RecruitService {
	private RecruitDao dao=new RecruitDao();
	
	public List<Record> searchList(long start ,long length){
		List<Record> list=dao.searchList(start, length);
		return list;
	}
	
	public Record searchListplus(int id) {
		Record record=dao.searchListplus(id);
		return record;
	}

}
