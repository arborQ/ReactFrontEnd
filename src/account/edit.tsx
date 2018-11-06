import * as React from "react";
import { Drawer, Skeleton } from "antd";
import { RouteComponentProps } from "react-router";

export default class Create extends React.PureComponent<RouteComponentProps> {
  render() {
    return (
      <div>
        <Drawer visible={true} title="Edit user" onClose={() => { this.props.history.goBack(); }}>
          <Skeleton avatar paragraph={{ rows: 6 }} />
        </Drawer>
      </div>
    );
  }
}
