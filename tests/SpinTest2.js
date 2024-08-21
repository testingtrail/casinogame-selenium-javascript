"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const GamePage_1 = require("../pages/GamePage");
// This example is using mocha
describe('Check slot game', function () {
    this.timeout(60000); // Increase timeout for asynchronous tests
    let driver;
    let gamePage;
    // before the test
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            driver = yield new selenium_webdriver_1.Builder().forBrowser('chrome').build();
            gamePage = new GamePage_1.GamePage(driver);
        });
    });
    it('should check a slot game that uses API', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield gamePage.navigate('https://www.penny-slot-machines.com/free-slots.html');
            driver.manage().window().maximize();
            // create an explicit wait for game thumb to be visible
            yield driver.wait(selenium_webdriver_1.until.elementIsVisible(yield gamePage.findElement(selenium_webdriver_1.By.css('div a img[alt="Davinci Diamonds Slots"]'))));
            yield gamePage.clickElement(selenium_webdriver_1.By.css('div a img[alt="Davinci Diamonds Slots"]'));
            // Locate the iframe and switch to it
            let iframeElement = yield driver.findElement(selenium_webdriver_1.By.xpath('(//iframe[@title="Play"])[1]'));
            yield driver.switchTo().frame(iframeElement);
            // click to play for free
            yield driver.wait(selenium_webdriver_1.until.elementIsVisible(yield gamePage.findElement(selenium_webdriver_1.By.css('p[class="button"] a'))));
            yield gamePage.clickElement(selenium_webdriver_1.By.css('p[class="button"] a'));
            // there are a lot of iframes to switch to
            yield driver.switchTo().frame(driver.findElement(selenium_webdriver_1.By.css('div#m3 iframe[src*="ogs-gl-usnj.nyxop.net"]')));
            yield driver.sleep(2000);
            yield driver.switchTo().frame(driver.findElement(selenium_webdriver_1.By.css('iframe[name="gameFrame"]')));
            yield driver.sleep(2000);
            yield driver.switchTo().frame(driver.findElement(selenium_webdriver_1.By.css('iframe[id="gameiframe"]')));
            yield driver.sleep(2000);
            yield driver.switchTo().frame(driver.findElement(selenium_webdriver_1.By.css('iframe[id="game"]')));
            yield driver.wait(selenium_webdriver_1.until.elementIsVisible(yield gamePage.findElement(selenium_webdriver_1.By.css('canvas'))));
            let canvas = yield gamePage.findElement(selenium_webdriver_1.By.css('canvas'));
            const actions = driver.actions({ async: true });
            yield actions.move({ origin: canvas, duration: 200, x: 0, y: 170 }).click().perform();
            yield driver.sleep(3000);
            // now that we have enter the game press to spin
            yield actions.move({ origin: canvas, duration: 200, x: 0, y: 170 }).click().perform();
            yield driver.actions().clear();
            yield driver.sleep(5000);
        });
    });
    // finally quit the driver
    after(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield driver.quit();
        });
    });
});
