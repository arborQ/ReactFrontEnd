import * as React from "react";
import { Alert, Drawer, Form, Input, Icon, Button } from "antd";
import { RouteComponentProps } from "react-router";
import { post } from "bx-utils";
import { string } from "prop-types";

interface ILoginState {
  loading: boolean;
  login: string;
  password: string
  error?: string,
}

export default class Login extends React.PureComponent<RouteComponentProps, ILoginState> {
  componentWillMount(): void {
    this.setState({
      ...this.state,
      ...{
        loading: false,
        login: "",
        password: ""
      }
    });
  }

  public render() {
    return (
      <Drawer title="Validate user" visible={true} style={{maxWidth: 600}} onClose={this.cancel.bind(this)}>
          {
            !!this.state.error
              ? (
                <Alert
                  message={this.state.error}
                  description={this.state.error}
                  type="error"
                />)
              : null
          }
          <Form onSubmit={this.submit.bind(this)}>
            <Form.Item help="give email?" validateStatus={this.state.login === "" ? "error" : "success"}>
              <Input
                disabled={this.state.loading}
                prefix={<Icon type="user" />}
                placeholder="Email"
                value={this.state.login}
                onChange={(v) => this.setState({ ...this.state, login: v.target.value })}
              />
            </Form.Item>
            <Form.Item help="give passowrd?" validateStatus={this.state.password === "" ? "error" : "success"}>
              <Input
                disabled={this.state.loading}
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={(v) => this.setState({ ...this.state, password: v.target.value })}
              />
            </Form.Item>
            <Form.Item>
              <Button.Group>
                <Button loading={this.state.loading} type="primary" htmlType="submit">Submit</Button>
                <Button disabled={this.state.loading} type="dashed" htmlType="button" onClick={this.cancel.bind(this)}>Cancel</Button>
              </Button.Group>
            </Form.Item>
          </Form>
      </Drawer>
    );
  }

  private cancel(e: Event): void {
    e.preventDefault();
    e.stopPropagation();

    this.props.history.replace("/about");
  }

  private submit(e: Event): void {
    e.preventDefault();
    e.stopPropagation();

    this.setState({ ...this.state, loading: true });

    post("/api/account/authorize/", { Login: this.state.login, Passowrd: this.state.password })
      .then(response => {
        this.setState({ ...this.state, loading: false });
      }).catch(() => {
        this.setState({ ...this.state, loading: false, error: "Can't authorize" });
      });
  }
}
