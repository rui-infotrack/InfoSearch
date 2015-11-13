import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { ReduxRouter } from 'redux-router';

export default class Root extends React.Component {
  static propTypes = {
    store : PropTypes.object.isRequired
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <ReduxRouter>
          {routes}
        </ReduxRouter>
      </Provider>
    );
  }
}
