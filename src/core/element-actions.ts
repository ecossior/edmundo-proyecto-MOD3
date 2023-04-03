import { driverInstance } from "./driver";

export class ElementActions {
    
    static async clickElement(locator: string) {
        await driverInstance.Page.click(locator);
    }

    static async fillElement(locator: string, value: string) {
        await driverInstance.Page.fill(locator, value);
    }

    static async isElementVisible(element: string) {
        await driverInstance.Page.waitForTimeout(2000);
        return await driverInstance.Page.isVisible(element, {
            timeout: 10000
        });
    }
   
}