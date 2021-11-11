import React from 'react';
import useStore from '../../../store/store';
import classes from './Alert.module.scss';

const Alert = () => {
  const { alertType, alertMessage } = useStore();
  return (
    <div className={`${classes.alert} ${classes[alertType]}`}>
      {alertMessage}
    </div>
  );
};

export default Alert;
