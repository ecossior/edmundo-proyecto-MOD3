import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage{
    
    private initialSessionBtn: string = "//nav[@class='nav pre-sticky']//a[@data-testid='log_in_header']";    
    private emailTxt: string = "#email";
    private continueBtn: string = "//button[@name='dssLoginSubmit']";
    private passwordTxt: string = "#password";
    private passwordContinueLoginBtn: string = "#password-continue-login";    

    constructor(){
        super();
    }

    async clickInitialButton() {                
        await ElementActions.clickElement(this.initialSessionBtn);
    }

    async setEmail(text: string) {        
        await ElementActions.fillElement(this.emailTxt, text);        
    }

    async clickContinue() {
        await ElementActions.clickElement(this.continueBtn);
    }

    async setPassword(text: string) {        
        await ElementActions.fillElement(this.passwordTxt, text);
    }

    async clickContinueLogin() {        
        await ElementActions.clickElement(this.passwordContinueLoginBtn);
    }

    async Login(email: string, password: string) {
        await this.clickInitialButton()
        await this.setEmail(email);
        await this.clickContinue()
        await this.setPassword(password);
        await this.clickContinueLogin()
    }
}
