import React from 'react';
// import { useIntl } from 'react-intl';
// import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';
// import reactLogo from './assets/logo.svg';
import { tw } from 'twind'

import {
  Copyright,
  Header,
} from '@Components';

const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  // const intl = useIntl();
  return (
    <main>
      <Header
        handleToggleSidebar={handleToggleSidebar}
      />

      <div className={tw`bg-green-200 h-screen p-3`}>
        內文
      </div>

      <Copyright />
    </main>
  );
};

export default Main;