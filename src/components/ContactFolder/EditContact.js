import React from 'react';
import { Consumer } from '../../context';
//import { v1 } from 'uuid';
import TextInputGroup from '../LayoutFolder/TextInputGroup';
import axios from 'axios';

class EditContact extends React.Component
{

    state = {
        id: '',
        name: '',
        email: '',
        phone: '',
        error: {}
    };
    
    async componentDidMount()
    {
        const { id } = this.props.match.params;
        const tresponse = await axios.get(`http://192.168.0.5:4500/users/${id}`);
        
        const { name, email, phone } = tresponse.data;

        this.setState({name,email,phone});        
    }

    onSubmit = async(dispatch, event) => {
        //e.preventDefaults();
        event.preventDefault();

        const { name, email, phone} = this.state;

        if(name==='')
        {
            this.setState({error: {name:"Name is Required"}});
            return;
        }
        if(email==='')
        {
            this.setState({error: {email:"Email is Required"}});
            return;
        }
        if(phone==='')
        {
            this.setState({error: {phone:"Phone is Required"}});
            return;
        }

        const UpdatedContact = {
            name,
            email,
            phone,
        };

        const { id } = this.props.match.params;

        const tresponse = await axios.put(`http://192.168.0.5:4500/users/${id}`, UpdatedContact);

        dispatch({type: 'UPDATE_CONTACT', payload: tresponse.data});

        this.setState({
            name: '',
            email: '',
            phone: '',
            error: {},
        });

    };

    onChange = (e) => {
        //e.target gives => input with name="x"
        const temp = e.target.name;
        this.setState({ [temp]: e.target.value });
        //console.log(e.target.value,this.state);
    };

    render()
    {
        const { name, email, phone, error } = this.state;
        return (
            <Consumer>
                { (value) => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Edit Contacts</div>
                            <div className="card-body">
                            <form onSubmit = { this.onSubmit.bind(this, dispatch) }>
                                <TextInputGroup
                                    label = {'Name'}
                                    name = {'name'}
                                    placeholder = {'Enter Name'}
                                    value = {name}
                                    onChange = { this.onChange }
                                    error = {error.name}
                                />
                                <TextInputGroup
                                    label = {'Email'}
                                    name = {'email'}
                                    placeholder = {'Enter Email'}
                                    type = {'email'}
                                    value = {email}
                                    onChange = { this.onChange }
                                    error = {error.email}
                                />
                                <TextInputGroup
                                    label = {'Phone'}
                                    name = {'phone'}
                                    placeholder = {'Enter Number'}
                                    value = {phone}
                                    onChange = { this.onChange }
                                    error = {error.phone}
                                /><br />
                                <input
                                    className="btn btn-primary btn-block"
                                    type="submit"
                                    value="Apply"
                                />
                            </form>
                            </div>
                        </div>
                    );
                }
                }
            </Consumer>
        );
    }
}

export default EditContact;