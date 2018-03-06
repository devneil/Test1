import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>AnsibleApiTest</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <a href={'/swagger'}>
                                <span className='glyphicon glyphicon-education'></span> API Docs
                            </a>
                        </li>
                        <li>
                            <NavLink to={'/playerlist'} activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Players List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/playersearch'} activeClassName='active'>
                                <span className='glyphicon glyphicon-search'></span> Player Search
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/playeradd'} activeClassName='active'>
                                <span className='glyphicon glyphicon-plus'></span> Add Player
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
