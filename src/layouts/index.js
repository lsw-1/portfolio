/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Navigation from '../components/Navigation';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Rationale" rel="stylesheet" />
    </Helmet>
    <div>
      <Navigation />
      {children()}
    </div>
  </div>
);


TemplateWrapper.defaultProps = {
  children: [],
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

// const Wrapper = styled.div`
//   display: grid;
// `;

export default TemplateWrapper;
