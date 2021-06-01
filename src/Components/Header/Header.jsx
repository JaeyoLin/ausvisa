import { FaHeart, FaBars } from 'react-icons/fa';
import { tw } from 'twind'

import {
  LocalesSelect,
} from '@Components';

/**
 * Header
 *
 * @param {*} props
 */
const Header = (props) => {
  const {
    handleToggleSidebar,
  } = props;

  return (
    <header className={tw`bg-gray-900 text-right h-16 p-3`} style={{ 'backgroundColor': '#2B4247',}}>
      <div className={tw`flex`}>
        <div className={tw`flex-none w-16 text-center`}>
          <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
            <FaBars />
          </div>
        </div>
        <div className={tw`flex-grow h-16 text-center text-white pt-2 text-lg`}>
          Ausvisa
        </div>
        <div className={tw`flex-none w-16`} style={{ 'display': 'flex', 'justifyContent': 'flex-end', }}>
          <LocalesSelect />
        </div>
      </div>
    </header>
  )
};

export default Header;
