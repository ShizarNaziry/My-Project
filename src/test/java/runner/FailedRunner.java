package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"@rerun/failed_scenario.txt"},
				 glue = "stepDefinition",
				 dryRun=false,
				 plugin= {
						 "pretty",
						 "html:report/cucumber",
						 "json:report/cucumber.json",
						 "rerun:rerun/failed_scenario.txt"},
				 monochrome = true
				 
)

public class FailedRunner {

}
//we created FailedRunner class to run scenarios that fails only
//if we have 10 scenarios after running the TestRunner it shows which scenarios fails in rerun folder and failed_scenario.text
//and we fix them, after fixing we run our FailedRunner class and it will run only scenarios that was failed and check how many of 
//then are fixed and pass . if 5 of scenarios are fixed  and pass the  failedRunner will show fiv remain failed scenarios
//using this class is important because we know where we should fix or which point is wrong 
//the only difference is we add the path for rerun folder and failed_scenario.txt in features instead of feature folder in 
//features