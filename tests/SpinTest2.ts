// Author: TestingTrail. 2024.

import { Builder, until, By, WebDriver, WebElement, logging } from 'selenium-webdriver';
import { GamePage } from '../pages/GamePage';
import chrome from 'selenium-webdriver/chrome';
import { expect } from 'chai';

// This example is using mocha
describe('Check slot game', function() {

  this.timeout(60000); // Increase timeout for asynchronous tests
  let driver:WebDriver;
  let gamePage:GamePage;

  // before the test
  before(async function() {

    driver = await new Builder().forBrowser('chrome').build(); 
    gamePage = new GamePage(driver);
  });

  it('should check a slot game that uses API', async function() {
    await gamePage.navigate('https://www.penny-slot-machines.com/free-slots.html');
    driver.manage().window().maximize();


    // create an explicit wait for game thumb to be visible
    await driver.wait(until.elementIsVisible(await gamePage.findElement(By.css('div a img[alt="Davinci Diamonds Slots"]'))));
    await gamePage.clickElement(By.css('div a img[alt="Davinci Diamonds Slots"]'));


    // Locate the iframe and switch to it
    let iframeElement = await driver.findElement(By.xpath('(//iframe[@title="Play"])[1]'));
    await driver.switchTo().frame(iframeElement);


    // click to play for free
    await driver.wait(until.elementIsVisible(await gamePage.findElement(By.css('p[class="button"] a'))));
    await gamePage.clickElement(By.css('p[class="button"] a'));

    // there are a lot of iframes to switch to

    await driver.switchTo().frame(driver.findElement(By.css('div#m3 iframe[src*="ogs-gl-usnj.nyxop.net"]')));
    await driver.sleep(2000);
    await driver.switchTo().frame(driver.findElement(By.css('iframe[name="gameFrame"]')));
    await driver.sleep(2000);
    await driver.switchTo().frame(driver.findElement(By.css('iframe[id="gameiframe"]')));
    await driver.sleep(2000);
    await driver.switchTo().frame(driver.findElement(By.css('iframe[id="game"]')));
    

    await driver.wait(until.elementIsVisible(await gamePage.findElement(By.css('canvas'))));
    let canvas:WebElement = await gamePage.findElement(By.css('canvas'));
    
    const actions = driver.actions({async: true});
    await actions.move({origin: canvas, duration:200, x:0,y:170}).click().perform();
    await driver.sleep(3000);

    // now that we have enter the game press to spin
    await actions.move({origin: canvas, duration:200, x:0,y:170}).click().perform();
    await driver.actions().clear();

    await driver.sleep(5000);

  });

  // finally quit the driver
  after(async function() {
    await driver.quit();
  });
});