package cn.tentact.nebula.jobseeker;

import com.jfinal.aop.Before;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.activerecord.tx.Tx;

import cn.tentact.nebula.dao.JobSeekerDao;

public class JobseekerService {
	private JobSeekerDao dao=new JobSeekerDao();
	
	public boolean login(String username,String password) {
		boolean bool=dao.login(username, password);
		return bool;
	}
	
	public boolean hasUser(String username) {
		boolean bool=dao.hasUser(username);
		return bool;
	}
    
	@Before(Tx.class)
	public void add(String username,String password) {
		dao.add(username, password);
	}
	
	public Record searchInfo(String username) {
		Record record=dao.searchInfo(username);
		return record;
	}
}
