import React, {
  // useState,
} from 'react';
// import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import {
  Popover,
  Whisper,
  Dropdown,
} from 'rsuite';
import {
  IoLanguage,
} from 'react-icons/io5';

import {
  Common,
} from '@Config';

/**
 * LocalesSelect
 *
 * @returns
 */
const LocalesSelect = () => {
  const {
    t,
    i18n,
  } = useTranslation();

  const triggerRef = React.createRef();

  /**
   * handleSelectMenu
   *
   * @param {*} eventKey
   * @param {*} event
   */
  const handleSelectMenu = (eventKey, event) => {
    // console.log(eventKey);

    i18n.changeLanguage(eventKey);

    // 下次使用系統可以 Keep 語系
    localStorage.setItem(Common.LOCAL_STORAGE_I18N_KEY, eventKey);

    triggerRef.current.hide();
  }

  /**
   * MenuPopover
   *
   * @param {*} param0
   * @returns
   */
  const MenuPopover = ({ onSelect, ...rest }) => {
    const local = localStorage.getItem(Common.LOCAL_STORAGE_I18N_KEY);

    return (
      <Popover {...rest} full>
        <Dropdown.Menu onSelect={onSelect}>
          <Dropdown.Item eventKey='zh-TW'>{ t('lang.zh_tw') }</Dropdown.Item>
          <Dropdown.Item eventKey='en-US'>{ t('lang.en_us') }</Dropdown.Item>
        </Dropdown.Menu>
      </Popover>
    );
  };

  return (
    <Whisper
      placement="bottomEnd"
      trigger="click"
      triggerRef={triggerRef}
      speaker={<MenuPopover onSelect={handleSelectMenu} />}
    >
      <div className="btn-language">
        <IoLanguage />
      </div>
    </Whisper>
  );
};

export default LocalesSelect;
