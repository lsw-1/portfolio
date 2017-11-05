
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {

};

function Navigation(props) {
  return (
    <NavigationWrapper>
      <Line />
      <LineMiddle />
      <LineBottom />
    </NavigationWrapper>
  );
}


const NavigationWrapper = styled.div`
    background-color: #171616;
    margin: 2% 5px;
    position: absolute;
    left: 95%;
    height: 3%;
    width: 3%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
`;

const Line = styled.div`
    background-color: rgba(193, 67, 67, 0.8);
    length: 100%;
    height: 70%;
    grid-row: 1;
    &:hover {
        transform: rotate(90degs)
    }
`;

const LineMiddle = Line.extend`
    grid-row: 2 ;
`;
const LineBottom = Line.extend`
    grid-row: 3 ;
`;


Navigation.propTypes = propTypes;
export default Navigation;
