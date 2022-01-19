package com.cg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cg.entity.Admin;

public interface AdminRepo extends JpaRepository<Admin,Integer> {

}
