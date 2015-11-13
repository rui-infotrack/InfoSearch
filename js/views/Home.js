import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui center aligned icon header">
            <img src="images/logo.png" className="ui small logo image" />
            <div className="content logo-text">
              iSearch
            </div>
          </h2>
          <div className="ui fluid icon input">
            <input type="text" placeholder="Search a very wide input..." />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
    );
  }
}
