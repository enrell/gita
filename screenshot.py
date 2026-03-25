from playwright.sync_api import sync_playwright
import time

with sync_playwright() as p:
    # Try to launch with system's chromium
    try:
        browser = p.chromium.launch(channel='chromium')
    except:
        browser = p.chromium.launch()

    page = browser.new_page(viewport={'width': 1920, 'height': 1080})
    page.goto('http://localhost:4321')
    page.wait_for_load_state('networkidle')

    # Wait for animations
    time.sleep(2)

    # Screenshot of hero section
    page.screenshot(path='/home/kokoro/Projects/gita/site-preview.png')
    print("Screenshot 1: Hero section salva")

    # Scroll to second section and screenshot
    page.evaluate("window.scrollTo(0, window.innerHeight)")
    time.sleep(1)
    page.screenshot(path='/home/kokoro/Projects/gita/site-section2.png')
    print("Screenshot 2: Segunda seção salva")

    # Test side nav hover - move mouse to right edge (trigger area)
    page.mouse.move(1850, 500)
    time.sleep(1)
    page.screenshot(path='/home/kokoro/Projects/gita/site-sidenav-hover.png')
    print("Screenshot 3: Side nav hover salva")

    browser.close()
    print("Todas as screenshots salvas!")
