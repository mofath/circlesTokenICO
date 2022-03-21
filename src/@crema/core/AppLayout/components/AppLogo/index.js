import React from 'react';
import {alpha, Box} from '@mui/material';
import {useThemeContext} from '../../../../utility/AppContextProvider/ThemeContextProvider';
import {ReactComponent as Logo} from '../../../../../assets/icon/logo_.svg';
import {ReactComponent as LogoText} from '../../../../../assets/icon/logo_text_color.svg';

const AppLogo = () => {
  const {theme} = useThemeContext();

  return (
    <Box
      sx={{
        height: {xs: 56, sm: 70},
        padding: 2.5,
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
          height: {xs: 40, sm: 45},
        },
      }}
      className='app-logo'
    >
      <Logo fill={theme.palette.primary.main} />
      <Box
        sx={{
          mt: 1,
          display: {xs: 'none', md: 'block'},
          '& svg': {
            height: {xs: 25, sm: 30},
          },
        }}
      >
        <LogoText fill={alpha(theme.palette.text.primary, 0.8)} />
      </Box>
    </Box>
  );
};

export default AppLogo;

// const AppLogo = () => {
//   const {theme} = useThemeContext();

//   return (
//     <Logo
//       fill={theme.palette.primary.main}
//       sx={{
//         height: {xs: 56, sm: 70},
//         padding: 2.5,
//         display: 'flex',
//         flexDirection: 'row',
//         cursor: 'pointer',
//         alignItems: 'start',
//         justifyContent: 'start',
//         '& svg': {
//           height: {xs: 40, sm: 45},
//         },
//       }}
//       className='app-logo'
//     />
//   );
// };

// export default AppLogo;
