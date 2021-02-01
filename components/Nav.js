import styled, { css, keyframes } from 'styled-components';

const StyledDigitalDigit = styled.div`
  position: relative;
  width: 0.8em;
  text-align: center;
  overflow: hidden;
  color: red;
`;


const previousUp = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
`;

const previousDown = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(100%); }
`;

const StyledDigitalPrevious = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0.8em;
  text-align: center;
  color: red;
  animation: ${props =>
      props.direction === 'down' ? previousDown : previousUp}
    0.5s forwards;
`;

const nextUp = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(0); }
`;

const nextDown = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
`;

const StyledDigitalNext = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0.8em;
  text-align: center;
  color: red;
  animation: ${props => (props.direction === 'down' ? nextDown : nextUp)} 0.5s
    forwards;
`;

export {
    StyledDigitalDigit,
    StyledDigitalPrevious,
    StyledDigitalNext,
  };

