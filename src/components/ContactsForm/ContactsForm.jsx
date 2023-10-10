// import React, { Component } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsForm.module.css';

// class ContactsForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
export function ContactsForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  // handleInputChange = event => {
  //   const { name, value } = event.currentTarget;
  //   this.setState({ [name]: value });
  // };

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'number':
        setNumber(value);
        return;
      default:
        return;
    }
  };

  // handleSubmit = event => {
  //   event.preventDefault();
    
  //   this.props.onSubmit(this.state);
  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };


  // render() {
  //   return (
  //     <form onSubmit={this.handleSubmit} className={css.form}>
  //       <label className={css.label}>
  //         Name
  //         <input
  //           className={css.input}
  //           type="text"
  //           name="name"
  //           value={this.state.name}
  //           pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //           required
  //           onChange={this.handleInputChange}
  //         />
  //       </label>

  //       <label className={css.label}>
  //         Number
  //         <input
  //           className={css.input}
  //           type="tel"
  //           name="number"
  //           value={this.state.number}
  //           pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
  //           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //           required
  //           onChange={this.handleInputChange}
  //         />
  //       </label>

  //       <button className={css.buttonSubmit} type="submit">
  //         Add contact
  //       </button>
  //     </form>
  //   );
  // }


    return (
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
          />
        </label>

        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
          />
        </label>

        <button className={css.buttonSubmit} type="submit">
          Add contact
        </button>
      </form>
    );

}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.object.isRequired,
};

export default ContactsForm;