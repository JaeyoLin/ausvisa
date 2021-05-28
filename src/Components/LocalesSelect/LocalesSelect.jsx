// import { Select } from 'antd';
// import { useTranslation } from 'react-i18next';

// import {
//   Common,
// } from '@Config';

// const { Option } = Select;

// /**
//  * LocalesSelect
//  * 語系選擇
//  *
//  * @param {*} props
//  */
// const LocalesSelect = (props) => {
//   const {
//     t,
//     i18n,
//   } = useTranslation();

//   const {
//     clearErrors,
//     className,
//   } = props;

//   /**
//    * handleChange
//    * 選擇語系
//    *
//    * @param {*} value
//    */
//   const handleChange = (value) => {
//     i18n.changeLanguage(value);

//     // 下次使用系統可以 Keep 語系
//     localStorage.setItem(Common.LOCAL_STORAGE_I18N_KEY, value);

//     clearErrors();
//   }

//   return (
//     <>
//       <Select
//         defaultValue={i18n.language}
//         onChange={handleChange}
//         bordered={false}
//         className={className}
//       >
//         <Option value="zh-TW">{ t('lang.zh_tw') }</Option>
//         <Option value="en-US">{ t('lang.en_us') }</Option>
//       </Select>
//     </>
//   );
// };

// LocalesSelect.defaultProps = {
//   clearErrors: () => {}, // Login Page 清除錯誤訊息
//   className: {}, // Style 由外部引入的 Page 決定
// };

// export default LocalesSelect;
