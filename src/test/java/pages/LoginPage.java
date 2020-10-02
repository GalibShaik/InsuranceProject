package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	WebDriver driver;
   
	
	@FindBy(name="uid")
	WebElement objUserName;
	
	@FindBy(name="password")
	WebElement objPassword;
	
	@FindBy(name="btnLogin")
	WebElement objLogin;
	
    By titleText =By.className("barone");
   
    
	public LoginPage(WebDriver driver){
        	this.driver = driver;
        	
        	PageFactory.initElements(driver, this);
    	}
	
	public void login(String strUserName,String strPassword){
		objUserName.sendKeys(strUserName);
		objPassword.sendKeys(strPassword);
		objLogin.click();
	}

}
