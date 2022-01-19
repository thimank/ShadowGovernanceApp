package com.cg.exception;

public class AdminNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public AdminNotFoundException(String msg) {
		super(msg);
	}
}
