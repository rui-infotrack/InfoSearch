import React from 'react';

export default class SearchBox extends React.Component {
  render() {
    return (
      <div className="ui icon input">
        <input type="text" placeholder="Company/Person/Property" />
        <i className="search icon"></i>
      </div>
    );
  }
}
