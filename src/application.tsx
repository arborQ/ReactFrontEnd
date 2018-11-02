import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Menu from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export class ReactApplication extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Menu open={false}>
              <MenuItem>dsa</MenuItem>
              <MenuItem>dsa 2</MenuItem>
              <MenuItem>dsa 3</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Paper elevation={1} style={{ padding: 10, maxWidth: "90%", margin: "10px auto" }}>
          <Typography variant="h5" component="h3">
            Welcome :)
          </Typography>
        </Paper>
      </div>
    );
  }
}
