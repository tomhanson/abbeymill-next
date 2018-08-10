import styled from 'styled-components';

const Flex = styled.div`
  position: relative;
  display: flex;
  ${props => (props.align ? `align-items: ${props.align}` : null)};
  ${props => (props.justify ? `justify-content: ${props.justify}` : null)};
  height: 100%;
`;

export default Flex;
