package Utitlities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseClass {
	public static WebDriver driver;

	public void openBrower() {
		System.setProperty("webdriver.chrome.driver", "/Users/faisalnaziry/Desktop/Drivers/chromedriver");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	public void openingSalesforce() {
		driver.get("https://login.salesforce.com");
	}

	public void tearDown() {
		driver.quit();
	}
}
