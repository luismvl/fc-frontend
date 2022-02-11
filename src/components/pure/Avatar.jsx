import React from 'react';
import '../../styles/general.css'

const Avatar = ({ username }) => {
  return (
    <div className="avatar">
      {username?.slice(0,2).toUpperCase() || 'NA'}
    </div>
  );
};

export default Avatar;
