module.exports = {
    '@tags': ['google'],
    'Google Advanced search; Elon Mask'(browser){
        
        const mainQueryInpuutSelector = '#xX4UFf';
        const mainQuery = 'Elon Musk';
        const languageDropDownSelector = '#lr_button';
        const languageDropValueSelector = '.goog-menuitem[value = "lang_af"]';
        const lastUpdateDropDownSelector = '#as_qdr_button'
        const lastUpdateDropDownValueSelector = '.goog-menuitem[value ="d"]'
        const submitButtonSelector = ".jfk-button[value='Advanced Search']"
        const resultPageQuerySelector = '#searchform input[name = "q"]'
        // const resultPageLastUpdateSelector = '[aria-label="Past month"]'
               
        browser
            .url('https://www.google.co.uk/advanced_search')
            .setValue(mainQueryInpuutSelector, mainQuery)
            .click(languageDropDownSelector)
            .click(languageDropValueSelector)
            .click(lastUpdateDropDownSelector)
            .click(lastUpdateDropDownValueSelector)
            .click(submitButtonSelector)
            // message string 'The Query is Elon Musk'
            .assert.urlContains('as_q=Elon+Musk', 'The Query is Elon Musk')
            .assert.visible(resultPageQuerySelector, 'UI: Elon Musk is set to the query')
            // .assert.containsText(resultPageLastUpdateSelector,"UI: ")
            .saveScreenshot('tests_output/google.png')        
    }
}