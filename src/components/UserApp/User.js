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
          </div>
          <div className="user-buttons">
              <span><i className="fas fa-edit" onClick={() => this.props.toggleSelected(this.props.index)}></i></span>
              <span><i className="fas fa-trash-alt" onClick={() => this.props.removeUser(this.props.index)}></i></span>
            </div>
        </li>  
    )
  }
}

export default User;