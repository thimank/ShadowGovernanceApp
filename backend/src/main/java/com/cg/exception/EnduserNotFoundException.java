package com.cg.exception;

public class EnduserNotFoundException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;

	public EnduserNotFoundException(String msg) {
		super(msg);
	}
}
