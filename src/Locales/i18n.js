import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import EN_US from './en/translation.json';
// import ZH_TW from './zh-tw/translation.json';

import EN_US from './translations/en.yml';
import ZH_TW from './translations/zh-TW.yml';

import {
  Common,
} from '@Config';

const resources = {
  'en-US': {
    translation: EN_US,
  },
  'zh-TW': {
    translation: ZH_TW,
  },
};

// 判斷是否有選過語系
let lastLng = localStorage.getItem(Common.LOCAL_STORAGE_I18N_KEY);
if (lastLng === undefined || lastLng === null) {
  lastLng = 'zh-TW';
}

i18n.use(initReactI18next).init({
  resources,
  lng: lastLng,             // 預設語言
  fallbackLng: 'zh-TW',     // 如果當前切換的語言沒有對應的翻譯則使用這個語言，
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;