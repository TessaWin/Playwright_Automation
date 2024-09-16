import {test,expect} from '@playwright/test'
import {getByPlaceholder} from '@playwright/test'
import {getByRole} from '@playwright/test'
import { text } from 'stream/consumers'

test('verificationOfElements Test', async({page}) => {
    await page.goto('https://demo.applitools.com/')

    await page.locator('[placeholder="Enter your username"]').fill('Tereza')
    await page.locator('[placeholder="Enter your password"]').fill('1234')
   
    await page.locator ('text=Sign in').click()

    // verification of elements on the left sidebar
    await expect(page.getByText('Jack Gomez')).toBeVisible()
    await expect(page.getByText('Card types')).toBeVisible()

    await expect(page.getByRole('link', { name: 'Credit cards' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Debit cards' })).toBeVisible()
    
    await expect(page.getByText('lending')).toBeVisible()
    await expect(page.getByRole('link', { name: 'Loans' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Mortgages' })).toBeVisible()

    await page.close()
  
})