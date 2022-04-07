import { createI18n } from "vue-i18n";

//import zh from "./language/zh-TW.json";
//import en from "./language/en-US.json";

const i18n = createI18n({
    legacy: false,
    locale: 'ja',
    fallbackLocale: 'en',
    messages:{
        //語言包
        //"zh-TW": zh,
        //"en-US": en
    }
})

export default i18n

/*
Use:

import { useI18n } from "vue-i18n"
setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale,
    }
  },
*/