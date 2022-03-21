import React from 'react';
import {Box, Button} from '@mui/material';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {Form} from 'formik';

const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = React.useState({
    password: '',
    showPassword: false,
  });
  const [newPassword, setNewPassword] = React.useState({
    password: '',
    showPassword: false,
  });
  const [retypeNewPassword, setRetypeNewPassword] = React.useState({
    password: '',
    showPassword: false,
  });

  const onOldPassword = (prop) => (event) => {
    setOldPassword({...oldPassword, [prop]: event.target.value});
  };

  const onShowOldPassword = () => {
    setOldPassword({
      ...oldPassword,
      showPassword: !oldPassword.showPassword,
    });
  };

  const onDownOldPassword = (event) => {
    event.preventDefault();
  };

  const onNewPassword = (prop) => (event) => {
    setNewPassword({...newPassword, [prop]: event.target.value});
  };

  const onShowNewPassword = () => {
    setNewPassword({
      ...newPassword,
      showPassword: !newPassword.showPassword,
    });
  };

  const onDownNewPassword = (event) => {
    event.preventDefault();
  };

  const onRetypeNewPassword = (prop) => (event) => {
    setRetypeNewPassword({...retypeNewPassword, [prop]: event.target.value});
  };

  const onShowRetypeNewPassword = () => {
    setRetypeNewPassword({
      ...retypeNewPassword,
      showPassword: !retypeNewPassword.showPassword,
    });
  };

  const onDownRetypeNewPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Form autoComplete='off'>
      <AppGridContainer spacing={4}>
        <Grid item xs={12} md={6}>
          <FormControl sx={{width: '100%'}} variant='outlined'>
            <InputLabel htmlFor='oldPassword'>
              <IntlMessages id='common.oldPassword' />
            </InputLabel>
            <OutlinedInput
              id='oldPassword'
              type={oldPassword.showPassword ? 'text' : 'password'}
              value={oldPassword.password}
              onChange={onOldPassword('password')}
              name='oldPassword'
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={onShowOldPassword}
                    onMouseDown={onDownOldPassword}
                    edge='end'
                  >
                    {oldPassword.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label={<IntlMessages id='common.oldPassword' />}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} sx={{p: '0 !important'}} />
        <Grid item xs={12} md={6}>
          <FormControl sx={{width: '100%'}} variant='outlined'>
            <InputLabel htmlFor='newPassword'>
              <IntlMessages id='common.newPassword' />
            </InputLabel>
            <OutlinedInput
              id='newPassword'
              type={newPassword.showPassword ? 'text' : 'password'}
              value={newPassword.password}
              name='newPassword'
              onChange={onNewPassword('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={onShowNewPassword}
                    onMouseDown={onDownNewPassword}
                    edge='end'
                  >
                    {newPassword.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label={<IntlMessages id='common.newPassword' />}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl sx={{width: '100%'}} variant='outlined'>
            <InputLabel htmlFor='retypeNewPassword'>
              <IntlMessages id='common.retypeNewPassword' />
            </InputLabel>
            <OutlinedInput
              id='retypeNewPassword'
              type={retypeNewPassword.showPassword ? 'text' : 'password'}
              value={retypeNewPassword.password}
              name='retypeNewPassword'
              onChange={onRetypeNewPassword('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={onShowRetypeNewPassword}
                    onMouseDown={onDownRetypeNewPassword}
                    edge='end'
                  >
                    {retypeNewPassword.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label={<IntlMessages id='common.retypeNewPassword' />}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Button
              sx={{
                position: 'relative',
                minWidth: 100,
              }}
              color='primary'
              variant='contained'
              type='submit'
            >
              <IntlMessages id='common.saveChanges' />
            </Button>
            <Button
              sx={{
                position: 'relative',
                minWidth: 100,
                ml: 2.5,
              }}
              color='primary'
              variant='outlined'
              type='cancel'
            >
              <IntlMessages id='common.cancel' />
            </Button>
          </Box>
        </Grid>
      </AppGridContainer>
    </Form>
  );
};

export default ChangePasswordForm;
