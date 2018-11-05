import * as React from "react";
import { Drawer } from 'antd';
import styled from "styled-components";

const HeaderElement = styled.header`
  background-color: #FFF;
  box-shadow: 0 2px 8px #f0f1f2;
  font-size: 2em;
  font-family: Roboto;
  padding: 10px;
`;
const BodyElement = styled.div`
  font-family: Roboto;
`;

export class ReactApplication extends React.Component {
  public render(): JSX.Element {
    return (<div>
      <HeaderElement>
        React + Webpack
      </HeaderElement>
      <Drawer title="Navigate" visible={false}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <BodyElement>ds</BodyElement>
    </div>);
  }
}
