import React from 'react';
import classnames from 'classnames';

export default class SearchTypeChooser extends React.Component {
  render() {
    const { searchType } = this.props;

    return (
      <span className="ui mini images">
        {['company', 'person', 'address'].map(type => (
          <img
            key={type}
            src={`images/${type}.png`}
            className={classnames('ui image', { active: searchType == type })}
            onClick={this.handleTypeClick.bind(this, type)}
          />
        ), this)}
      </span>
    );
  }

  handleTypeClick(type) {
    const { changeSearchType } = this.props;

    changeSearchType(type);
  }
}
