// This is the base page for teh framework, which contains
// Author: TestingTrail. 2024.

import { By, WebDriver, WebElement } from "selenium-webdriver";

// common methods that can be used across all pages.
class BasePage {
    // since using Typescript, we need to declare the driver as a private property
    private driver: WebDriver;

    constructor(driver: WebDriver) {
      this.driver = driver;
      driver.manage().setTimeouts({ implicit: 25000 });
    }
  
    // function to navigate to any URL
    async navigate(url:string): Promise<void> {
      await this.driver.get(url);
    }
  
    // function to find any element, by sending locator
    async findElement(locator: By) {
      return await this.driver.findElement(locator);
    }
  
    // function to click on any element, by sending locator
    async clickElement(locator: By) {
      await this.findElement(locator).then((element) => element.click());
    }
  
    // function to type on any text, by sending locator and text
    async typeText(locator: By, text: string) {
      await this.findElement(locator).then((element) => {
        element.clear();
        element.sendKeys(text);
      });
    }
  }

  // { } is ES6 shorthand
  // It creates an object with a property named BasePage that 
  // references the BasePage class, since BasePage is a class
  // this allows other files to create new instances of the BasePage class
  export{ BasePage };