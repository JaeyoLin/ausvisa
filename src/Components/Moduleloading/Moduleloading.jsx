import { tw } from 'twind'
// import { Spin } from 'antd';

import { useTranslation } from 'react-i18next';

/**
 * Moduleloading
 *
 * @param {*} props
 */
const Moduleloading = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={tw`bg-gray-300 w-full h-screen flex items-center justify-center`}>
        { t('page_loading') }
        {/* <Spin
          tip={t('page_loading')}
        /> */}
      </div>
    </>
  );
};

export default Moduleloading;
