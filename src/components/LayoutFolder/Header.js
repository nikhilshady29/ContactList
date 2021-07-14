import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const { heading } = props;

    return (
        <nav className="navbar navbar-expand-sm
        navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    {heading}
                </Link>
            </div>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fas fa-home">
                                Home
                            </i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact/add" className="nav-link">
                            <i className="fas fa-plus-square">
                                Add
                            </i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            <i className="fas fa-question">
                                About
                            </i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

//default props, if we don't pass any property
Header.defaultProps = {
    heading: 'My Heading'
}

//set prop type
Header.propTypes = {
    heading: PropTypes.string.isRequired
};

export default Header;