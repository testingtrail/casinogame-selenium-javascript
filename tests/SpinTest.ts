// Author: TestingTrail. 2024.

import { Builder, until, By, WebDriver, WebElement } from 'selenium-webdriver';
import { GamePage } from '../pages/GamePage';
import { expect } from 'chai';

// This example is without mocha, chai, or any other assertion library

(async function SpinTest(): Promise<void> {
  let driver: WebDriver = await new Builder().forBrowser('chrome').build();
  try {
    // passing the driver to the search page which creates it
    // in base page and uses it in search page
    let gamePage = new GamePage(driver);
    await gamePage.navigate('https://www.freeslots.com/');

    driver.manage().window().maximize();


    // create an explicit wait for game thumb to be visible
    await driver.wait(until.elementIsVisible(await gamePage.findElement(By.css('a.game img[alt="Treasures of Egypt"]'))));
    await gamePage.clickElement(By.css('a.game img[alt="Treasures of Egypt"]'));

    // create an explicit wait for the canvas to be enabled
    await driver.wait(until.elementIsEnabled(await gamePage.findElement(By.id('canvas'))));
    let canvas:WebElement = await gamePage.findElement(By.id('canvas'));

    // save the Base64 of canvas before
    let canvas_before: string = await canvas.takeScreenshot(true);
    

   const actions = driver.actions({async: true});
   await actions.move({origin: canvas, duration:200, x:(await gamePage.setButtonDistance(canvas, 155, 140)).x,y:(await gamePage.setButtonDistance(canvas, 155, 140)).y}).click().perform();
   await driver.actions().clear();

   // save the Base64 of canvas after
   let canvas_after: string = await canvas.takeScreenshot(true);

   await driver.sleep(5000);

   // compare the canvas did change
   expect(canvas_before).to.not.equal(canvas_after);

  } catch(e){
    console.error(e);
  } finally {
    await driver.quit();
  }
})();