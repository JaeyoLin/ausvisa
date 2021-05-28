import React from 'react';
// import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import {
  SiLine,
} from 'react-icons/si';
// import sidebarBg from './assets/bg1.jpg';
import sidebarBg from '@Assets/bg1.jpg';

import { useTranslation } from 'react-i18next';

/**
 * SideBar
 *
 * @param {*} param0
 * @returns
 */
const SideBar = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const { t } = useTranslation();

  return (
    <ProSidebar
      // image={image ? sidebarBg : false}
      image={sidebarBg}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          { `放 Logo` }
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">{ `隨便放` }</span>}
          >
            { `隨便放` }
          </MenuItem>
          <MenuItem icon={<FaGem />}> { `隨便放` }</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={`隨便放`}
            icon={<FaRegLaughWink />}
          >
            <MenuItem>{`隨便放`} 1</MenuItem>
            <MenuItem>{`隨便放`} 2</MenuItem>
            <MenuItem>{`隨便放`} 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={`隨便放`}
            icon={<FaHeart />}
          >
            <MenuItem>{`隨便放`} 1</MenuItem>
            <MenuItem>{`隨便放`} 2</MenuItem>
            <MenuItem>{`隨便放`} 3</MenuItem>
          </SubMenu>
          <SubMenu title={`隨便放`} icon={<FaList />}>
            <MenuItem>{`隨便放`} 1 </MenuItem>
            <MenuItem>{`隨便放`} 2 </MenuItem>
            <SubMenu title={`${`隨便放`} 3`}>
              <MenuItem>{`隨便放`} 3.1 </MenuItem>
              <MenuItem>{`隨便放`} 3.2 </MenuItem>
              <SubMenu title={`${`隨便放`} 3.3`}>
                <MenuItem>{`隨便放`} 3.3.1 </MenuItem>
                <MenuItem>{`隨便放`} 3.3.2 </MenuItem>
                <MenuItem>{`隨便放`} 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://line.me/ti/p/WefNmtuiom"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <SiLine />
            <span> {t('contact')}</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBar;
