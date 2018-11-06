import * as React from "react";
import { Drawer, Skeleton, Form, Input } from "antd";
import { RouteComponentProps } from "react-router";
import { getUser } from "bx-services/users";
interface IEditUserState {
  loading: boolean;
  userData: Areas.Account.IUser | null;
}

export default class Create extends React.PureComponent<
  RouteComponentProps<{ id: string }>,
  IEditUserState
> {
  componentWillMount(): void {
    this.setState({
      loading: false,
      userData: null
    });
  }
  componentDidMount() {
    this.setState({
      ...this.state,
      userData: null
    });
    getUser(+this.props.match.params.id).then(userData => {
      this.setState({
        ...this.state,
        userData
      });
    });
  }
  render() {
    return (
      <div>
        <Drawer
          visible={true}
          title="Edit user"
          onClose={() => {
            this.props.history.goBack();
          }}
        >
          <Skeleton
            loading={this.state.userData === null}
            avatar
            paragraph={{ rows: 6 }}
          >
            {this.state.userData === null ? null : (
              <Form>
                <Form.Item>
                  <Input
                    placeholder="Email address"
                    value={this.state.userData.email}
                    onChange={() => {}}
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    placeholder="Login"
                    value={this.state.userData.login}
                    onChange={() => {}}
                  />
                </Form.Item>
              </Form>
            )}
          </Skeleton>
        </Drawer>
      </div>
    );
  }
}
