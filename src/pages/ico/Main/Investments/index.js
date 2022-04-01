import InvestmentsTable from './InvestmentsTable';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@mui/material/Box';
import {Fonts} from '../../../../shared/constants/AppEnums';
import AppCard from '../../../../@crema/core/AppCard';
import {useContractContext} from '@crema/utility/AppContractProvider';

const Investments = () => {
  const {userInvestments} = useContractContext();
  console.log(
    '🚀 ~ file: index.js ~ line 10 ~ Investments ~ userInvestments',
    userInvestments,
  );

  return (
    <AppCard
      title={
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              mr: {xs: 3, lg: 8},
              fontWeight: Fonts.BOLD,
              fontSize: 16,
            }}
            component='h3'
          >
            <IntlMessages id='ico.investments' />
          </Box>
        </Box>
      }
      contentStyle={{px: 0}}
      sxStyle={{height: 1}}
    >
      {userInvestments <= 1 && (
        <InvestmentsTable investmentTableData={userInvestments} />
      )}
    </AppCard>
  );
};

export default Investments;
