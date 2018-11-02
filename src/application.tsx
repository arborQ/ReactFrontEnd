import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Menu from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";

export class ReactApplication extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <IconButton>?</IconButton>
            <Menu open={false}>
              <MenuItem>dsa</MenuItem>
              <MenuItem>dsa 2</MenuItem>
              <MenuItem>dsa 3</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <div>
          <input />
        </div>
        <div>Footer</div>
      </div>
    );
  }
}
