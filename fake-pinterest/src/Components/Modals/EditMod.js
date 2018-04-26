import React, {Component} from 'react';
import Modhead from './ModHead.js';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class Editmod extends Component {

            state = {
            fields: {
                name: '',
                email: ''
            },
            people: [],
        };

  onFormSubmit = (evt) => {
    const people = [
      ...this.state.people,
      this.state.fields,
    ];
    this.setState({ 
      people, 
      fields: {
        name: '',
        email: ''
      } 
    });

    console.log("PEOPLE", people);
    evt.preventDefault();
  };

  onInputChange = (evt) => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  };

  render() {
    return (
      <div>
        <Modhead  title={"Edit"}/>

        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder='Name'
            name='name'
            value={this.state.fields.name}
            onChange={this.onInputChange}
          />

          <input
            placeholder='Email'
            name='email'
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />

          <input type='submit' />
        </form>
        </div>

    );
  }
}

export default Editmod;