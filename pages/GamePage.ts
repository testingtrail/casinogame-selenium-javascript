// This is the search page, which extends the BasePage class and
// contains methods that are specific to the search page.
// Author: TestingTrail. 2024.

import { WebElement } from 'selenium-webdriver';
import { BasePage } from './BasePage';

// extending search page from base page
class GamePage extends BasePage {
    async setButtonDistance(ele:WebElement, first:number, second:number): Promise<{ x: number; y: number }> {
        // Calculate the center of the canvas
        // 155 and 140 are the distances from the edge of the canvas to the button
        let xCoord = Math.floor(((await ele.getRect()).width / 2)-first);
        let yCoord = Math.floor(((await ele.getRect()).height / 2)-second);

        console.log('coordenadas: ', xCoord, yCoord);

        // Now we measure the distance from the edge of the canvas 
        // to the button both horizontally and vertically
        // to know how much we have to move to reach the button
        // from the center of the canvas
        return { x: xCoord, y: yCoord };
    }

}

export{ GamePage };

