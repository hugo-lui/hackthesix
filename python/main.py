import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service

service = Service()
options = Options()
options.add_argument('--disable-blink-features=AutomationControlled')
driver = webdriver.Chrome(service=service, options=options)

driver.get("https://www.ticketmaster.ca/pnk-trustfall-tour-vancouver-british-columbia-10-20-2023/event/11005E4C87B41015")
time.sleep(10)

ticketButton = driver.find_element(By.XPATH, '//*[@id="quickpicks-listings"]/ul/li[2]')
ticketButton.click()
time.sleep(10)

nextButton = driver.find_element(By.XPATH, '//*[@id="ismqp-template-left"]/div[1]/div/div[2]/div/div[2]/div/div[2]/button')
nextButton.click()
time.sleep(10)

cardButton = driver.find_element(By.XPATH, '//*[@id="stored-wallet-items-form"]/li/button')
cardButton.click()
time.sleep(10)


driver.quit()