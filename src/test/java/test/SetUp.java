package test;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class SetUp {
	
	
	public static WebDriver driver;
	
	@Before
	public void setWebDriver() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Galib\\eclipse-workspace\\GuideWire\\chromedriver.exe");
		driver = new ChromeDriver();
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}
	
	@After
	public void tearDown() {
		
		driver.quit();
		
	}

}
