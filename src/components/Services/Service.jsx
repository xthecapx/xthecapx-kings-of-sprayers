import React from 'react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const TYPES = {
  help: 'help',
  waranty: 'waranty',
  dealer: 'dealer'
};

const ICONS = {
  [TYPES.help]: InfoOutlinedIcon,
  [TYPES.waranty]: EmojiObjectsIcon,
  [TYPES.dealer]: CloudDoneIcon
};

const Service = ({ title, description, button, icon }) => {
  const ICON = ICONS[icon];

  return (
    <div className="column">
      <div className="kos__card box">
        <article className="media">
          <div className="media-left kos__card__icon">
            <ICON />
          </div>
          <div className="media-content">
            <h3 className="kos__card__title">{title}</h3>
            <p className="kos__card__description">{description}</p>
            <button className="button is-rounded kos__btn--green">
              <span>{button}</span>
              <ChevronRightIcon />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Service;
