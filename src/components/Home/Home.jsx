import React from 'react'
import PropTypes from 'prop-types'

const Home = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Home.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

export default Home
