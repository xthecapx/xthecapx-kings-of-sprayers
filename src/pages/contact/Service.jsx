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
    <Grid item xs={3}>
      <Grid container>
        <Grid item xs={1}>
          <Icon />
        </Grid>
        <Grid item xs={11}>
          <h2>{title}</h2>
          <p>{content}</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Service;
