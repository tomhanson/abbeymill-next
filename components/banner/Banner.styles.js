import styled, { type ReactComponentStyled } from 'styled-components';

type Props = {
  img: string,
};

export const BannerStyled: ReactComponentStyled<Props> = styled.section`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('${props => props.img}');
  position: relative;
  background-position: 50%;
  height: 95vh;
  max-height: 670px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(74,74,74,.4);
  }
`;

export const BannerHeadline = styled.div`
  text-align: center;
`;
