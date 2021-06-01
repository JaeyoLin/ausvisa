import React from 'react';
import {
  Carousel,
} from 'rsuite';
import { tw } from 'twind';

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

      <div className={tw`h-screen`} style={{ backgroundColor: '#FFFBF3', }}>
        <div className={tw`p-2`}>
          <Carousel
            autoplay
            style={{ 'height': '200px', }}
            shape='bar'
          >
            <img
              src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1"
              height="150"
            />
            <img
              src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
              height="150"
            />
            <img
              src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
              height="150"
            />
            <img
              src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
              height="150"
            />
            <img
              src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
              height="150"
            />
          </Carousel>
        </div>
      </div>

      <Copyright />
    </main>
  );
};

export default Main;