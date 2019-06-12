import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 75px 0 75px 0;
`;

export const Header = styled.h2`
  color: #000;
  font-size: 24pt;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const CardContainer = styled.div`
  display: flex;
  min-height: 400px;
  justify-content: center;
  max-width: 720px;
  width: 100%;
`;

export const Card = styled.a`
  border: 1px solid #f1f2f3;
  border-radius: 4px;
  color: #696969;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 80px 32px;
  margin: 15px;
  text-decoration: none;
  transition: all 0.8s ease;

  &:hover {
    border: 1px solid #693afa;
    color: #693afa;
  }
`;

export const CardIcon = styled.div``;

export const CardHeader = styled.h3`
  font-weight: 600;
`;

export const CardBody = styled.p``;