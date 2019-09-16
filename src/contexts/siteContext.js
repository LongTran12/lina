import React, { createContext, useState } from 'react'
import En from '../components/language/En'
import Vi from '../components/language/Vi'
const SiteContext = createContext()
const WrapSiteContext = ({ children }) => {
    const [lang, setLang] = useState('en')
    const getLang = (text) => {
        switch (lang) {
            case 'vi':
                if (Vi[text]) {
                    return Vi[text]
                } else {
                    return En[text]
                }
            default:
                return En[text]
        }
    }
    return <SiteContext.Provider value={{
        lang,
        setLang,
        getLang
    }}>
        {children}
    </SiteContext.Provider>
}

export default WrapSiteContext
export { SiteContext, WrapSiteContext }