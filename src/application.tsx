import * as React from "react";
import { Layout, Menu, Icon } from "antd";
import { Route, Link } from "react-router-dom";
import LoginComponent from "./authorize/Login";
import {withRouter, RouteComponentProps} from "react-router";
import "antd/dist/antd.css";

class Create extends React.Component {
  public render() {
    return <div>Create component</div>
  }
}

class About extends React.Component {
  public render() {
    return <div>About component</div>
  }
}

class ReactApplication extends React.PureComponent<RouteComponentProps> {
  public render(): JSX.Element {
    return (
      <Layout>
        <Layout.Header>React + Webpack</Layout.Header>
        <Layout>
          <Layout.Sider theme={"light"} breakpoint={"sm"}>
            <Menu key={this.props.location.pathname} defaultSelectedKeys={[this.props.location.pathname]}>
              <Menu.ItemGroup key="g1" title="Unauthorized">
                <Menu.Item key="/login"><Link to="/login">Log In</Link></Menu.Item>
                <Menu.Item key="/create"><Link to="/create">Create</Link></Menu.Item>
                <Menu.Item key="/about"><Link to="/about">About</Link></Menu.Item>
              </Menu.ItemGroup>
            </Menu>
          </Layout.Sider>
          <Layout.Content>
            <Route path="/login" component={LoginComponent} />
            <Route path="/create" component={Create} />
            <Route path="/about" component={About} />
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(ReactApplication);