import styled from 'styled-components';

const Icon = styled.img`
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px`};
`;

export default Icon;
