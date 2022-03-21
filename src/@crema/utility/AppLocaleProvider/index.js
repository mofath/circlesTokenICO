import React from 'react';
import PropTypes from 'prop-types';
import {IntlProvider} from 'react-intl';
import {IntlGlobalProvider} from '../helper/Utils';
import AppLocale from 'shared/localization';
import {useLocaleContext} from '../AppContextProvider/LocaleContextProvide';

const AppLocaleProvider = (props) => {
  const {locale} = useLocaleContext();
  const currentAppLocale = AppLocale[locale.locale];

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <IntlGlobalProvider>{props.children}</IntlGlobalProvider>
    </IntlProvider>
  );
};

export default AppLocaleProvider;

AppLocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
