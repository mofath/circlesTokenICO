import React from 'react';
import {Box} from '@mui/material';
import PropsTypes from 'prop-types';
import {useSidebarContext} from '../../../../utility/AppContextProvider/SidebarContextProvider';

const SidebarHeaderWrapper = ({children}) => {
  const {sidebarHeaderColor, isSidebarBgImage} = useSidebarContext();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: isSidebarBgImage ? 'transparent' : sidebarHeaderColor,
        '&:hover': {
          '& .arrowIcon': {
            opacity: 1,
            visibility: 'visible',
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default SidebarHeaderWrapper;

SidebarHeaderWrapper.propTypes = {
  children: PropsTypes.node,
};
