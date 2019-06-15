package com.utilities;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.Properties;

public class ConfigReader {

	private final String filePath = System.getProperty("user.dir") + "\\configs\\config.properties";
	private Properties properties;

	public ConfigReader() {
		BufferedReader bufferedReader;
		try {
			bufferedReader = new BufferedReader(new FileReader(filePath));
			properties = new Properties();
			try {
				properties.load(bufferedReader);
				bufferedReader.close();
			} catch (Throwable e) {
				e.printStackTrace();
			}
		} catch (Throwable e) {
			e.printStackTrace();
			throw new RuntimeException("Configurations are not provided at: " + filePath);
		}

	}

	public String getApplicationURL() {
		String url = null;
		url = properties.getProperty("testUrl");
		if (url != null)
			return url;
		else
			throw new RuntimeException("testUrl is not configured in the properties file");
	}

	public String[] getEmailList() {
		String[] emailList;

		if (System.getProperty("EmailList") != null) {
			emailList = System.getProperty("EmailList").split(",");
		} else {
			emailList = properties.getProperty("EmailList").split(",");

		}
		if (emailList != null)
			return emailList;
		else
			throw new RuntimeException("EmailList not specified in the config.properties file.");
	}
}
