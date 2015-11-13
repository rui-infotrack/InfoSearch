import React, { PropTypes } from 'react';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return (
      <div className="ui main text container">
        {this.props.children}
      </div>
    );
  }
}
