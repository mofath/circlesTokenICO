import React from 'react';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import clsx from 'clsx';
import {toggleNavCollapsed} from '../../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import useStyles from './AppSidebarSubMenu.style';
import AppScrollbar from '@crema/core/AppScrollbar';
import MainMenu from './SidebarMenu/MainMenu';
import {useThemeContext} from '../../../utility/AppContextProvider/ThemeContextProvider';

const AppSidebarSubMenu = (props) => {
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
          <Box
            className={clsx(
              classes.appSidebarSubMenuRoot,
              'app-sidebar-sub-menu',
            )}
          >
            <Box className={clsx(classes.sidebarBg, sidebarClasses)}>
              <AppScrollbar className={classes.drawerScrollAppSidebar}>
                <MainMenu item={props.item} />
              </AppScrollbar>
            </Box>
          </Box>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Box
          height='100%'
          className={clsx(
            classes.appSidebarSubMenuRoot,
            'app-sidebar-sub-menu',
          )}
        >
          <Box className={clsx(classes.sidebarBg, sidebarClasses)}>
            <AppScrollbar className={classes.scrollAppSidebar}>
              <MainMenu item={props.item} />
            </AppScrollbar>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default AppSidebarSubMenu;

AppSidebarSubMenu.defaultProps = {
  variant: '',
  position: 'left',
};

AppSidebarSubMenu.propTypes = {
  position: PropTypes.string,
  variant: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    auth: PropTypes.object,
    exact: PropTypes.bool,
    messageId: PropTypes.string,
    count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    url: PropTypes.string,
    color: PropTypes.string,
  }),
};
