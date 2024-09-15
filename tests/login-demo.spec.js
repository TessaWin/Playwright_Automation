import {test,expect} from '@playwright/test'
import {getByPlaceholder} from '@playwright/test'
import {getByRole} from '@playwright/test'
import { text } from 'stream/consumers'

test('Demo Login Test 1', async({page}) => {
    await page.goto('https://demo.applitools.com/')

    await page.locator('[placeholder="Enter your username"]').fill('Raghav')
    await page.locator('[placeholder="Enter your password"]').fill('1234')

    await page.locator ('text=Sign in').click() 
   
    await page.close()
  
})