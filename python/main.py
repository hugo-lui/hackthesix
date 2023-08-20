import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver import Keys, ActionChains
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service

service = Service()
options = Options()
options.add_argument('--disable-blink-features=AutomationControlled')
driver = webdriver.Chrome(service=service, options=options)

driver.get("https://api.bestbuy.com/click/-/6540001/cart")
time.sleep(5)

checkoutButton = driver.find_element(By.XPATH, '//*[@id="cartApp"]/div[2]/div/div[1]/div/div[1]/div[1]/section[2]/div/div/div[4]/div/div[1]/button')
checkoutButton.click()
time.sleep(5)

guestButton = driver.find_element(By.XPATH, '/html/body/div[1]/div/section/main/div[2]/div/div/div[4]/div/div[2]/button')
guestButton.click()
time.sleep(5)

firstName = driver.find_element(By.XPATH, '//*[@id="firstName"]')
ActionChains(driver)\
        .send_keys_to_element(firstName, "first")\
        .perform()

'''lastName = driver.find_element(By.ID, "lastName")
lastName.click
ActionChains(driver)\
        .send_keys_to_element(lastName, "last")\
        .perform()
time.sleep(5)

address = driver.find_element(By.ID, "street")
address.click
ActionChains(driver)\
        .send_keys_to_element(address, "788 Elm Drive")\
        .perform()
time.sleep(5)

city = driver.find_element(By.ID, "city")
city.click
ActionChains(driver)\
        .send_keys_to_element(city, "New Haven")\
        .perform()
time.sleep(5)

state = driver.find_element(By.ID, "state")
state.click
ActionChains(driver)\
        .send_keys_to_element(city, "CT")\
        .perform()
time.sleep(5)'''

driver.quit()