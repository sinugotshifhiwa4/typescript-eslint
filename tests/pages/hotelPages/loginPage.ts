import { Locator, Page } from "@playwright/test";
import BasePage from "../basePage";


export class LoginPage extends BasePage {

    readonly page: Page;
    private readonly usernameTextBox: Locator;
    private readonly passwordTextBox: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;
    private readonly hrmLogo: Locator;
    private readonly dashboardTab: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.usernameTextBox = page.locator(`input[name='username']`);
        this.passwordTextBox = page.locator(`input[name='password']`);
        this.loginButton = page.locator(`button[type='submit']`);
        this.errorMessage = page.locator(`div[class='oxd-alert oxd-alert--error']`);
        this.hrmLogo = page.locator(`img[alt='company-branding']`);
        this.dashboardTab = page.locator(`//span[text()='Dashboard']`);
    }

    async fillUsername(username: string) {
        await this.clearElement(this.usernameTextBox);
        await this.fillElement(this.usernameTextBox, username);
    }

    async fillPassword(password: string) {
        await this.clearElement(this.passwordTextBox);
        await this.fillElement(this.passwordTextBox, password);
    }

    async clickLoginButton(){
        await this.clickElement(this.loginButton);
    }

    async isErrorMessageDisplayed() {
        await this.verifyElementIsVisible(this.errorMessage);
    }

    async isErrorMessageNotDisplayed() {
        await this.verifyElementIsNotVisible(this.errorMessage);
    }

    async isHrmLogoPresent() {
        await this.verifyElementIsVisible(this.hrmLogo);
    }


    async isDashboardTabPresent() {
        await this.verifyElementIsVisible(this.dashboardTab);
    }

    async loginToOrangeHrm(username: string, password: string) {
        await this.fillUsername(username);  
        await this.fillPassword(password);
        await this.clickLoginButton();
    }
}