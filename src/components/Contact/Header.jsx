import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';

const Header = props => {
  const { title, description } = props;

  return (
    <div className="kos__contact__header">
      <EmailIcon className="kos__contact__icon" />
      <h1 className="kos__contact__title">{title}</h1>
      <p className="kos__contact__disclaimer">{description}</p>
    </div>
  );
};

export default Header;
