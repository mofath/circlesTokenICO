import React from 'react';
import PropTypes from 'prop-types';
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';
import {useThemeContext} from '../AppContextProvider/ThemeContextProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {responsiveFontSizes} from '@mui/material';

const AppThemeProvider = (props) => {
  const {theme} = useThemeContext();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={responsiveFontSizes(createTheme(theme))}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {props.children}
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default AppThemeProvider;

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
