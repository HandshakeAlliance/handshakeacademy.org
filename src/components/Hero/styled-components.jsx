import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background: #fff;
  display: flex;
  flex-direction: column-reverse;
  height: auto;
  overflow: hidden;

  @media(min-width: ${props => props.theme.breakpoint.desktopMin}) {
    align-items: stretch;
    flex-direction: row;
    height: auto;
    justify-content: space-around;
    padding: 15px 0 135px 0;
    top: ${props => props.theme.breakpoint.navbarHeightDesktop};
  }
`;

export const Body = styled.div`
  align-items: center;
  max-width: 80%;
  display: flex;
  flex-grow: 2;
  font-size: 14px;
  font-weight: 400;
  flex-direction: column;
  padding: 40px 0 70px 0;

  @media(min-width: ${props => props.theme.breakpoint.desktopMin}) {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    font-size: 14px;
    line-height: 1.4;
    max-width: 40%;
    padding: 0;
    text-align: left;
  }
`;

export const Header = styled.h1`
  font-size: 42px;
  margin-top: 0;
`;

export const Description = styled.p`
  font-size: 18px;
`;

export const Logo = styled.div`
  display: none;

  @media(min-width: ${props => props.theme.breakpoint.desktopMin}) {
    display: block;
  }
`;

export const Button = styled.a`
  background: #693afa;
  border-color: #693afa;
  border-radius: 50px;
  color: #f2f2f2;
  font-size: 20px;
  padding: 10px 15px;
  margin: 25px 0;
  outline: none;
  text-decoration: none;
  &:hover {
    background: #4223a4;
    border-color: #4223a4;
    color: #f2f2f2;
    cursor: pointer;
    transition: .2s ease-in-out;
  }
`;
