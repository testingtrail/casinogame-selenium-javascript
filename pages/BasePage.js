"use strict";
// This is the base page for teh framework, which contains
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
exports.BasePage = void 0;
// common methods that can be used across all pages.
class BasePage {
    constructor(driver) {
        this.driver = driver;
        driver.manage().setTimeouts({ implicit: 25000 });
    }
    // function to navigate to any URL
    navigate(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.get(url);
        });
    }
    // function to find any element, by sending locator
    findElement(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driver.findElement(locator);
        });
    }
    // function to click on any element, by sending locator
    clickElement(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findElement(locator).then((element) => element.click());
        });
    }
    // function to type on any text, by sending locator and text
    typeText(locator, text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findElement(locator).then((element) => {
                element.clear();
                element.sendKeys(text);
            });
        });
    }
}
exports.BasePage = BasePage;
