import puppeteer from "puppeteer";

let browser;
let page;
beforeAll(async () => {
  jest.setTimeout(300000);
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 150,
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  await page.waitForSelector(".Event");
});

afterAll(() => {
  browser.close();
});

describe("show/hide an event details", () => {
  test("An event element is collapsed by default", async () => {
    await expect(page.$(".Event .EventDetails")).resolves.toBe(null);
    await expect(page.$(".showLess")).resolves.toBe(null);
  });
  test("User can expand an event to see its details and the Show less Button", async () => {
    await page.click(".Event .showMore");
    const eventDetails = await page.$(".EventDetails");
    const showLessButton = await page.$(".showLess");

    expect(eventDetails).toBeDefined();
    expect(showLessButton).toBeDefined();
  });

  test("User can collapse an event to hide its details", async () => {
    await page.click(".Event .showLess");
    await expect(page.$(".EventDetails")).resolves.toBe(null);
  });
});
