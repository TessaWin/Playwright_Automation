import {test,expect} from '@playwright/test'
import {getByPlaceholder} from '@playwright/test'
import {getByRole} from '@playwright/test'
import { text } from 'stream/consumers'
import * as goToTestPage from './steps/goToTestPage.spec.js'

test('Demo Login Test 1', async({page}) => {
    await goToTestPage(page)

    await page.locator('[placeholder="Enter your username"]').fill('Raghav')
    await page.locator('[placeholder="Enter your password"]').fill('1234')

    await page.locator ('text=Sign in').click() 
   
    await page.close()
  
})