import React, { Component } from 'react';

class User extends Component {
  constructor() {
    super();
    this.getGenderSymbol = this.getGenderSymbol.bind(this);
  }
  getGenderSymbol() {
    const gender = this.props.details.gender;
    if (gender === 'male') {
      return '♂️';
    } else if (gender === 'female') {
      return '♀';
    } else {
      return "⚤";
    }
  }
  render() {
    const { details } = this.props;
    const gender = this.getGenderSymbol();
    return (
        <li className="user">
          <img src={details.pic} alt={details.firstName}/>
          <div className="details">
            <span className="name">{details.firstName} {details.lastName} <span className="icon"> {gender} </span> </span>
            <span className="contact">{details.email}</span>
            <span className="contact">{details.phone}</span>
            <div className="user-buttons">
              <a onClick={() => this.props.toggleSelected(this.props.index)}><i className="fas fa-edit"></i></a>
              <a onClick={() => this.props.removeUser(this.props.index)}><i className="fas fa-trash-alt"></i></a>
            </div>
          </div>
        </li>  
    )
  }

}

export default User;