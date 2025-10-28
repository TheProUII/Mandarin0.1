from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Go to the homepage
    page.goto("http://localhost:3000")

    # Expect a title "to contain" a substring.
    expect(page).to_have_title("Типография Мандарин")

    # Click the "Рассчитать стоимость" button
    get_started = page.get_by_role("link", name="Рассчитать стоимость")
    get_started.click()

    # Expects page to have a heading with the name of Запросить расчет.
    expect(page.get_by_role("heading", name="Запросить расчет")).to_be_visible()

    # Fill out the form
    page.get_by_label("Ваше имя").fill("Тестовый Пользователь")
    page.get_by_label("Email").fill("test@example.com")
    page.get_by_label("Телефон").fill("+79998887766")
    page.get_by_label("Опишите ваш заказ").fill("Тестовый заказ визиток")

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
