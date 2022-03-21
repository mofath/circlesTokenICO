import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {Fonts} from '../../../../shared/constants/AppEnums';

const TabForm = (props) => {
  const {data} = props;

  const [inputValue, setValue] = useState(data.value);
  const [inputPrice, setPrice] = useState(data.price);
  const [inputAmount, setAmount] = useState(data.amount);

  return (
    <Box>
      <form noValidate autoComplete='off'>
        <Box
          sx={{
            mb: 5,
          }}
        >
          <Box
            sx={{
              mb: 2,
              color: 'grey.400',
              textAlign: 'right',
              fontSize: 14,
            }}
          >
            <IntlMessages id='dashboard.btc' />
          </Box>
          <TextField
            fullWidth
            variant='outlined'
            label={<IntlMessages id='common.volume' />}
            value={inputValue}
            onChange={(e) => setValue(e.target.value)}
            sx={{
              '& .inputText': {
                fontWeight: Fonts.MEDIUM,
                width: '100%',
              },
            }}
            InputProps={{
              className: 'inputText',
            }}
          />
        </Box>
        <Box
          sx={{
            mb: 5,
          }}
        >
          <Box
            sx={{
              mb: 2,
              color: 'grey.400',
              textAlign: 'right',
              fontSize: 14,
            }}
          >
            <IntlMessages id='dashboard.btc' />
          </Box>
          <TextField
            fullWidth
            variant='outlined'
            label={<IntlMessages id='common.price' />}
            value={inputPrice}
            onChange={(e) => setPrice(e.target.value)}
            sx={{
              '& .inputText': {
                fontWeight: Fonts.MEDIUM,
                width: '100%',
              },
            }}
            InputProps={{
              className: 'inputText',
            }}
          />
        </Box>
        <Box
          sx={{
            mb: 5,
          }}
        >
          <Box
            sx={{
              mb: 2,
              color: 'grey.400',
              textAlign: 'right',
              fontSize: 14,
            }}
          >
            <IntlMessages id='dashboard.btc' />
          </Box>
          <TextField
            fullWidth
            variant='outlined'
            label={<IntlMessages id='common.amount' />}
            value={inputAmount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{
              '& .inputText': {
                fontWeight: Fonts.MEDIUM,
                width: '100%',
              },
            }}
            InputProps={{
              className: 'inputText',
            }}
          />
        </Box>
      </form>
    </Box>
  );
};

export default TabForm;

TabForm.defaultProps = {
  data: {
    value: '',
    price: '',
    amount: '',
  },
};

TabForm.propTypes = {
  data: PropTypes.object,
};
