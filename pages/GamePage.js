"use strict";
// This is the search page, which extends the BasePage class and
// contains methods that are specific to the search page.
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
exports.GamePage = void 0;
const BasePage_1 = require("./BasePage");
// extending search page from base page
class GamePage extends BasePage_1.BasePage {
    setButtonDistance(ele, first, second) {
        return __awaiter(this, void 0, void 0, function* () {
            // Calculate the center of the canvas
            // 155 and 140 are the distances from the edge of the canvas to the button
            let xCoord = Math.floor(((yield ele.getRect()).width / 2) - first);
            let yCoord = Math.floor(((yield ele.getRect()).height / 2) - second);
            console.log('coordenadas: ', xCoord, yCoord);
            // Now we measure the distance from the edge of the canvas 
            // to the button both horizontally and vertically
            // to know how much we have to move to reach the button
            // from the center of the canvas
            return { x: xCoord, y: yCoord };
        });
    }
}
exports.GamePage = GamePage;
