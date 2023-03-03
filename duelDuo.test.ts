
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('what you can choose when the display menu is clicked',async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(300)
    const chooseDiv = await driver.findElement(By.id('choose'))

    expect(chooseDiv).not.toBe('')
})

test('draw a new bot uses a new display', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(300)
   
    const playerDuoDiv = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuoDiv.isDisplayed()

    expect(displayed).toBe(true)
})