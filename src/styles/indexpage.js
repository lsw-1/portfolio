import styled, { keyframes } from 'styled-components';

function expandline(lineLength) {
  return keyframes`
  from {
    width: 0;
  }
  to {
   width: ${lineLength};
  }
  `;
}

function createLine(lineLength, yposition, dur) {
  return styled.div`
    position: absolute;
    width: ${lineLength}px;
    height: 0px;
    left: 0px;
    top: ${yposition}px;
    border: 1px solid #828282;
    animation ${expandline(lineLength)} ${dur}s ease-out;  
  `;
}
export const LineOne = createLine(1307, 594, 2);

export const LineTwo = createLine(1182, 615, 1);

export const LineThree = createLine(1086, 640, 4);

export const Main = styled.div`
width: 100%;
height: 1180px;
left: 0px;
top: 0px;

background: #171616;
`;

export const MainText = styled.p`
position: absolute;
width: 891px;
height: 98px;
left: 78px;
top: 463px;

font-family: Rationale, sans-serif;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 98px;

color: #828282;
`;

