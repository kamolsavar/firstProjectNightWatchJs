module.exports = {
    '@tags': ['google'],
    'Google Advanced search; Elon Mask'(browser){

        const page = browser.page.googleAdvancedSearch()

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
            .assert.visible('@resultPageQuery', 'UI: Elon Musk is set to the query')
            .saveScreenshot('tests_output/google.png')        
    }
}