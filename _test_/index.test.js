/* eslint-env jest*/
const puppeteer = require('puppeteer');
const timeout = 60000;
jest.setTimeout(timeout);

describe('Test index page:', () => {
    it('Index Page is opened:', async () => {

        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto('https://testing-worlde-game.azurewebsites.net/')

        //await expect(page.title()).resolves.toMatch('Login');
        await browser.close();
    })
    it("Login button reverts to Home Page:", async () => {

        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto('https://testing-worlde-game.azurewebsites.net/')

        //await page.click('[name="login"]');

        //await expect(page.title()).resolves.toMatch('Home');
        await browser.close();
    })
})