import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background: #fff;
  display: flex;
  height: 60px;
  justify-content: flex-start;
  padding: 0 12px;

  @media (min-width: ${props => props.theme.breakpoint.desktopMin}) {
    height: 80px;
    padding: 0 50px;
  }
`;

export const LogoLeft = styled.div`
  margin-right: 24px;
  width: auto;
`;

export const Item = styled.a`
  color: hsla(0, 0%, 46%, .8);
  font-weight: 600;
  letter-spacing: 1px;
  margin: 18px;
  text-decoration: none;
`;

export const Contribute = styled.a`
  border: 2px solid #3cd458;
  border-radius: 50px;
  color: #3cd458;
  font-weight: 600;
  margin-left: auto;
  padding: 8px 20px 6px;
  text-decoration: none;
  transition: all 0.4s ease;

  &:hover {
    background: #3cd458;
    color: #fff;
  }
`;
