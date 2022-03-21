import React from 'react';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import clsx from 'clsx';
import {toggleNavCollapsed} from '../../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import useStyles from './AppSidebarMenu.style';
import AppScrollbar from '@crema/core/AppScrollbar';
import MenuGroup from './SidebarMenu/MenuGroup';
import {useThemeContext} from '../../../utility/AppContextProvider/ThemeContextProvider';

const AppSidebarMenu = (props) => {
  const dispatch = useDispatch();
  const {themeMode} = useThemeContext();

  const navCollapsed = useSelector(({settings}) => settings.navCollapsed);

  const handleToggleDrawer = () => {
    dispatch(toggleNavCollapsed());
  };
  const classes = useStyles({themeMode});
  let sidebarClasses = classes.sidebarStandard;
  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor={props.position}
          open={navCollapsed}
          onClose={() => handleToggleDrawer()}
          classes={{
            root: clsx(props.variant),
            paper: clsx(props.variant),
          }}
          style={{position: 'absolute'}}
        >
          <Box className={clsx(classes.appSidebarMenuRoot, 'app-sidebar-menu')}>
            <Box className={clsx(classes.sidebarBg, sidebarClasses)}>
              <AppScrollbar className={classes.drawerScrollAppSidebar}>
                <MenuGroup
                  selectedMenu={props.selectedMenu}
                  setSelectedMenu={props.setSelectedMenu}
                />
              </AppScrollbar>
            </Box>
          </Box>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Box
          height='100%'
          className={clsx(classes.appSidebarMenuRoot, 'app-sidebar-menu')}
        >
          <Box className={clsx(classes.sidebarBg, sidebarClasses)}>
            <AppScrollbar className={classes.scrollAppSidebar}>
              <MenuGroup
                selectedMenu={props.selectedMenu}
                setSelectedMenu={props.setSelectedMenu}
              />
            </AppScrollbar>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default AppSidebarMenu;

AppSidebarMenu.defaultProps = {
  variant: '',
  position: 'left',
};

AppSidebarMenu.propTypes = {
  position: PropTypes.string,
  variant: PropTypes.string,
  selectedMenu: PropTypes.object,
  setSelectedMenu: PropTypes.func,
};
