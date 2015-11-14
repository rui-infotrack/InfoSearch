import React from 'react';

export default class SearchBox extends React.Component {
  componentDidMount() {
    $(this.refs.search)
      .search({
        apiSettings: {
          url: 'api/search?term={query}'
        },
        cache: false,
        minCharacters: 2,
        maxResults: 10,
        searchDelay: 250
      });
  }

  render() {
    return (
      <div ref="search" className="ui search">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Company/Person/Address" />
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
    );
  }
}
