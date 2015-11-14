import React from 'react';
import SearchBox from 'components/SearchBox';

export default class Home extends React.Component {
  render() {
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
                <SearchBox />
              </div>
            </div>
            <div className="fields">
              <div className="four wide field">
              </div>
              <div className="twelve wide field">
                <span className="ui mini images">
                  <img src="images/company.png" className="ui image" />
                  <img src="images/person.png" className="ui image" />
                  <img src="images/address.png" className="ui image" />
                </span>
                <button type="submit" className="ui teal button" tabindex="0">REVEAL</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
