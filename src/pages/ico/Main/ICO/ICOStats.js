import React from 'react';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {Fonts} from '../../../../shared/constants/AppEnums';
import AppCard from '../../../../@crema/core/AppCard';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined';

const ICOStats = (props) => {
  const {bgColor, heading, icoType, icoData} = props;

  let icoStatus;
  if (icoType === 'currentState') {
    if (icoData === 0) {
      icoStatus = 'Not Started';
    } else if (icoData === 1) {
      icoStatus = 'In Progress';
    } else if (icoData === 2) {
      icoStatus = 'Ended';
    } else {
      icoStatus = 'Paused';
    }
  }

  const helperArray = ['saleStart', 'saleEnd', 'currentState'];

  return (
    <AppCard
      sxStyle={{
        borderRadius: (theme) =>
          theme.components.MuiCard.styleOverrides.root.borderRadius / 4,
      }}
      className='card-hover'
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            p: 3,
            fontSize: {xs: 30, md: 48},
            height: {xs: 46, md: 50, xl: 60},
            width: {xs: 46, md: 50, xl: 60},
            backgroundColor: bgColor,
          }}
        >
          {icoType === 'totalSupply' ? (
            <BubbleChartOutlinedIcon fontSize='large' />
          ) : icoType === 'currentState' ? (
            <FlagOutlinedIcon fontSize='large' />
          ) : icoType === 'saleStart' ? (
            <EventAvailableOutlinedIcon fontSize='large' />
          ) : icoType === 'saleEnd' ? (
            <EventBusyOutlinedIcon fontSize='large' />
          ) : icoType === 'minInvestment' ? (
            <AttachMoneyOutlinedIcon fontSize='large' />
          ) : icoType === 'maxInvestment' ? (
            <PriceCheckOutlinedIcon fontSize='large' />
          ) : (
            <PaymentsOutlinedIcon fontSize='large' />
          )}
        </Avatar>

        <Box
          sx={{
            position: 'relative',
            ml: 4,
          }}
        >
          <Box
            component='p'
            sx={{
              fontSize: 14,
              color: 'text.secondary',
              mb: 2,
            }}
          >
            {heading}
          </Box>
          <Box
            component='h3'
            sx={{
              display: 'inline-block',
              fontWeight: Fonts.MEDIUM,
              fontSize: 17,
              mr: 3,
            }}
          >
            {icoType === 'currentState' ? icoStatus : icoData}
          </Box>
          <Box
            component='span'
            sx={{
              fontSize: 16,
              fontWeight: Fonts.MEDIUM,
            }}
          >
            {helperArray.includes(icoType)
              ? ''
              : icoType === 'totalSupply'
              ? 'CRCLS'
              : 'ETH'}
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default ICOStats;

ICOStats.defaultProps = {
  bgColor: '',
};

ICOStats.propTypes = {
  icon: PropTypes.string,
  bgColor: PropTypes.string,
  icoData: PropTypes.object,
  icoType: PropTypes.string,
  heading: PropTypes.any.isRequired,
};
