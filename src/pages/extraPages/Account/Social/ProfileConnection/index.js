import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import {Fonts} from '../../../../../shared/constants/AppEnums';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import {AppGridContainer} from '../../../../../@crema';
import Member from './Member';
import PropTypes from 'prop-types';

const ProfileConnection = ({profileConnection}) => {
  return (
    <Box sx={{position: 'relative'}}>
      <Typography
        component='h3'
        sx={{
          fontSize: 16,
          fontWeight: Fonts.BOLD,
          mb: {xs: 3, lg: 5},
        }}
      >
        <IntlMessages id='common.profileConnections' />
      </Typography>
      <AppGridContainer spacing={4}>
        {profileConnection.map((member, index) => (
          <Grid item xs={12} sm={12} md={4} lg={6} xl={3} key={index}>
            <Member member={member} />
          </Grid>
        ))}
      </AppGridContainer>
    </Box>
  );
};

export default ProfileConnection;

ProfileConnection.propTypes = {
  profileConnection: PropTypes.array,
};
