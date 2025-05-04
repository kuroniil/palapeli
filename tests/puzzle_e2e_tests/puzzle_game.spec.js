const { describe, test, expect, beforeEach } = require('@playwright/test')
const url = 'http://localhost:5173'

describe('Puzzle game', () => {
    beforeEach(async ({ page }) => {
        await page.goto(url)
    })

    test('Opening the app', async ({ page }) => {
        const mainHeader = page.getByText('Main Menu')
        await expect(mainHeader).toBeVisible()
    })

    test('Starting a puzzle game', async ({ page }) => {
        await page.getByRole('button', { name: 'puzzle' }).click()
        const mainHeader = page.getByText('pala_peli')
        await expect(mainHeader).toBeVisible()
    })

    test('Solving a puzzle game and saving the score', async ({ page }) => {
        await page.getByRole('button', { name: 'puzzle' }).click()
        await page.getByText('15').click()
        const puzzleSolvedAlert = page.getByText('4x4 Grid Completed')
        await expect(puzzleSolvedAlert).toBeVisible()
        await page.getByRole('textbox').first().fill('testi')
        await page.getByRole('button', { name: 'submit' }).click()
        const scoreSubmittedAlert = page.getByText('Score submitted!')
        await expect(scoreSubmittedAlert).toBeVisible()
    })
})
