import { Builder, By, until } from "selenium-webdriver";
import assert from "assert";

describe("Home Page Test", function () {
  this.timeout(60000);
  let driver;

  before(async () => {
    driver = await new Builder()
      .forBrowser("chrome")
      .build(); // Selenium Manager auto-downloads driver
  });

  after(async () => {
    if (driver) await driver.quit();
  });

  it("Should load the Home Page", async () => {
    await driver.get("http://localhost:5173/");

    // Wait for some main element to load (you can change selector based on your homepage)
    await driver.wait(until.elementLocated(By.css("body")), 10000);

    const content = await driver.findElement(By.css("body")).getText();

    console.log("Home Page Loaded Successfully!");

    assert.ok(content.length > 0, "Home Page content is empty!");
  });
});
