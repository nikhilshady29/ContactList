import React from "react";
import { Consumer } from "../../context";
import Contact from "./Contact";

class Contactss extends React.Component
{
    render()
    {
        return (
            <Consumer>
                { (value) => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            <h1 className="display-4 mb-2">
                                <span className="text-danger" >Contact</span> List
                            </h1>
                            {
                                contacts.map((data) => (
                                    <Contact
                                        key = {data.id}
                                        contacts = {data} 
                                    />
                                ))
                            }
                        </React.Fragment>
                        );
                    }
                }
            </Consumer>
        );
    }
}

export default Contactss;