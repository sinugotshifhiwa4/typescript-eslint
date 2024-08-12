import { test } from "../../fixtures/userFixtures";
import ENV from "../utils/env";

test.describe("Login Page Test Suite", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateToUrl(ENV.URL!);
    await loginPage.isHrmLogoPresent();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("Login with valid credentials", async ({ loginPage }) => {
    await test.step("Login with valid credentials", async () => {
      await loginPage.loginToOrangeHrm(ENV.USERNAME!, ENV.PASSWORD!);
      await loginPage.isErrorMessageNotDisplayed();
      await loginPage.isDashboardTabPresent();
    });
  });

  test("Login with invalid credentials", async ({ loginPage }) => {
    await test.step("Login with invalid credentials", async () => {
      await loginPage.loginToOrangeHrm(
        ENV.INVALID_USERNAME!,
        ENV.INVALID_PASSWORD!
      );
      await loginPage.isErrorMessageDisplayed();
    });
  });
});
