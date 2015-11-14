import React, { PropTypes } from 'react';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return (
      <div>
        <div className="ui main text container">
          {this.props.children}
        </div>
        <div className="ui inverted vertical footer segment">
          <div className="ui container">
            &copy;2015 InfoTrack Pty Ltd
          </div>
        </div>
      </div>
    );
  }
}
