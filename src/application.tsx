import * as React from "react";
import { Layout, Menu, Icon } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";

const HeaderElement = styled.header`
  background-color: #fff;
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
    return (
      <Layout>
        <Layout.Header>React + Webpack</Layout.Header>
        <Layout>
          <Layout.Sider theme={"light"} breakpoint={"sm"}>
            <Menu>
              <Menu.ItemGroup key="g1" title="Unauthorized">
                <Menu.Item key="login">Log In</Menu.Item>
                <Menu.Item key="create">Create</Menu.Item>
              </Menu.ItemGroup>
            </Menu>
          </Layout.Sider>
          <Layout.Content>content</Layout.Content>
        </Layout>
        <Layout.Footer>footer</Layout.Footer>
      </Layout>
    );
  }
}
