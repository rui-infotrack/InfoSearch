import React from 'react';
import { connect } from 'react-redux';
import SearchBox from 'components/SearchBox';
import SearchTypeChooser from 'components/SearchTypeChooser';
import { changeSearchType } from 'actions/SearchActions';
import classnames from 'classnames';

class Search extends React.Component {
  render() {
    const { search, changeSearchType } = this.props;
    const searchType = search.type;
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui center aligned icon header">
            <img src="images/logo.png" className="ui small logo image" />
          </h2>
          <form className="ui search form">
            <div className="fields">
              <div className="four wide field">
                <input type="text" placeholder="Matter" />
              </div>
              <div className="twelve wide field">
                <SearchBox changeSearchType={changeSearchType} />
              </div>
            </div>
            <div className="fields">
              <div className="four wide field">
              </div>
              <div className="twelve wide field">
                <SearchTypeChooser searchType={search.type} changeSearchType={changeSearchType} />
                <button type="submit" className="ui teal button" tabIndex="0">REVEAL</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeSearchType: searchType => dispatch(changeSearchType(searchType))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
