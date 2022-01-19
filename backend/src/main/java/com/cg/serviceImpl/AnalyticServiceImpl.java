package com.cg.serviceImpl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.entity.Analytic;
import com.cg.exception.AdminNotFoundException;
import com.cg.exception.AnalyticNotFoundException;
import com.cg.repository.AnalyticRepo;
import com.cg.service.AnalyticService;

@Service
public class AnalyticServiceImpl implements AnalyticService{
	
	@Autowired
	AnalyticRepo analyticRepo;

	@Override
	public String login(Analytic user) throws AnalyticNotFoundException {
		Optional<Analytic> opt= analyticRepo.findById(user.getId());
		if (opt.isPresent()) {
			if((opt.get().getPassword().equals(user.getPassword())))
				return "Login Successful";
			else
				return "Incorrect Password";
		}
		throw new AdminNotFoundException("Analytic User Does Not Exist");
	}

	@Override
	public Analytic logout(Analytic user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Analytic> allUsers() {
		return analyticRepo.findAll();
	}

	@Override
	public Analytic addUser(Analytic user) {
		return analyticRepo.save(user);
	}
	

}
