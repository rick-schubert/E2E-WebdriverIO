# Note
I am using Windows 10 at my home computer alongside NodeJS 8.7.0 which caused some initial trouble during startup. This is the reason why I decided to include the dependency `node-fibers` as I had to rebuild it. Furthermore, the host "0.0.0.0" had to be changed to "localhost" for usage in Windows 10. (In `wdio.conf.js`)

I had a lot of fun doing this task and was quite impressed by how well-chose the selector names are and how many exist. This made testing a breeze!

# How to run
- Start Serverless Selenium (for example with `java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.5.3.jar`)
- Start the test suite with `npm run test`

# Folder organisation
- `features/step_definitions/` describes which class methods are called on which step
- `pageObjects` contains several ES modules/classes containing several reusable methods