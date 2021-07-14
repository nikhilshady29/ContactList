import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from '../../context';

class Contact extends React.Component
{
    state = {
        showContactinfo: false,
    }

    deleteContact = async(id, dispatch) => {
        try {
            await axios.delete(`http://192.168.0.5:4500/users/${id}`).then( (tresponse) => dispatch( {type:'DELETE_CONTACT',payload:id} ) );
            //wrote a regex using ` ` (the key before 1);
        }
        catch(e)
        {
            dispatch( {type:'DELETE_CONTACT',payload:id} );
        }
    }

    render()
    {
        const { id, name, email, phone } = this.props.contacts;
        const { showContactinfo } = this.state;

        return (
            <Consumer>
                { (value) => {

                    const { dispatch } = value;

                    return (
                        <div className="card card-body mb-3" >
                            <h4><span style={{float:"left"}}>{ name }{'   '}
                                    <i
                                        onClick = { () => {this.setState({showContactinfo:!this.state.showContactinfo})}}
                                        className = "fas fa-chevron-circle-down"
                                        style = {{cursor: 'pointer'}}
                                    />
                                </span>
                                <i
                                    onClick = { this.deleteContact.bind(this, id, dispatch) }
                                    style = {{cursor: 'pointer', float: 'right', color: 'red'}}
                                    className = "fas fa-trash"
                                />
                                <Link to={`/contact/edit/${id}`}>
                                    <i
                                        className="fas fa-pencil-alt"
                                        style={{
                                            cursor: 'pointer',
                                            float: 'right',
                                            color: 'black',
                                            marginRight: '1rem'
                                        }}
                                    />
                                </Link>
                            </h4>
                            {
                                showContactinfo ? <ul className="list-group">
                                    <li className="list-group-item" >Email: { email }</li>
                                    <li className="list-group-item" >Phone: { phone }</li>
                                </ul> : null
                            }
                        </div>
                    );
                }
                }
            </Consumer>
        );
    }
}

export default Contact;