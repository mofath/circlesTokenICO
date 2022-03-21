import React from 'react';
import Hidden from '@mui/material/Hidden';
import Drawer from '@mui/material/Drawer';
import Card from '@mui/material/Card';
import {Box, drawerClasses, Slide} from '@mui/material';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {onToggleAppDrawer} from '../../../redux/actions';

const AppSidebar = (props) => {
  const {isAppDrawerOpen, sidebarContent} = props;
  const dispatch = useDispatch();
  return (
    <Slide direction='right' in mountOnEnter unmountOnExit>
      <Box
        sx={{
          height: '100%',
          width: {
            lg: 280,
          },
        }}
      >
        <Hidden lgUp>
          <Drawer
            open={isAppDrawerOpen}
            onClose={() => dispatch(onToggleAppDrawer())}
            sx={{
              position: 'absolute',
              [`& .${drawerClasses.paper}`]: {
                width: 280,
                '& .listItem': {
                  zIndex: 1305,
                },
              },
            }}
          >
            {sidebarContent}
          </Drawer>
        </Hidden>
        <Hidden lgDown>
          <Card style={{height: '100%'}}>{sidebarContent}</Card>
        </Hidden>
      </Box>
    </Slide>
  );
};

export default AppSidebar;

AppSidebar.propTypes = {
  isAppDrawerOpen: PropTypes.bool,
  footer: PropTypes.bool,
  navStyle: PropTypes.string,
  fullView: PropTypes.bool,
  sidebarContent: PropTypes.node,
};
