package com.cg.exception;

public class AnalyticNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public AnalyticNotFoundException(String msg) {
		super(msg);
	}

}
