import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  height: auto;
  padding: 75px 25px 50px 25px;
  @media (min-width: ${props => props.theme.breakpoint.desktopMin}) {
    padding: 75px 45px 50px 45px;
  }
`;

export const Header = styled.h2`
  color: #000;
  font-size: 26px;
  margin: 0 0 16px;
`;

export const Hr = styled.hr`
  border: 1px solid #693afa;
  width: 60px;
  margin-bottom: 35px;
`;

export const Logos = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  @media(min-width: ${props => props.theme.breakpoint.tabletMin}) {
    flex-direction: row;
  }
`;

export const LogoWrapper = styled.a`
  cursor: pointer;
  margin: 45px;
  transition: all 0.5s ease;

  &:hover {
    filter: none;
    transform: scale(1.1);
  }
`;
