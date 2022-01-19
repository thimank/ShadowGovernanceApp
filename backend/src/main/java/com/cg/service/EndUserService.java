package com.cg.service;

import java.util.List;
import com.cg.entity.EndUser;
import com.cg.entity.TaskDetails;
import com.cg.exception.EnduserNotFoundException;

public interface EndUserService {
	
	public EndUser addEndUser(EndUser user);
	
	public EndUser editEndUser(EndUser user) throws EnduserNotFoundException;

	public EndUser removeEndUser(int id) throws EnduserNotFoundException;

	public EndUser viewEndUser(int id) throws EnduserNotFoundException;

	public List<EndUser> listAllEndUsers();
	
	public List<EndUser> searchTaskbyCriteria(TaskDetails criteria);

}
