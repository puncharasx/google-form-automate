import puppeteer from 'puppeteer';

const formLink = 'links';

(async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.goto(formLink, { waitUntil: 'networkidle2' });
  let count = 100;
  for (let i = 0; i < count; i++ ) {
    await page.waitForSelector('.l4V7wb')
    await page.click('.l4V7wb')
  
    
    const textAge = await page.waitForSelector('.whsOnd', { visible: true })
    await textAge.click().then(async () => {
      const age = generateRandomNumber(23, 40)
      await textAge.type(`${age}`)
    })
    
    
    // Gender
    const genderItems = ['i8', 'i5', 'i11']
    const genderIndex = generateRandomNumber(0,2)
    const genderOption =  await page.waitForSelector(`#${genderItems[genderIndex]}`) // [i8, i5, i11]
    await genderOption.click()
  
    // Education
    const edutcationItems = ['i22',  'i25', 'i28', 'i31', 'i34', 'i37']
    const educationIndex = generateRandomNumber(0, 5)
    const educationOption = await page.waitForSelector(`#${edutcationItems[educationIndex]}`) // [i22,  i25, i28, i31, i34, i37]
    await educationOption.click()
  
    // Experience
    const experienceItems = ['i47', 'i50', 'i53', 'i56', 'i59', 'i62']
    const experienceIndex = generateRandomNumber(0, 5)
    const experienceOption = await page.waitForSelector(`#${experienceItems[experienceIndex]}`) // ['i47', 'i50', 'i53', 'i56', 'i59', 'i62']
    await experienceOption.click()
  
    // Major
    const majorItems = ['i69', 'i72', 'i75', 'i78', 'i81']
    const majorIndex = generateRandomNumber(0, 4)
    const majorOption = await page.waitForSelector(`#${majorItems[majorIndex]}`) // ['i69', 'i72', 'i75', 'i78', 'i81']
    await majorOption.click()
  
    // Next
    const next = await page.$$('.l4V7wb')
    await next[1].click()
  
    await page.waitForSelector('[data-value="ปานกลาง"], [data-value="มาก"], [data-value="มากที่สุด"] ') // ['น้อยที่สุด', 'น้อย', 'ปานกลาง', 'มาก', 'มากที่สุด']
    const tableItems = ['ปานกลาง', 'มาก', 'มากที่สุด']
    const tableIndex = generateRandomNumber(0, 2)
    const table1 = await page.$$(`[data-value="${tableItems[tableIndex]}"]`)
    for(const table of table1) {
      await table.click()
    }
  
    // Next
    const nextToEnd = await page.$$('.l4V7wb')
    await nextToEnd[4].click()
  
    await page.waitForSelector('.l4V7wb')
    const finish = await page.$$('.l4V7wb')
    await finish[1].click()

    let loop = 0
    while(loop <= 2) {
      await page.reload();
      loop += 1
    }
  }

  await page.close()

})();

function generateRandomNumber(start: number, end: number): number {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
