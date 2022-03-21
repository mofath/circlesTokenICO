import React from 'react';
import Grid from '@mui/material/Grid';
import ICOStats from './ICOStats';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@mui/material/Box';
import {Fonts} from '../../../../shared/constants/AppEnums';
import {useContractContext} from '@crema/utility/AppContextProvider/ContractContextProvider';
import {CircularProgress} from '@mui/material';

const ICO = () => {
  const {
    totalSupply,
    minInvestment,
    maxInvestment,
    saleStart,
    saleEnd,
    currentState,
    dataIsReturned,
  } = useContractContext();
  console.log('🚀 ~ file: index.js ~ line 18 ~ ICO ~ totalSupply', totalSupply);

  return (
    <>
      {!dataIsReturned ? (
        <Box>
          <Box
            component='h2'
            sx={{
              color: 'text.primary',
              textTransform: 'uppercase',
              fontSize: 16,
              mb: {xs: 4, sm: 4, xl: 6},
              fontWeight: Fonts.BOLD,
            }}
          >
            <IntlMessages id='ico.circlesToken' />
          </Box>
          <Grid container spacing={{xs: 4, md: 8}}>
            <Grid item xs={12} sm={6}>
              <ICOStats
                icon={'/assets/images/bitcoin.svg'}
                bgColor='#9E49E6'
                icoType='totalSupply'
                icoData={totalSupply}
                heading={<IntlMessages id='ico.totalSupply' />}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <ICOStats
                icon={'/assets/images/bitcoin.svg'}
                bgColor='#FF4981'
                icoType='currentState'
                icoData={currentState}
                heading={<IntlMessages id='ico.currentState' />}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <ICOStats
                icon={'/src/assets/images/10348400.svg'}
                bgColor='#0A8FDC'
                icoType='saleStart'
                icoData={saleStart}
                heading={<IntlMessages id='ico.saleStart' />}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <ICOStats
                icon={'/assets/images/etherium.svg'}
                bgColor='#1B9E85'
                icoType='saleEnd'
                icoData={saleEnd}
                heading={<IntlMessages id='ico.saleEnd' />}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <ICOStats
                icon={'/assets/images/litcoin.svg'}
                bgColor='#FFA940'
                icoType='minInvestment'
                icoData={minInvestment}
                heading={<IntlMessages id='ico.minInvestment' />}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <ICOStats
                icon={'/assets/images/ripple.svg'}
                bgColor='#F44D50'
                icoType='maxInvestment'
                icoData={maxInvestment}
                heading={<IntlMessages id='ico.maxInvestment' />}
              />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box sx={{display: 'flex'}}>
          <CircularProgress sx={{mx: 'auto'}} />
        </Box>
      )}
    </>
  );
};

export default ICO;
