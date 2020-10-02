package test;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.HomePage;
import pages.LoginPage;

public class LoginStepDef {
	
	WebDriver driver = SetUp.driver;
	

	
	LoginPage objLogin = new LoginPage(driver);
	HomePage objHome = new HomePage(driver);
	
	
	@Given("^User is on the Login Page of the Bank Application$")
    public void user_is_on_the_login_page_of_the_bank_application() throws Throwable {
        
	    driver.get("http://demo.guru99.com/V4/");	
    }

    @When("^User enters correct user name \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void user_enters_correct_user_name_something_and_password_something(String strArg1, String strArg2) throws Throwable {
        
    	objLogin.login("mngr285669","mYpUnEz");
    }

    @Then("^Verify that manager Id is displayed on the Home Page$")
    public void verify_that_manager_id_is_displayed_on_the_home_page() throws Throwable {
    	
    	String actUserName = objHome.getHomePageDashboardUserName().toLowerCase();
		Assert.assertTrue(actUserName.contains("manger id : mngr285669"));
        
    }

}
