import React from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type)
    {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter((data) => data.id!==action.payload)
            };
        
        case 'ADD_CONTACT':
            //console.log("A",state);
            return {
                ...state,
                contacts: [
                    action.payload,
                    ...state.contacts
                ]
            };

        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(
                    (data) => data.id===action.payload.id
                    ? (data = action.payload)
                    : data
                )
            };
        
        default:
            return state;
    }
};

class Provider extends React.Component
{
    state = {
        contacts: [],
        dispatch: (action) => { this.setState( (state) => reducer(state, action) ) } 
        }

    async componentDidMount()
    {
        const tresponse = await axios.get("http://192.168.0.5:4500/users");
        this.setState({contacts: tresponse.data});
        //.then is promise   axios is use to get data from backend/server
    }

    render()
    {
        console.log(this.state);
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Provider;
export const Consumer = Context.Consumer;