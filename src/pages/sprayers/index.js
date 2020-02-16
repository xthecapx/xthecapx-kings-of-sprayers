import React from 'react';
import Grid from '@material-ui/core/Grid';
import ReactPaginate from 'react-paginate';

import Layout from '../../components/Layouts/Main';
import { useSprayers } from './useSprayers';

const Sprayers = () => {
  const {
    error,
    offset,
    pageCount,
    perPage,
    setPage,
    sprayers,
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
            <div>
              {sprayers.slice(offset, offset + perPage).map(spray => (
                <div key={spray.id}>{spray.id}: {spray.title}</div>
              ))}
            </div>
            <ReactPaginate
              pageCount={pageCount}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              onPageChange={page => {
                setPage(page.selected + 1);
              }}
            />
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Sprayers;
