package com.cg.service;

import java.util.List;
import com.cg.entity.Analytic;
import com.cg.exception.AnalyticNotFoundException;

public interface AnalyticService {

	public String login(Analytic user) throws AnalyticNotFoundException;

	public Analytic logout(Analytic user);
	
	public Analytic addUser(Analytic user);

	public List<Analytic> allUsers();
}
