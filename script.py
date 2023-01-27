from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options


# Cockpit credentials
username = "pawantomar"
password = "pawan@1234"
NAME = "name"
TAG_NAME = "tag name"

# initialize the Chrome driver
chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
#driver = webdriver.Chrome('/home/<user>/chromedriver',chrome_options=chrome_options)
driver = webdriver.Chrome("chromedriver",chrome_options=chrome_options)
#driver.find_element_by_id("login_field").send_keys(username)
# head to cockpit login page
driver.get("http://localhost:8082/login")
#driver.find_element_by_name("username").send_keys(username)
driver.find_element("name", "username").send_keys(username)
#driver.find_element_by_name("password").send_keys(password)
driver.find_element("name", "password").send_keys(password)
# find password input field and insert password as well
#driver.find_element_by_id("password").send_keys(password)
# click login button
#driver.find_elements_by_xpath("/html/body/app-root/div/app-login/div[1]/div[1]/div[3]/div/button").click()
#driver.find_element("xpath", "/html/body/div/div/div/div[2]/form/button").click()
# wait the ready state to be complete
WebDriverWait(driver=driver, timeout=5).until(
    lambda x: x.execute_script("return document.readyState === 'complete'")
)
#WebDriverWaitWsait= WebDriverWait(driver=driver, timeout= 20)
#element1 = WebDriverWait(driver, 10).until(EC.presence_of_element_located(("xpath", '/html/body/app-root/app-alert/div')))
#print(driver.find_element(By.TAG_NAME, 'app-alert').get_attribute('textContent'))
#/html/body/div[2]/div/nav/div/div/div[2]/ul/li[5]
#working: /html/body/div/div/div/div[3]/a/button
try:
  #element2 = WebDriverWait(driver, 10).until(EC.presence_of_element_located(("xpath", "/html/body/div[2]/div/nav/div/div/div[2]/ul/li[5]")))
  #element2 = WebDriverWait(driver, 10).until(EC.presence_of_element_located(("name", "password")))
  element2 = WebDriverWait(driver, 10).until(EC.presence_of_element_located(("xpath", "/html/body/div/div/div/div[2]/form/button")))
  print ("Hey, Login Done")

except:
  print ("Sorry, Login failed")
  raise Exception
finally:
  print("The 'try except' is finished")
  driver.close()

#WebDriverWaitWsait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/app-root/div/app-home/div[1]/div[1]/div/div")))
# error_message = "username or password is incorrect"
# actualUrl="http://localhost:5001"
# expectedUrl= driver.current_url
# print(expectedUrl)
# #assertEquals(expectedUrl,actualUrl)
# # get the errors (if there are)
# #errors = driver.find_element("tag_name", "app-alert")
# #errors = driver.find_elements_by_tag_name("app-alert")
# #errors =driver.find_element("tagName", "app")
# #errors =driver.find_element(By.TAG_NAME, 'app-alert').get_attribute('textContent')
# #errors =driver.find_element(By.TAG_NAME, 'app-alert').get_attribute('textContent')
# #print(driver.find_element(By.TAG_NAME, 'app-alert').get_attribute('textContent'))
# errors =driver.find_element(By.TAG_NAME, 'app-alert').get_attribute("innerHTML")
# #errors=driver.find_element("xpath", "/html/body/app-root/div/app-login/div[1]/div[1]/div[3]/div/button")
#WebDriverWaitWsait.until(EC.visibilityOfElementLocated(By.TAG_NAME, 'app-alert').get_attribute("innerHTML"))
#
# errors=driver.find_element("xpath", "/html/body/app-root/div/app-home/div[1]/div[1]/div/div")
# print(errors)
# print('after errors')
# # print the errors optionally

# # for e in errors:
# #      print("inside error loop")
# #      print(e)
# # if we find that error message within errors, then login is failed
# if any(error_message in e.text for e in errors):
#     print("[!] Login failed")
# else:
#     print("[+] Login successful")
# # close the driver
# get_title = driver.title
# print(get_title)
# assert "ClevercitiClient" in driver.title
#login_page=driver.find_element("xpath", "/html/body/app-root/div/app-home/div[2]/div/div[1]/div[1]/button/span")
#WebDriverWait(driver, 20).until(EC.visibility_of_element_located((By.XPATH, "/html/body/app-root/div/app-home/div[2]/div/div[1]/div[1]/button/span")))




