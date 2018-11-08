import * as React from "react";
import { Drawer, Skeleton, Form, Input, Button, Popconfirm } from "antd";
import { RouteComponentProps } from "react-router";
import { getUser, editUser } from "bx-services/users";
interface IEditUserState {
  loading: boolean;
  originalUserData: Areas.Account.IUser | null;
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
        userData,
        originalUserData: userData
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
              <Form onSubmit={this.submitForm.bind(this)}>
                <Form.Item>
                  <Input
                    placeholder="Email address"
                    value={this.state.userData.email}
                    onChange={e => {
                      this.updateUserData({ email: e.target.value });
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    placeholder="Login"
                    value={this.state.userData.login}
                    onChange={e => {
                      this.updateUserData({ login: e.target.value });
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    placeholder="First Name"
                    value={this.state.userData.firstName}
                    onChange={e => {
                      this.updateUserData({ firstName: e.target.value });
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    placeholder="Last Name"
                    value={this.state.userData.lastName}
                    onChange={e => {
                      this.updateUserData({ lastName: e.target.value });
                    }}
                  />
                </Form.Item>
                <Button.Group>
                  <Button htmlType="submit" type="primary">
                    Save
                  </Button>
                  <Popconfirm
                    title="Are you sure you want to cancel?"
                    onConfirm={this.cancel.bind(this)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button type="dashed" htmlType="button">
                      Cancel
                    </Button>
                  </Popconfirm>
                </Button.Group>
              </Form>
            )}
          </Skeleton>
        </Drawer>
      </div>
    );
  }

  private cancel(e: Event): void {
    e.preventDefault();
    e.stopPropagation();

    this.props.history.replace("/account/list");
  }

  private updateUserData(partialData: Partial<Areas.Account.IUser>): void {
    if (this.state.userData === null) {
      return;
    }

    this.setState({
      ...this.state,
      ...{
        userData: {
          ...this.state.userData,
          ...partialData
        }
      }
    });
  }

  private submitForm(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.setState({
      ...this.state,
      loading: true
    });
    if (this.state.userData !== null) {
      editUser(this.state.userData).then(s => {
        this.setState(
          {
            ...this.state,
            loading: false
          },
          () => {
            this.props.history.push("/account/list");
          }
        );
      });
    }
  }
}
