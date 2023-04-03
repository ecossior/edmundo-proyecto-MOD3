import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

export class ProfilePage extends BasePage{

    private nameTxt: string = "#addProfile";
    private saveBtn: string = "//button[@aria-label='GUARDAR']";    
    private avatarProfile = async (name: string) => `//a[@data-testid="${name}"]`;
    
    constructor(){
        super();
    }

    async selectAvatar(name: string) {        
        await ElementActions.clickElement(await this.avatarProfile(name));
    }

    async setProfileName(name: string) {        
        await ElementActions.fillElement(this.nameTxt, name);
    }

    async clickSave() {        
        await ElementActions.clickElement(this.saveBtn);
    }
    
}
