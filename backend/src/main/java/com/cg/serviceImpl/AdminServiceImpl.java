package com.cg.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.entity.Admin;
import com.cg.exception.AdminNotFoundException;
import com.cg.repository.AdminRepo;
import com.cg.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	AdminRepo adminRepo;

	public String login(Admin user) {
		Optional<Admin> opt = adminRepo.findById(user.getId());
		if (opt.isPresent()) {
			if ((opt.get().getPassword().equals(user.getPassword())))
				return "Login Successful";
			else
				return "Incorrect Password";
		}
		throw new AdminNotFoundException("Admin Does Not Exist");
	}

	@Override
	public Admin logout(Admin user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Admin> allUsers() {
		return adminRepo.findAll();
	}
}
