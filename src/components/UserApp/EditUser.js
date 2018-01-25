import React from 'react';

class EditUser extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.renderUser = this.renderUser.bind(this);
    }

    handleChange(e, key) {
        const user = this.props.users[key];
 
        // take a copy of that fish and update it with the new data
        const updatedUser = {
            ...user,
            [e.target.name]: e.target.value
        };
        this.props.updateUser(key, updatedUser);
    }

    renderUser(key) {
        const user = this.props.users[key];
        return(
            <div className="user-edit" key={key}>
                <h2 className="user-header"> Edit User </h2>
                <input type="text" name="firstName" value={user.firstName}   onChange={(e) => this.handleChange(e, key)} placeholder="Firstname"/>  
                <input type="text" name="lastName" value={user.lastName}  onChange={(e) => this.handleChange(e, key)} placeholder="Lastname"/>

                <select type="text" name="gender" value={user.gender}  onChange={(e) => this.handleChange(e, key) }placeholder="Gender">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="neutral">Neutral</option>
                </select> 
                <input type="text" name="email" value={user.email}  onChange={(e) => this.handleChange(e, key)} placeholder=">Email"/>
                <input type="text" name="phone" value={user.phone}  onChange={(e) => this.handleChange(e, key)} placeholder=">Phone"/>
            </div>
        )
    }
    render() {
        const user = this.props.users[this.props.selected];

        if(!user){
            return  (
            <div> no 
                <button onClick={this.props.addRandomUser}>Add Random User</button>
            </div>
            )
        } else {
            return (
            <div>
                {this.renderUser(this.props.selected)}
                <button onClick={this.props.addRandomUser}>Add Random User</button>
            </div>
        )
        }
            
    }
}

export default EditUser;