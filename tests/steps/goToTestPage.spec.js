import {test,expect} from '@playwright/test'

test('Go to test page', async({page}) => {
   await page.goto('https://saucedemo.com/')
   })

