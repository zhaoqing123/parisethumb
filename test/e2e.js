const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://localhost:3000/index');
    await driver.findElement(By.id('thumb'));
    const _animation=driver.findElement(By.id('thumb'));
    await driver.wait(_animation.isDisplayed(),9000000000000);
  } finally {
    await driver.quit();
  }
})();