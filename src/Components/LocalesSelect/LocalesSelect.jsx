import Select from 'react-select';
import { useTranslation } from 'react-i18next';

import {
  Common,
} from '@Config';

/**
 * LocalesSelect
 * 語系選擇
 *
 * @param {*} props
 */
const LocalesSelect = (props) => {
  const {
    t,
    i18n,
  } = useTranslation();

  // 語系檔下拉式選單
  const options = [
    { value: 'zh-TW', label: t('lang.zh_tw') },
    { value: 'en-US', label: t('lang.en_us') },
  ];

  /**
   * handleChange
   * 選擇語系
   *
   * @param {*} option
   */
  const handleChange = (option) => {
    i18n.changeLanguage(option.value);

    // 下次使用系統可以 Keep 語系
    localStorage.setItem(Common.LOCAL_STORAGE_I18N_KEY, option.value);
  }

  // 下拉式選單選的選項
  const selectedOption = options.find((tmp) => {
    return tmp.value === i18n.language;
  })

  return (
    <>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </>
  );
};

export default LocalesSelect;
