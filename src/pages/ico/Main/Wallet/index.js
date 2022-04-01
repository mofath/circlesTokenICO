import {useState} from 'react';
import Button from '@mui/material/Button';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {alpha, Box} from '@mui/material';
import {Fonts} from '../../../../shared/constants/AppEnums';
import AppCard from '../../../../@crema/core/AppCard';
import {useContractContext} from '@crema/utility/AppContractProvider';
import {shortenAddress} from '../../../../utils/ShortenAddress';
import Invest from '../Invest';

const Wallet = () => {
  const {connectWallet, currentAccount} = useContractContext();
  const shortenCurrentAccount = shortenAddress(currentAccount);

  const [isInvestOpen, setInvestOpen] = useState(false);

  const onOpenInvest = () => {
    setInvestOpen(true);
  };

  const onCloseInvest = () => {
    setInvestOpen(false);
  };

  return (
    <>
      <Box>
        <Box
          component='h2'
          sx={{
            color: 'text.primary',
            fontSize: 16,
            textTransform: 'uppercase',
            mb: {xs: 4, sm: 4, xl: 6},
            fontWeight: Fonts.BOLD,
          }}
        >
          <IntlMessages id='dashboard.yourWallet' />
        </Box>
        <AppCard sxStyle={{}}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                position: 'relative',
              }}
            >
              <Box
                component='h3'
                sx={{
                  fontWeight: Fonts.MEDIUM,
                  fontSize: 20,
                }}
              >
                {shortenCurrentAccount}
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Box>
                <Button
                  sx={{
                    backgroundColor: (theme) =>
                      alpha(theme.palette.primary.main, 0.1),
                    color: 'primary.main',
                    fontWeight: Fonts.LIGHT,
                    textTransform: 'capitalize',
                    width: 110,
                    fontSize: 16,
                    '&:hover, &:focus': {
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.15),
                      color: 'primary.main',
                    },
                    lineHeight: {xs: '16px', sm: '20px', xl: '26px'},
                  }}
                  onClick={onOpenInvest}
                >
                  <IntlMessages id='common.send' />
                </Button>
              </Box>
              <Box
                sx={{
                  ml: 3,
                }}
              >
                <Button
                  onClick={connectWallet}
                  variant='contained'
                  sx={{
                    fontWeight: Fonts.LIGHT,
                    textTransform: 'capitalize',
                    width: 110,
                    fontSize: 16,
                    lineHeight: {xs: '16px', sm: '20px', xl: '26px'},
                  }}
                >
                  {currentAccount == [] ? (
                    <IntlMessages id='common.connectWallet' />
                  ) : (
                    <IntlMessages id='common.connected' />
                  )}
                </Button>
              </Box>
            </Box>
          </Box>
        </AppCard>
      </Box>
      <Invest isInvestOpen={isInvestOpen} onCloseInvest={onCloseInvest} />
    </>
  );
};

export default Wallet;
