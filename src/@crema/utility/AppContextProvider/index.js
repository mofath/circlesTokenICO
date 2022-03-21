import React from 'react';
import PropTypes from 'prop-types';
import ThemeContextProvider from './ThemeContextProvider';
import LocaleContextProvider from './LocaleContextProvide';
import LayoutContextProvider from './LayoutContextProvider';
import SidebarContextProvider from './SidebarContextProvider';
import ContractContextProvider from './ContractContextProvider';

const AppContextProvider = ({children}) => {
  return (
    <ContractContextProvider>
      <ThemeContextProvider>
        <LocaleContextProvider>
          <LayoutContextProvider>
            <SidebarContextProvider>{children}</SidebarContextProvider>
          </LayoutContextProvider>
        </LocaleContextProvider>
      </ThemeContextProvider>
    </ContractContextProvider>
  );
};

export default AppContextProvider;

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
