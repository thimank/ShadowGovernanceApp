package com.cg.service;

import java.util.List;
import com.cg.entity.Admin;
import com.cg.exception.AdminNotFoundException;

public interface AdminService {
	
	public String login(Admin user) throws AdminNotFoundException;
	
	public Admin logout(Admin user);
	
	public List<Admin> allUsers();
}
