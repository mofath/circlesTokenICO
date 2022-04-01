import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import IntlMessages from '@crema/utility/IntlMessages';
import AddInvestForm from './AddInvestForm';
import PropTypes from 'prop-types';
import AppDialog from '@crema/core/AppDialog';
import {useContractContext} from '@crema/utility/AppContractProvider';

const validationSchema = yup.object({
  amount: yup
    .number()
    .required(<IntlMessages id='validation.amountRequired' />)
    .positive()
    .min(0.7)
    .max(10),
});

const Invest = ({isInvestOpen, onCloseInvest}) => {
  const [taskLabels, setTaskLabels] = useState([]);
  const {invest} = useContractContext();

  return (
    <AppDialog
      dividers
      fullHeight
      maxWidth='md'
      open={isInvestOpen}
      onClose={() => onCloseInvest()}
      title={<IntlMessages id='ico.invest' />}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          amount: 0.7,
        }}
        validationSchema={validationSchema}
        onSubmit={async (data, {setSubmitting, resetForm}) => {
          console.log(
            '🚀 ~ file: index.js ~ line 47 ~ onSubmit={ ~ data',
            data,
          );
          setSubmitting(true);
          // add the invoke function for blockchain
          await invest(data.amount.toString());
          onCloseInvest();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({isSubmitting, values, setFieldValue}) => (
          <AddInvestForm
            isSubmitting={isSubmitting}
            values={values}
            setFieldValue={setFieldValue}
            setTaskLabels={setTaskLabels}
            taskLabels={taskLabels}
          />
        )}
      </Formik>
    </AppDialog>
  );
};

export default Invest;

Invest.propTypes = {
  isInvestOpen: PropTypes.bool.isRequired,
  onCloseInvest: PropTypes.func.isRequired,
};
