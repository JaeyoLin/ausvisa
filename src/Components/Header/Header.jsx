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
    <header className={tw`bg-gray-100 text-right h-14 p-3`}>
      <div className={tw`flex`}>
        <div className={tw`flex-none w-16 h-16`}>
          <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
            <FaBars />
          </div>
        </div>
        <div className={tw`flex-grow h-16 text-center`}>
          放 Title
        </div>
        <div className={tw`flex-none w-32 h-16`}>
          <LocalesSelect />
        </div>
      </div>
    </header>
  )
};

export default Header;
