import React from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

import Layout from '../../components/Layouts/Main';
import { useSprayers } from './useSprayers';

const Sprayers = () => {
  const {
    error,
    offset,
    pageCount,
    perPage,
    setPage,
    sprayers
  } = useSprayers();

  if (error) {
    return <div>failed to load</div>;
  }
  if (!sprayers) {
    return <div>loading...</div>;
  }

  console.log(sprayers);

  return (
    <Layout navbarFixed blueLogo>
      <div className="container kos__sprayers">
        <Grid container>
          <Grid item xs={3}>
            filters
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              {sprayers.slice(offset, offset + perPage).map(sprayer => (
                <div key={sprayer.id} className="kos__sprayerCard">
                  <div className="kos__sprayerCard__imageWrapper">
                    <img
                      className="kos__sprayerCard__img"
                      src={sprayer.featured_image}
                    />
                  </div>
                  <div className="kos__sprayerCard__sku">
                    {`SKU: ${sprayer.variants[0] && sprayer.variants[0].sku}`}
                  </div>
                  <div className="kos__sprayerCard__content">
                    {sprayer.title}
                  </div>
                </div>
              ))}
            </Grid>
            <Pagination
              total={sprayers.length + 1}
              showLessItems
              prevIcon={<ArrowBackIcon className="kos__pagination__icon" />}
              nextIcon={<ArrowForwardIcon className="kos__pagination__icon" />}
              onChange={page => {
                setPage(page);
              }}
              className="kos__pagination"
              locale={{}}
            />
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Sprayers;
