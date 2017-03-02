import React, { Component } from 'react';
import classNames from 'classnames';
import { NavLink, Navicon } from 'src';

import FetchHelper from 'demo/classes/FetchHelper';

import logo from '../images/whiplash-geo-logo-white.svg';
import './MainIndex.css';


export default class MainIndex extends Component {
  constructor() {
    super();

    // cache methods
    this._getLinks = this._getLinks.bind(this);
    this._toggleNavicon = this._toggleNavicon.bind(this);

    // init state
    this.state = {
      mobileNavActive: false
    };
  }

  componentDidMount() {
    const { fetchLibraryIfNeeded } = this.props;
    fetchLibraryIfNeeded();
  }

  // PRIVATE

  _getLinks() {
    const { library } = this.props;
    const categories = ['layout', 'forms', 'icons', 'navigation', 'notifiers'];
    const noItems = !!!library.items.length;
    const date = new Date();
    let navItems = null;

    if (noItems) {
      return;
    }

    return categories.map((item, index) => {
      navItems = library.items.filter(i => i.group === item);

      return(
        <li key={ item }>
          <p className="MainIndex-sidebar-accent">
            { item }
          </p>

          <ul className="MainIndex-nav-list">
            {
              navItems.map((whipComponent, index) => (
                <li key={ `${ date }-${ index }` }>
                  <NavLink
                    to={ `/library/${ whipComponent.name }` }
                    className="NavLink"
                  >
                    { whipComponent.name }
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </li>
      )
    });

    // return library.items.map((item, index) => {
    //   return(
    //     <li key={ `${ date }-${ index }` }>
    //       <NavLink to={ `/library/${ item.name }` } className="NavLink">
    //         { item.name }
    //       </NavLink>
    //     </li>
    //   );
    // });
  }

  _toggleNavicon(mobileNavActive) {
    this.setState({ mobileNavActive });
  }


  render() {
    const links = this._getLinks();
    const MobileMenuClass = classNames('MainIndex-sidebar', { active: this.state.mobileNavActive });
    const OverlayClass = classNames('MainIndex-sidebar-overlay', { active: this.state.mobileNavActive });

    return (
      <div className="MainIndex clearfix">
        <header className="MainIndex-header">
          <div className="MainIndex-navicon-wrapper">
            <Navicon
              barColor="#E4E2FA"
              onUserInput={ this._toggleNavicon }
            />
          </div>

          <div className="MainIndex-logo-container">
            <NavLink to="/" className="MainIndex-logo-link">
              <div className="MainIndex-logo-wrapper">
                <img className="MainIndex-logo" src={ logo } alt="whiplash-logo" />
              </div>
            </NavLink>
          </div>

          <ul className="MainIndex-desktop-links">
            <li>
              <a
                className="MainIndex-desktop-link"
                href="https://www.whiplashmerch.com/"
                target="_blank">
                Whiplash
              </a>
            </li>

            <li>
              <a
                className="MainIndex-desktop-link"
                href="http://docs.getwhiplash.com/v1.0/docs"
                target="_blank">
                API Docs
              </a>
            </li>

            <li>
              <a
                className="MainIndex-desktop-link"
                href="https://github.com/whiplashmerch/whiplash-ui-library"
                target="_blank">
                Github
              </a>
            </li>
          </ul>
        </header>

        <div className={ MobileMenuClass }>
          <nav>
            <ul>
              { links }
            </ul>
          </nav>
        </div>

        <div className="MainIndex-feature">
          { this.props.children }
        </div>

        <div
          className={ OverlayClass }
          onClick={ () => { this._toggleNavicon(false); } }
        />
      </div>
    );
  }
}
