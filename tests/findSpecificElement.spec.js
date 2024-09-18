import {test,expect} from '@playwright/test'
import {getByPlaceholder} from '@playwright/test'
import {getByRole} from '@playwright/test'
import { text } from 'stream/consumers'

test('Find specific element Test', async({page}) => {
    const testPage = 'https://www.idnes.cz/'
    const popUp = 'Souhlasím a pokračovat' 
    const element = await page.$(popUp)
   
    await page.goto(testPage)
    if (element) {
        await element.click()
        expect (page.toHaveURL(testPage))
    }
})