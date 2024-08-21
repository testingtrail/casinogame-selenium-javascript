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
const chai_1 = require("chai");
// This example is without mocha, chai, or any other assertion library
(function SpinTest() {
    return __awaiter(this, void 0, void 0, function* () {
        let driver = yield new selenium_webdriver_1.Builder().forBrowser('chrome').build();
        try {
            // passing the driver to the search page which creates it
            // in base page and uses it in search page
            let gamePage = new GamePage_1.GamePage(driver);
            yield gamePage.navigate('https://www.freeslots.com/');
            driver.manage().window().maximize();
            // create an explicit wait for game thumb to be visible
            yield driver.wait(selenium_webdriver_1.until.elementIsVisible(yield gamePage.findElement(selenium_webdriver_1.By.css('a.game img[alt="Treasures of Egypt"]'))));
            yield gamePage.clickElement(selenium_webdriver_1.By.css('a.game img[alt="Treasures of Egypt"]'));
            // create an explicit wait for the canvas to be enabled
            yield driver.wait(selenium_webdriver_1.until.elementIsEnabled(yield gamePage.findElement(selenium_webdriver_1.By.id('canvas'))));
            let canvas = yield gamePage.findElement(selenium_webdriver_1.By.id('canvas'));
            // save the Base64 of canvas before
            let canvas_before = yield canvas.takeScreenshot(true);
            const actions = driver.actions({ async: true });
            yield actions.move({ origin: canvas, duration: 200, x: (yield gamePage.setButtonDistance(canvas, 155, 140)).x, y: (yield gamePage.setButtonDistance(canvas, 155, 140)).y }).click().perform();
            yield driver.actions().clear();
            // save the Base64 of canvas after
            let canvas_after = yield canvas.takeScreenshot(true);
            yield driver.sleep(5000);
            // compare the canvas did change
            (0, chai_1.expect)(canvas_before).to.not.equal(canvas_after);
        }
        catch (e) {
            console.error(e);
        }
        finally {
            yield driver.quit();
        }
    });
})();
