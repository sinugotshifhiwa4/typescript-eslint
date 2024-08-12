import { Locator, Page, expect } from "@playwright/test";

export default class BasePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToUrl(url: string) {
        await this.page.goto(url);
    }

    async fillElement(element: Locator, value: string) {
        await element.fill(value);
    }

    async clickElement(element: Locator) {
        await element.click();
    }

    async clearElement(element: Locator) {
        await element.clear();
    }

    async verifyElementIsVisible(element: Locator) {
        await expect(element).toBeVisible();
    }

    async verifyElementIsNotVisible(element: Locator) {
        await expect(element).not.toBeVisible();
    }

    async waitForElementToBeVisible(element: Locator) {
        await element.waitFor({ state: "visible" });
    }
}