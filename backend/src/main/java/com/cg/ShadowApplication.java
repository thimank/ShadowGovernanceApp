package com.cg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;


@SpringBootApplication
public class ShadowApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShadowApplication.class, args);
	}

}
