import React from 'react';
import {CustomizerItemWrapper} from '../index.style';
import Box from '@mui/material/Box';
import IntlMessages from '../../../utility/IntlMessages';
import Switch from '@mui/material/Switch';
import {LayoutDirection} from '../../../../shared/constants/AppEnums';
import {
  useThemeActionsContext,
  useThemeContext,
} from '../../../utility/AppContextProvider/ThemeContextProvider';

const ThemeDirection = () => {
  const {theme} = useThemeContext();
  const {updateTheme} = useThemeActionsContext();

  const onChangeRtlSetting = (event) => {
    (theme.direction = event.target.checked
      ? LayoutDirection.RTL
      : LayoutDirection.LTR),
      updateTheme({...theme});
  };

  return (
    <CustomizerItemWrapper>
      <Box display='flex' alignItems='center'>
        <Box component='h4'>
          <IntlMessages id='customizer.rtlSupport' />
        </Box>
        <Box component='span' ml='auto'>
          <Switch
            checked={theme.direction === LayoutDirection.RTL}
            onChange={onChangeRtlSetting}
            value='checkedA'
            inputProps={{'aria-label': 'secondary checkbox'}}
          />
        </Box>
      </Box>
    </CustomizerItemWrapper>
  );
};

export default ThemeDirection;
