import { tw } from 'twind'
import { useTranslation } from 'react-i18next';

/**
 * Copyright
 *
 */
const Copyright = () => {
  const { t } = useTranslation();

  return (
    <div className={tw`text(center gray-500)`}>
      { `${new Date().getFullYear() } © ` }
      { t('owner') }
      {` ${t('right_reserved')}`}
    </div>
  );
};

export default Copyright;