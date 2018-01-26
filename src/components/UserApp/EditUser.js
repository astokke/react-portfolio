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
            <div key={key}>
                <h2 className="user-header"> Edit User </h2> <br />
                <span className="edit-user-line"> 
                    <label htmlFor="firstName">First name</label>
                    <input type="text" name="firstName" value={user.firstName}   onChange={(e) => this.handleChange(e, key)} placeholder="Firstname"/>
                </span>
                <span className="edit-user-line"> 
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" name="lastName" value={user.lastName}  onChange={(e) => this.handleChange(e, key)} placeholder="Lastname"/>
                </span>
                <span className="edit-user-line"> 
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={user.email}  onChange={(e) => this.handleChange(e, key)} placeholder=">Email"/>
                </span>
                <span className="edit-user-line"> 
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" value={user.phone}  onChange={(e) => this.handleChange(e, key)} placeholder=">Phone"/>
                </span>
                <span className="edit-user-line"> 
                        <label htmlFor="gender">Gender</label>
                    <select type="text" name="gender" value={user.gender}  onChange={(e) => this.handleChange(e, key) }placeholder="Gender">
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="neutral">Neutral</option>
                    </select>
                </span>
               

            </div>
        )
    }
    render() {
        const user = this.props.users[this.props.selected];
        let editUser;
        if(!user){
            editUser = '';
        } else {
            editUser = this.renderUser(this.props.selected);
        }

        return  (
            <div className="user-edit"> 
                {editUser} 
                <br /> 
                <br /> 
                <p className="adduser-text">Need more data?</p> 
                <p className="adduser-text">Click below to add a random user. </p> 
                <p className="adduser-text">User added to the top of the list. </p> 
                <span className="addUser" onClick={this.props.addRandomUser}>Add Random User</span>
            </div>
            )
            
    }
}

export default EditUser;