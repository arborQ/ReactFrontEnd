import * as React from "react";
import { Layout, Menu, Icon } from "antd";
import { Route, Link } from "react-router-dom";
import LoginComponent from "./account/login";
import CreateUser from "./account/create";
import UserList from "./account/list";
import { withRouter, RouteComponentProps } from "react-router";
import "antd/dist/antd.css";

class ReactApplication extends React.PureComponent<RouteComponentProps> {
  render(): JSX.Element {
    return (
      <Layout>
        <Layout.Header>React + Webpack</Layout.Header>
        <Layout>
          <Layout.Sider theme={"light"} breakpoint={"sm"}>
            <Menu
              key={this.props.location.pathname}
              defaultSelectedKeys={[this.props.location.pathname]}
            >
              <Menu.ItemGroup key="g1" title="Unauthorized">
                <Menu.Item key="/account/login">
                  <Link to="/account/login">
                    <Icon type="user" /> Log In
                  </Link>
                </Menu.Item>
                <Menu.Item key="/account/create">
                  <Link to="/account/list/create">
                    <Icon type="user-add" />
                    Create
                  </Link>
                </Menu.Item>
                <Menu.Item key="/about">
                  <Link to="/account/list">
                    <Icon type="bulb" />
                    User list
                  </Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu>
          </Layout.Sider>
          <Layout.Content style={{ padding: 10 }}>
            <Route path="/account/login" component={LoginComponent} />
            <Route path="/account/list/create" component={CreateUser} />
            <Route path="/account/list" component={UserList} />
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(ReactApplication);
