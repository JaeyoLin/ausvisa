// import React, {
//   useContext,
// } from 'react';
// import {
//   Avatar,
//   Dropdown,
//   Layout,
//   Menu,
// } from 'antd';
// import { tw } from 'twind'
// import { UserOutlined } from '@ant-design/icons';
// import { useTranslation } from 'react-i18next';
// import { useHistory } from 'react-router-dom';

// import {
//   LocalesSelect,
// } from '@Components';
// import { AuthContext } from '@GlobalStores/Context';
// import {
//   Common,
// } from '@Config';

// import {
//   ExportOutlined,
//   SettingOutlined,
// } from '@ant-design/icons';

// // import { getUserInfo } from '@Apis/Auth';

// /**
//  * Header
//  *
//  * @param {*} props
//  */
// const Header = (props) => {
//   const {
//     setIsUserLoggedIn,
//     userInfo,
//   } = useContext(AuthContext);

//   const { t } = useTranslation();

//   const menu = (
//     <Menu>
//       <div className={tw`text-base p-3`}>{ userInfo.userName }</div>
//       <hr />
//       <Menu.Item key="0" onClick={() => { handleRedirect(); }}>
//         <SettingOutlined className={tw`relative -top-0.5`} />
//         { t('personal_setting') }
//       </Menu.Item>
//       <Menu.Item key="1" onClick={() => { handleLogOut(); }}>
//         <ExportOutlined className={tw`relative -top-0.5`} />
//         { t('sign_out') }
//       </Menu.Item>
//     </Menu>
//   );

//   let history = useHistory();

//   /**
//    * handleRedirect
//    * 跳轉至個人頁面
//    *
//    */
//   const handleRedirect = () => {
//     history.push('/personal_setting');
//   };

//   /**
//    * handleLogOut
//    * 登出
//    *
//    */
//   const handleLogOut = () => {
//     localStorage.removeItem(Common.LOCAL_STORAGE_AUTH_KEY);
//     setIsUserLoggedIn(false);
//   };

//   return (
//     <Layout.Header className={tw`bg-gray-100 px-5 text-right`}>
//       <LocalesSelect />
//       <Dropdown overlay={menu} trigger={['click']} className={tw`cursor-pointer`}>
//         <Avatar size="large" icon={<UserOutlined />} className={tw`leading-7`} />
//       </Dropdown>
//     </Layout.Header>
//   );
// };

// export default Header;

