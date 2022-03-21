import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import {Form} from 'formik';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import AppTextField from '@crema/core/AppFormComponents/AppTextField';
import {Fonts} from '../../../../shared/constants/AppEnums';
import {styled} from '@mui/material/styles';
import {Box} from '@mui/material';

const StyledDivider = styled(Divider)(({theme}) => ({
  marginTop: 20,
  marginBottom: 20,
  [theme.breakpoints.up('xl')]: {
    marginTop: 32,
    marginBottom: 32,
  },
}));
const AddInvestForm = (props) => {
  const {isSubmitting} = props;
  // const {values, setFieldValue, isSubmitting, setTaskLabels, taskLabels} =
  //   props;

  return (
    <Form
      style={{
        width: '100%',
      }}
      noValidate
      autoComplete='off'
    >
      <Box>
        <AppTextField
          sx={{
            width: '100%',
            fontWeight: Fonts.LIGHT,
            marginBottom: 5,
            marginTop: 3,
          }}
          type='number'
          variant='outlined'
          label={<IntlMessages id='ico.amount' />}
          name='amount'
        />

        <StyledDivider />
      </Box>
      <div style={{textAlign: 'right'}}>
        <Button
          sx={{
            position: 'relative',
            minWidth: 100,
            maxHeight: '180px',
          }}
          color='primary'
          variant='outlined'
          disabled={isSubmitting}
          type='submit'
        >
          <IntlMessages id='common.submit' />
        </Button>
      </div>
    </Form>
  );
};

export default AddInvestForm;

AddInvestForm.defaultProps = {
  isSubmitting: false,
};

AddInvestForm.propTypes = {
  values: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool,
};
