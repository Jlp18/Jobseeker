package cn.tentact.nebula.recruit;

import java.util.List;

import org.apache.shiro.authz.annotation.RequiresRoles;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;

public class RecruitController extends Controller {
	private RecruitService recruitService=new RecruitService();
	
	@RequiresRoles("jobseeker")
	public void searchList() {
		long start=getParaToLong("start");
		long length=getParaToLong("length");
		List<Record> list=recruitService.searchList(start, length);
		renderJson("result",list);
	}
	
	public void searchListplus(){
		int id=getParaToInt("id");
		Record record=recruitService.searchListplus(id);
		renderJson("result",record);
	}

}
