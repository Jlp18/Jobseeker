package cn.tentact.nebula.jobseeker;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.upload.UploadFile;

public class JobseekerController extends Controller {
	private JobseekerService jobseekerService=new JobseekerService();
	/**
	 * 登录系统
	 */
	public void login() {
		//获得Ajax上传的数据
		String username=getPara("username");
		String password=getPara("password");
		//执行系统登录
		boolean bool=jobseekerService.login(username, password);
		if(bool) {
			//把登录成功的保存到Shiro
			Subject subject=SecurityUtils.getSubject(); //Shrio的连接
			subject.logout();// 先退出登录
			UsernamePasswordToken token=new UsernamePasswordToken(username,password);
			subject.login(token); //保持登录状态
			//把用户角色保存到Shrio
			Session session=subject.getSession();
			session.setAttribute("username", username);
			session.setAttribute("role", "jobseeker");
		}		
		//返回登录结果
		renderJson("result",bool);			
	}
	/**
	 * 注册用户
	 */
	public void add() {
		//获得Ajax上传的数据
		String username=getPara("username");
		String password=getPara("password");
		
		if(!jobseekerService.hasUser(username)) {
			jobseekerService.add(username, password);
			Subject subject=SecurityUtils.getSubject();
			subject.logout();// 先退出登录
			UsernamePasswordToken token=new UsernamePasswordToken(username,password);
			subject.login(token);
			
			Session session=subject.getSession();
			session.setAttribute("username", username);
			session.setAttribute("role", "jobseeker");
			renderJson("result",true);
		}
		else {
			renderJson("result",false);
		}
	}
	
	/**
	 * 查询用户信息
	 */
	@RequiresRoles("jobseeker")
	public void searchInfo() {
		Subject subject=SecurityUtils.getSubject();
		Session session=subject.getSession();
		String username = (String) session.getAttribute("username");
		Record record = jobseekerService.searchInfo(username);
		renderJson("result",record);
	}
	
	
	/**
	 * 是否已经通过Shiro认证
	 */
	public void isAuthenticated() {
		Subject subject=SecurityUtils.getSubject();
		boolean bool=subject.isAuthenticated();
		renderJson("result",bool);
	}
	
	
	/**
	 * 
	 */
	@RequiresRoles("jobseeker")
	public void upLoadPhoto() {
		UploadFile uploadFile = this.getFile();
		String uploadPath = uploadFile.getUploadPath();
		String fileName = uploadFile.getFileName();
		String filePath = ((uploadPath + "\\")+fileName);
		this.renderJson("result","OK");
	}

}
