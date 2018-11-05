import * as React from "react";
import { Form, Card, Input, Icon, Button } from "antd";
import { RouteComponentProps} from "react-router";

interface ILoginState {
  loading: boolean;
  login: string;
  password: string
}

export default class Login extends React.PureComponent<RouteComponentProps, ILoginState> {
    public render() {
      console.log(this.props);

      return (
        <Card loading={false} title="Validate user" style={{maxWidth: 600, margin: "10px auto"}}>
          <Form onSubmit={this.submit.bind(this)}>
            <Form.Item help="give email?" validateStatus="error">
              <Input 
              prefix={<Icon type="user" />} 
              placeholder="Email"
              value="arbor@o2.pl"
              />
            </Form.Item>
            <Form.Item help="give passowrd?" validateStatus="error">
              <Input 
              prefix={<Icon type="lock" />} 
              type="password"
              placeholder="Password"
              value=""
              />
            </Form.Item>
            <Form.Item>
              <Button.Group>
                <Button type="primary" htmlType="submit">Submit</Button>
                <Button loading={true} type="dashed" htmlType="button" onClick={this.cancel.bind(this)}>Cancel</Button>
              </Button.Group>
            </Form.Item>
          </Form>
        </Card>
      );
    }

    private cancel(): void {
      this.props.history.push("/about");
    }

    private submit(): void {

    }
  }