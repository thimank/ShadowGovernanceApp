package com.cg.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class EndUser {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String date;
	private String name;
	private String email;
	private String bu;
	private String pName;
	private String pMentor;
	private String taskDesc;
	
	public EndUser() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public EndUser(String date,String name, int id, String email, String bu, String pName, String pMentor, String taskDesc) {
		super();
		this.date=date;
		this.name = name;
		this.id = id;
		this.email = email;
		this.bu = bu;
		this.pName = pName;
		this.pMentor = pMentor;
		this.taskDesc = taskDesc;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getBu() {
		return bu;
	}
	public void setBu(String bu) {
		this.bu = bu;
	}
	public String getpName() {
		return pName;
	}
	public void setpName(String pName) {
		this.pName = pName;
	}
	public String getpMentor() {
		return pMentor;
	}
	public void setpMentor(String pMentor) {
		this.pMentor = pMentor;
	}
	public String getTaskDesc() {
		return taskDesc;
	}
	public void setTaskDesc(String taskDesc) {
		this.taskDesc = taskDesc;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}

}
