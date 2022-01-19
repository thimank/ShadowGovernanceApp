package com.cg.entity;

public class TaskDetails {

	private String fromDate;
	private String toDate;
	private String bu;
	private String taskDesc;
	private boolean exportData=false;
	
	public TaskDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TaskDetails(String fromDate, String toDate, String bu, String taskDesc,boolean exportData) {
		super();
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.bu = bu;
		this.taskDesc = taskDesc;
		this.exportData=exportData;
	}

	public String getFromDate() {
		return fromDate;
	}

	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}

	public String getToDate() {
		return toDate;
	}

	public void setToDate(String toDate) {
		this.toDate = toDate;
	}

	public String getBu() {
		return bu;
	}

	public void setBu(String bu) {
		this.bu = bu;
	}

	public String getTaskDesc() {
		return taskDesc;
	}

	public void setTaskDesc(String taskDesc) {
		this.taskDesc = taskDesc;
	}

	public boolean getExportData() {
		return exportData;
	}

	public void setExportData(boolean exportData) {
		this.exportData = exportData;
	}	
}
