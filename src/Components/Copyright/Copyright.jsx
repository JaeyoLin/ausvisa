import { tw } from 'twind'
import { useTranslation } from 'react-i18next';

/**
 * Copyright
 *
 */
const Copyright = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className={tw`h-14 pt-4`} style={{ 'backgroundColor': '#669999', 'color': '#ffffff'}}>
        { `${new Date().getFullYear() } © ` }
        { t('owner') }
        {` ${t('right_reserved')}`}
      </div>
    </footer>
  );
};

export default Copyright;
