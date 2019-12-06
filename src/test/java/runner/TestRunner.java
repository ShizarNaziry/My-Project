package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = ".",//writing this and "feature" is the same but for failed runner we use this
				 glue = "stepDefinition",
				 dryRun=false,
				 plugin= {
						 "pretty",
						 "html:report/cucumber",
						 "json:report/cucumber.json",
						 "rerun:rerun/failed_scenario.txt"},//this is added for rerun or FailedRunner or failed_scenario.txt
				 monochrome = true,
						 tags = {"@smoke"}
				 
)

public class TestRunner {

}
