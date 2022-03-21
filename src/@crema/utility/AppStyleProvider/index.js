import React from 'react';
import PropTypes from 'prop-types';
import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {useThemeContext} from '../AppContextProvider/ThemeContextProvider';
import {LayoutDirection} from '../../../shared/constants/AppEnums';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

const AppStyleProvider = (props) => {
  const {theme} = useThemeContext();
  if (theme.direction === LayoutDirection.LTR) return props.children;
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
};
export default AppStyleProvider;

AppStyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
