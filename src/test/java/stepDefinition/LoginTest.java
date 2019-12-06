package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;

import Utitlities.BaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTest extends BaseClass {

	@Given("^I open chrome browser$")
	public void i_open_chrome_browser() {
		openBrower();
	}

	@Given("^I go to salesforce home page$")
	public void i_go_to_salesforce_home_page() {
		openingSalesforce();
	}

	@Given("^I enter username$")
	public void i_enter_username() {
		driver.findElement(By.id("username")).sendKeys("test.user@gmail.com.test");

	}

	@Given("^I enter password$")
	public void i_enter_password() {
		driver.findElement(By.id("password")).sendKeys("Welcome1");
	}

	@When("^I click the login button$")
	public void i_click_the_login_button() {
		driver.findElement(By.id("Login")).click();
	}

	@Then("^I see the dashboard$")
	public void i_see_the_dashboard() {
		boolean isNameDisplayed = driver.findElement(By.id("userNavLabel")).isDisplayed();
		Assert.assertTrue(isNameDisplayed);
	}

	@Then("^I quit the browser$")
	public void i_quit_the_browser1() {
		tearDown();

	}

	@Given("^I enter ivalid username$")
	public void i_enter_ivalid_username() {
		driver.findElement(By.id("username")).sendKeys("abc.com");
	}

	@Given("^I enter invalid password$")
	public void i_enter_invalid_password() {
		driver.findElement(By.id("password")).sendKeys("and");

	}

	@When("^Iclick on login button$")
	public void iclick_on_login_button() {
		driver.findElement(By.id("Login")).click();
	}

	@Then("^I should not be able to login$")
	public void i_should_not_be_able_to_login() {
		boolean errorDisplayed = driver.findElement(By.id("error")).isDisplayed();
		Assert.assertTrue(errorDisplayed);
	}

}
