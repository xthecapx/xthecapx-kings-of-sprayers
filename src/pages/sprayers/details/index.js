// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import { graphql } from 'gatsby';

// import Layout from '../../../components/Layouts/Main';

// const Sprayers = ({ location, data }) => {
//   const search = location.search
//     .slice(1)
//     .split('&')
//     .map(p => p.split('='))
//     .reduce((obj, pair) => {
//       const [key, value] = pair.map(decodeURIComponent);
//       return { ...obj, [key]: value };
//     }, {});

//   const sprayer = data.sprayers.list.find(
//     sprayer => String(sprayer.id) === search.id
//   );
//   console.log(search)
//   console.log(sprayer);
//   return (
//     <Layout navbarFixed blueLogo>
//       <div className="container kos__sprayers">
//         <Grid container>
//           <Grid item xs={3}>
//             filters
//           </Grid>
//           <Grid item xs={9}>
//             Details
//           </Grid>
//         </Grid>
//       </div>
//     </Layout>
//   );
// };

// export default Sprayers;

// export const pageQuery = graphql`
//   query Sprayer {
//     sprayers {
//       list {
//         compare_at_price
//         available
//         description
//         featured_image
//         handle
//         id
//         tags {
//           Frame
//           Pump_Type
//           SKU
//           Tank_Size
//         }
//         variants {
//           sku
//           title
//           id
//         }
//       }
//     }
//   }
// `;
