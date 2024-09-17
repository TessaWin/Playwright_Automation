import {test,expect} from '@playwright/test'
import {getByPlaceholder} from '@playwright/test'
import {getByRole} from '@playwright/test'
import { text } from 'stream/consumers'

test('getAttributeValue Test', async({page}) => {
    await page.goto('https://demo.applitools.com/')
    await expect(page).toHaveURL('https://demo.applitools.com/')

    await page.locator('[placeholder="Enter your username"]').fill('Tereza')
    await expect(page.locator('input[placeholder="Enter your username"]')).toHaveValue('Tereza')

    await page.locator('[placeholder="Enter your password"]').fill('1234')
    await expect(page.locator('input[placeholder="Enter your password"]')).toHaveValue('1234')
   
    await page.locator ('text=Sign in').click()
    await expect(page.getByText('Jack Gomez')).toBeVisible()

})