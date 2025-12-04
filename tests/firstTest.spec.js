
const { test, expect } = require('@playwright/test')

const testData =
   [
      { user: 'admin', pass: 'test123' },
      { user: 'admin1', pass: 'test123' },
      { user: 'admin2', pass: 'test123' }

   ];



test('Page Launch', async ({ page }) => {
   await page.goto("https://www.google.com");
   console.log(await page.title());
   await expect(page).toHaveTitle("Google");
}
);

test('Page Launch India', async ({ page }) => {
   await page.goto("https://www.india.com");
   console.log(await page.title());
}
);


testData.forEach((data, index) => {
   test(`Data Parameter Example - ${data.user}`,async({page})=>
   {
   //Element Declaration
      const userName = page.locator("#username");
      const passWord = page.locator("#password");
      const loginButton = page.locator("#signInBtn");   
      //URL Launch
      await page.goto("https://rahulshettyacademy.com/loginpagePractise");
      console.log(await page.title());                
      await console.log("Page Assertion")
      await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
      await userName.fill(data.user);
      await passWord.fill(data.pass);
      await loginButton.click();
      console.log(await page.locator("div[style*='block']").textContent());
      await page.screenshot({ path: 'screenshot.png', fullPage: true });
      await expect(page.locator("div[style*='block']")).toContainText("Incorrect");
   }
   );
   });

test('Rahul Shetty Demo Site', async ({ page }) => {

   //Element Declaration
   const userName = page.locator("#username");
   const passWord = page.locator("#password");
   const loginButton = page.locator("#signInBtn");

   //URL Launch
   await page.goto("https://rahulshettyacademy.com/loginpagePractise");
   console.log(await page.title());

   await console.log("Page Assertion")
   await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");


   await userName.fill("dummy@gmail.com");
   await passWord.fill("324234242");
   await loginButton.click();
   console.log(await page.locator("div[style*='block']").textContent());
   await expect(page.locator("div[style*='block']")).toContainText("Incorrect");
}
);

//screenshot example and dropdown selection
test(`Data Parameter Example Select DropDown`,async({page})=>
   {
   //Element Declaration
      const userName = page.locator("#username");
      const passWord = page.locator("#password");
      const loginButton = page.locator("#signInBtn");  
      const ddValue = page.locator("select.form-control"); 
      //URL Launch
      await page.goto("https://rahulshettyacademy.com/loginpagePractise");
      console.log(await page.title());                
      await console.log("Page Assertion")
      await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
      await userName.fill("dsenthil23@gmail.com");
      await passWord.fill("Test@123");
      await ddValue.selectOption("consult");
      await loginButton.click();
      console.log(await page.locator("div[style*='block']").textContent());
      await expect(page.locator("div[style*='block']")).toContainText("Incorrect");
   }
   );

