import React, {useState} from 'react';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import AppContentView from '@crema/core/AppContentView';
import {LayoutType} from 'shared/constants/AppEnums';
import useStyles from './index.style';
import AppFixedFooter from './AppFixedFooter';
import AppHeader from './AppHeader';
import AppSidebarMenu from './AppSidebarMenu';
import AppSidebarSubMenu from './AppSidebarSubMenu';
import routesConfig from '../../../../pages/routesConfig';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';
import {useThemeContext} from '../../../utility/AppContextProvider/ThemeContextProvider';

const DefaultLayout = () => {
  const [sidebarMenuState, setSidebarMenuState] = useState(2);
  const [selectedMenu, setSelectedMenu] = useState(routesConfig[0]);
  const {themeStyle} = useThemeContext();
  const {footer, layoutType, footerType} = useLayoutContext();
  const classes = useStyles({footer, themeStyle});

  const updateNavState = () => {
    if (sidebarMenuState === 3) {
      setSidebarMenuState(0);
    } else {
      setSidebarMenuState(sidebarMenuState + 1);
    }
  };

  return (
    <Box
      className={clsx(
        classes.appMain,
        layoutType === LayoutType.BOXED ? classes.boxedLayout : '',
        {
          appMainFooter: footer && footerType === 'fluid',
          appMainFixedFooter: footer && footerType === 'fixed',
        },
      )}
    >
      <AppHeader
        updateNavState={updateNavState}
        sidebarMenuState={sidebarMenuState}
      />

      <Box
        className={clsx(
          classes.mainContent,
          {
            menuMainContent: sidebarMenuState > 0,
          },
          {
            subMenuMainContent: sidebarMenuState > 1 && sidebarMenuState < 3,
          },
        )}
      >
        <Box className={classes.appSidebarRoot}>
          <AppSidebarMenu
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          <AppSidebarSubMenu item={selectedMenu} />
        </Box>
        <Box className={classes.mainContainer}>
          <AppContentView />
          <AppFixedFooter />
        </Box>
      </Box>
    </Box>
  );
};

export default DefaultLayout;
