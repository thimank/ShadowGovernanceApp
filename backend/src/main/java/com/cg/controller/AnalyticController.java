package com.cg.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.cg.entity.Analytic;
import com.cg.serviceImpl.AnalyticServiceImpl;

@RestController
public class AnalyticController {
	
	@Autowired
	AnalyticServiceImpl analyticService;
	
	@PostMapping("/addAnalytic")
	public Analytic addUser(@RequestBody Analytic user) {
		return analyticService.addUser(user);
	}
	
	@PostMapping("/analyticLogin")
	public String login(@RequestBody Analytic user) {
		return analyticService.login(user);
	}
	
	@PostMapping("/analyticLogout")
	public Analytic logout(Analytic user) {
		return analyticService.logout(user);
	}
	
	@GetMapping("/allAnalytic")
	public List<Analytic> getUserById() {
		return analyticService.allUsers();
	}

}
