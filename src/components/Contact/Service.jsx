import React from 'react';
import Grid from '@material-ui/core/Grid';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import DraftsIcon from '@material-ui/icons/Drafts';

export const TYPES = {
  email: 'email',
  fax: 'fax',
  help: 'help',
  phone: 'phone',
  time: 'time'
};

const ICONS = {
  [TYPES.email]: AlternateEmailIcon,
  [TYPES.fax]: DraftsIcon,
  [TYPES.help]: InfoOutlinedIcon,
  [TYPES.phone]: PhoneIcon,
  [TYPES.time]: AccessTimeIcon
};

const Service = ({ title, icon = TYPES.help, content }) => {
  const Icon = ICONS[icon];
  return (
    <Grid item xs={3} className="kos__contactServices__services">
      <Grid container justify="center" alignContent="center" alignItems="center">
        <Grid item xs={2}>
          <Icon className="kos__contactServices__icon" />
        </Grid>
        <Grid item xs={10}>
          <h2 className="kos__contactServices__title">{title}</h2>
          <p className="kos__contactServices__content">{content}</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Service;
