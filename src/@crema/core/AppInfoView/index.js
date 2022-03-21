import React from 'react';

import {useSelector} from 'react-redux';
import AppMessageView from '@crema/core/AppMessageView';
import AppLoader from '@crema/core/AppLoader';

const AppInfoView = () => {
  const {error, loading, message} = useSelector(({common}) => common);

  const showMessage = () => {
    return <AppMessageView variant='success' message={message.toString()} />;
  };

  const showError = () => {
    return <AppMessageView variant='error' message={error.toString()} />;
  };

  return (
    <>
      {loading && <AppLoader />}

      {message && showMessage()}
      {error && showError()}
    </>
  );
};

export default AppInfoView;
