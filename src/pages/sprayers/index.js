import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Pagination from 'rc-pagination';
import { Link, graphql } from 'gatsby';
import 'rc-pagination/assets/index.css';

import Layout from '../../components/Layouts/Main';

import { SprayersContext } from '../../resources/Sprayers';

const Sprayers = ({ data }) => {
  const { page, perPage, setPage } = useContext(SprayersContext);
  const offset = (page - 1) * perPage;

  const getSprayers = sprayers => {
    return sprayers.slice(offset, offset + perPage);
  };

  console.log(data.sprayersList.list)

  return (
    <Layout navbarFixed blueLogo removeHeader>
      <div className="container kos__sprayers">
        <Grid container>
          <Grid item xs={3}>
            filters
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              {getSprayers(data.sprayersList.list).map(sprayer => (
                <div key={sprayer.id} className="kos__sprayerCard">
                  <div className="kos__sprayerCard__imageWrapper">
                    <img
                      className="kos__sprayerCard__img"
                      src={sprayer.featured_image}
                      alt={sprayer.title}
                    />
                  </div>
                  <div className="kos__sprayerCard__sku">
                    {`SKU: ${sprayer.variants[0] && sprayer.variants[0].sku}`}
                  </div>
                  <div className="kos__sprayerCard__content">
                    {sprayer.title}
                  </div>
                  <div className="kos__sprayerCard__footer">
                    <Link
                      className="button is-rounded kos__btn--green kos__btn--big"
                      to={`/products/${sprayer.handle}`}
                    >
                      <span>Details</span>
                      <ChevronRightIcon />
                    </Link>
                  </div>
                </div>
              ))}
            </Grid>
            <Pagination
              total={data.sprayersList.list.length + 1}
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

export const pageQuery = graphql`
  query SprayersList {
    sprayersList {
      list {
        compare_at_price
        available
        description
        featured_image
        handle
        id
        tags {
          Frame
          Pump_Type
          SKU
          Tank_Size
        }
        title
        variants {
          sku
          title
          id
        }
      }
    }
  }
`;
