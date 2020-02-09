import styled from "styled-components";
import { colors } from "../../styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.3px solid ${colors.smoke};
  width: 217px;
  height: 316px;
  background-color: white;
  &:hover {
    -webkit-box-shadow: 10px 10px 34px -16px rgba(204, 204, 204, 1);
    -moz-box-shadow: 10px 10px 34px -16px rgba(204, 204, 204, 1);
    box-shadow: 10px 10px 34px -16px rgba(204, 204, 204, 1);
  }
  padding: 10px;
`;

const Brand = styled.span`
  color: #b8b8b8;
  font-weight: 500;
`;

const Preview = styled.img`
  width: 150px;
  height: auto;
  margin-top: 10px;
  align-self: center;
  border-bottom: 0.3px solid #eee;
  cursor: pointer;
`;

const Name = styled.span`
  margin-top: 10px;
  text-transform: uppercase;
  font-size: 0.8em;
  text-align: center;
  color: #275a53;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const OldPrice = styled.span`
  color: #b8b8b8;
  text-decoration: line-through;
  margin-top: 15px;
  font-size: 0.7em;
`;

const Price = styled.span`
  color: #275a53;
  font-size: 1.3em;
  font-weight: bold;
`;

const Buy = styled.button`
  text-transform: uppercase;
  font-weight: 1.2em;
  color: white;
  background-color: ${colors.dark};
  margin-top: 10px;
  height: 35px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #222;
  }

  svg {
    margin-left: 10px;
  }
`;

export { Container, Brand, Preview, Name, OldPrice, Price, Buy };