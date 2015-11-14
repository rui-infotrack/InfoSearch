import React from 'react';

export default class SearchBox extends React.Component {
  componentDidMount() {
    const { changeSearchType } = this.props;

    $(this.refs.search)
      .search({
        apiSettings: {
          url: 'api/search?term={query}',
          onResponse: function(response) {
            const { type } = response;
            changeSearchType(type);
          }
        },
        cache: false,
        minCharacters: 2,
        maxResults: 10,
        searchDelay: 350
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
