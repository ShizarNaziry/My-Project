package stepDefinition;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import Utitlities.BaseClass;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;

public class AccountTest extends BaseClass {
	@Then("^I create Account$")
	public void i_create_Account(DataTable AccountDetails) throws InterruptedException {
		List<Map<String, String>> maps = AccountDetails.asMaps(String.class, String.class);
		for (Map<String, String> map : maps) {
			driver.findElement(By.linkText("Accounts")).click();
			driver.findElement(By.xpath("//input[@value=' New ']")).click();
			driver.findElement(By.id("acc2")).sendKeys(map.get("Account Name"));
			String parentWindow = driver.getWindowHandle();
			System.out.println(parentWindow);
			driver.findElement(By.xpath("//img[@class='lookupIcon']")).click();
			Set<String> childWindow = driver.getWindowHandles();
			int number = childWindow.size();
			System.out.println(number);
			String url = driver.getCurrentUrl();
			System.out.println(url);
			Iterator<String> num = childWindow.iterator();
			while (num.hasNext()) {
				String subPage = num.next();
				if (!parentWindow.equals(subPage)) {
					driver.switchTo().window(subPage);
					driver.switchTo().frame(0);
					Thread.sleep(2000);
					driver.findElement(By.xpath("//input[@type='text']")).sendKeys(map.get("Parent Account"));
					driver.findElement(By.name("go")).click();
					Thread.sleep(2000);
					driver.switchTo().defaultContent();
					driver.switchTo().frame("resultsFrame");
					List<WebElement> cells = driver
							.findElements(By.xpath("//div[@class='pbBody']//tbody//tr//th[@scope='row']"));
					for (WebElement eachCell : cells) {
						String parentAccountName = eachCell.getText();
						System.out.println(parentAccountName);
						if (parentAccountName.contains(map.get("Parent Account"))) {
							driver.findElement(By.xpath("//th[@scope='row']//a")).click();
							break;
						}
					}
					driver.switchTo().window(parentWindow);
				}
			}
			driver.findElement(By.id("acc5")).sendKeys(map.get("Account Number"));
			driver.findElement(By.id("acc23")).sendKeys(map.get("Account Site"));
			WebElement type = driver.findElement(By.id("acc6"));
			Select accType = new Select(type);
			accType.selectByVisibleText(map.get("Type"));
			WebElement industry = driver.findElement(By.id("acc7"));
			Select accIndustry = new Select(industry);
			accIndustry.selectByVisibleText(map.get("Industry"));
			driver.findElement(By.id("acc8")).sendKeys(map.get("Annual Revenue"));
			WebElement rating = driver.findElement(By.id("acc9"));
			Select accRating = new Select(rating);
			accRating.selectByVisibleText(map.get("Rating"));
			driver.findElement(By.id("acc10")).sendKeys(map.get("Phone"));
			driver.findElement(By.id("acc11")).sendKeys(map.get("Fax"));
			driver.findElement(By.id("acc12")).sendKeys(map.get("Website"));
			driver.findElement(By.id("acc13")).sendKeys(map.get("Ticker Symbol"));
			WebElement ownership = driver.findElement(By.id("acc14"));
			Select accOwnership = new Select(ownership);
			accOwnership.selectByVisibleText(map.get("Ownership"));
			driver.findElement(By.id("acc15")).sendKeys(map.get("Employees"));
			driver.findElement(By.id("acc16")).sendKeys(map.get("SIC Code"));
			driver.findElement(By.id("acc17street")).sendKeys(map.get("Billing Street"));
			driver.findElement(By.id("acc17city")).sendKeys(map.get("Billing City"));
			driver.findElement(By.id("acc17state")).sendKeys(map.get("Billing State/Province"));
			driver.findElement(By.id("acc17zip")).sendKeys(map.get("Billing Zip/Postal Code"));
			driver.findElement(By.id("acc17country")).sendKeys(map.get("Billing Country"));
			WebElement priority = driver.findElement(By.id("00N2E00000D7LOz"));
			Select accPriority = new Select(priority);
			accPriority.selectByVisibleText(map.get("Customer Priority"));
			driver.findElement(By.id("00N2E00000D7LP2")).click();
			WebElement monthPicker = driver.findElement(By.id("calMonthPicker"));
			Select accMonthPicker = new Select(monthPicker);
			accMonthPicker.selectByVisibleText(map.get("Month"));
			WebElement yearPicker = driver.findElement(By.id("calYearPicker"));
			Select accYearPicker = new Select(yearPicker);
			accYearPicker.selectByVisibleText(map.get("Year"));
			List<WebElement> dates = driver
					.findElements(By.xpath("//table[@class='calDays']//tbody//tr[@class='calRow']//td"));
			for (WebElement cells : dates) {
				String eachCell = cells.getText();
				System.out.println(eachCell);
				if (eachCell.contains(map.get("Day"))) {
					cells.click();
					break;

				}
			}
			driver.findElement(By.id("00N2E00000D7LP0")).sendKeys(map.get("Number of Locations"));
			WebElement active = driver.findElement(By.id("00N2E00000D7LOy"));
			Select accActive = new Select(active);
			accActive.selectByVisibleText(map.get("Active"));
			driver.findElement(By.id("00N2E00000D7LP3")).sendKeys(map.get("SLA Serial Number"));
			driver.findElement(By.id("acc20")).sendKeys(map.get("Description"));
			driver.findElement(By.xpath("//input[@value=' Save ']")).click();

		}
	}

	@Then("^I ignore the error and save$")
	public void i_ignore_the_error_and_save() throws InterruptedException {
		driver.findElement(By.xpath("//input[@value='Save (Ignore Alert)']")).click();
		Thread.sleep(2000);
	}
}
