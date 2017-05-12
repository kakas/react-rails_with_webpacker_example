
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

injectTapEventPlugin();

const Item4 = () => (
  <MuiThemeProvider>
    <AppBar title="Demo App" >
    </AppBar>
  </MuiThemeProvider>
);

export default Item4