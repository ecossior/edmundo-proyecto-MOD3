import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

export class ProfilesPage extends BasePage{

    private whoAreLbl= async (itemName: string) =>  `//font[contains(text(),"${itemName}")] `;
    private createProfileBtn: string = "//h3[contains(@class,'padding--top-6')]";
    private profile = async (name: string) => `//h3[text()='${name}']`; 

    constructor(){
        super();
    }

    async getWhoAreLbl(itemName: string) {        
        return ElementActions.isElementVisible(await this.whoAreLbl(itemName));
    }

    async clickCreateProfile() {        
        await ElementActions.clickElement(this.createProfileBtn);
    }

    async isProfileAdded(name: string) {        
        return ElementActions.isElementVisible(await this.profile(name));
    }

}



