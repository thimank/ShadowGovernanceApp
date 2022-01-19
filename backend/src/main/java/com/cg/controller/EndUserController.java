package com.cg.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.cg.entity.EndUser;
import com.cg.entity.TaskDetails;
import com.cg.serviceImpl.EndUserServiceImpl;

@RestController
public class EndUserController {
	
	@Autowired
	EndUserServiceImpl endUserService;
	
	@PostMapping("/addUser")
	public EndUser addUser(@RequestBody EndUser user) {
		return endUserService.addEndUser(user);
	}
	
	@GetMapping("/getUser/{id}")
	public EndUser getUser(@PathVariable int id) {
		return endUserService.viewEndUser(id);
	}
	
	@GetMapping("/allUsers")
	public List<EndUser> getAllUser() {
		return endUserService.listAllEndUsers();
	}
	
	@PutMapping("/editUser")
	public EndUser editUser(@RequestBody EndUser user) {
		return endUserService.editEndUser(user);
	}
	
	@DeleteMapping("/deleteUser/{id}")
	public EndUser deleteUser(@PathVariable int id) {
		return endUserService.removeEndUser(id);
	}
	
	@PostMapping("/report")
	public List<EndUser> createUserReport(@RequestBody TaskDetails criteria) {
		return endUserService.searchTaskbyCriteria(criteria);
	}

}
