import { test, expect } from '@playwright/test'

test('Go to test page', async({page}) => {
    await page.goto('https://saucedemo.com/')
   
    await page.locator('[placeholder="Username"]').fill('standard_user')
    await page.locator('[placeholder="Password"]').fill('secret_sauce')

    await page.locator ('text=Login').click() 
  
    //await expect(page).toHaveURL(/inventory/)
    await page.waitForURL('**/inventory.html')
    await page.waitForTimeout(2000)
}) 