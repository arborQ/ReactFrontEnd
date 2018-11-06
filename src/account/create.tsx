import * as React from "react";
import { Drawer } from "antd";
import { RouteComponentProps } from "react-router";

export default class Create extends React.PureComponent<RouteComponentProps> {
  render() {
    return (
      <div>
        <Drawer visible={true} title="Create user" onClose={() => { this.props.history.goBack(); }}>Create component</Drawer>
      </div>
    );
  }
}
