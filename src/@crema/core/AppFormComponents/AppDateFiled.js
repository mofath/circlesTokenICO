import React from 'react';
import {Field} from 'formik';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const AppDateFiled = (props) => {
  return (
    <Field
      component={DatePicker}
      variant='outlined'
      inputVariant='outlined'
      format='YYYY-MM-DD'
      mask='____-__-__'
      {...props}
      renderInput={(params) => (
        <TextField className={props.className} {...params} />
      )}
    />
  );
};

export default AppDateFiled;

AppDateFiled.propTypes = {
  className: PropTypes.string,
};
