module.exports = {
    '@tags': ['google'],
    'Google Advanced search; Elon Mask'(browser){

        const page = browser.page.googleAdvancedSearch()


        const resultPageQuerySelector = '#searchform input[name = "q"]'
        // const resultPageLastUpdateSelector = '[aria-label="Past month"]'
               
        page
            .navigate()
            .setValue('@mainQueryInput', 'Elon Musk')
            .click('@languageDropDown')
            .click('@languageDropValue')
            .click('@lastUpdateDropDown')
            .click('@lastUpdateDropDownValue')
            .click('@submitButton')
            // message string 'The Query is Elon Musk'
        browser    
            .assert.urlContains('as_q=Elon+Musk', 'The Query is Elon Musk')
            .assert.visible(resultPageQuerySelector, 'UI: Elon Musk is set to the query')
            // .assert.containsText (resultPageLastUpdateSelector,"UI: ")
            .saveScreenshot('tests_output/google.png')        
    }
}