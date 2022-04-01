import Grid from '@mui/material/Grid';
import Wallet from './Wallet';
// import ICO from './ICO';
// import Bitcoin from './Bitcoin';
// import BuySell from './BuySell';
// import BtcVolumeCurrency from './BtcVolumeCurrency';
// import PopularCoins from './PopularCoins';
import AppGridContainer from '@crema/core/AppGridContainer';
import AppInfoView from '@crema/core/AppInfoView';
import AppAnimate from '../../../@crema/core/AppAnimate';
import Investments from './Investments';

const Main = () => {
  return (
    <>
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <AppGridContainer>
          <Grid item xs={12} md={12}>
            <Wallet />
          </Grid>

          {/* <Grid item xs={12} md={12}>
            <ICO />
          </Grid> */}

          <Grid item xs={12} md={12}>
            <Investments />
          </Grid>

          {/* <Grid item xs={12} md={8}>
              <Bitcoin coinGraphData={cryptoData.coinGraphData} />
            </Grid>

            <Grid item xs={12} md={4}>
              <BuySell buySell={cryptoData.buySell} />
            </Grid>

            <Grid item xs={12} md={4}>
              <BtcVolumeCurrency data={cryptoData.btcChartData} />
            </Grid>

            <Grid item xs={12} md={8}>
              <PopularCoins popularCoins={cryptoData.popularCoins} />
            </Grid> */}
        </AppGridContainer>
      </AppAnimate>
      <AppInfoView />
    </>
  );
};

export default Main;
