import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'gatsby';

const ListItem = ({ label, to }) => {
  return (
    <li className="kos__menu__item">
      <ChevronRightIcon />
      <Link className="kos__menu__anchor" to={to}>
        {label}
      </Link>
    </li>
  );
};

export default ListItem;
