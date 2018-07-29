import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  ${props => (props.align ? `align-items: ${props.align}` : null)};
  ${props => (props.justify ? `justify-content: ${props.justify}` : null)};
`;

export default Flex;
