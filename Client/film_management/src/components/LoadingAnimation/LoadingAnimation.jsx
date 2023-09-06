import React from 'react';
import loader from '../../assets/images/ajax-loading-gif-transparent-background-2.gif';
import style from './Loading.module.css';

const Loading = () => {
  const containerStyle = {
    backgroundImage: `url(${loader})`
  };

  return (
    <div className={style.container}>
      <div className={style.img} style={containerStyle}></div>
    </div>
  );
};

export default Loading;