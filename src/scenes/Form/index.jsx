import React, { Component } from 'react';
import firebase from '../../services/firebase';
import './style.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      content: '',
      link: '',
      picsSrc: '',
      year: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const projectsRef = firebase.database().ref('projects');
    const project = {
      ...this.state
    };
    projectsRef.push(project);
    this.setState({
      name: '',
      content: '',
      link: '',
      picsSrc: '',
      year: 1
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h1 className='display-3 mb-4'>Projets NWS</h1>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group row'>
            <label className='col-sm-3 col-form-label' htmlFor='name'>
              Nom du projet
            </label>
            <input
              className='form-control col-sm-9'
              type='text'
              placeholder='Nom du projet'
              name='name'
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className='form-group row'>
            <label className='col-sm-3 col-form-label' htmlFor='content'>
              Courte description du projet
            </label>
            <textarea
              onChange={this.handleChange}
              value={this.state.content}
              name='content'
              className='form-control col-sm-9'
            />
          </div>
          <div className='form-group row'>
            <label htmlFor='picsSrc' className='col-sm-3 col-form-label'>
              Image*
            </label>
            <input
              className='form-control col-sm-9'
              type='text'
              placeholder='Lien'
              name='picsSrc'
              onChange={this.handleChange}
              value={this.state.picsSrc}
            />
          </div>
          <div className='form-group row'>
            <label htmlFor='link' className='col-sm-3 col-form-label'>
              Site internet**
            </label>
            <input
              className='form-control col-sm-9'
              type='text'
              placeholder='Lien'
              name='link'
              onChange={this.handleChange}
              value={this.state.link}
            />
          </div>
          <div className='form-group row'>
            <div className='col-sm-3' />
            <select
              onChange={this.handleChange}
              value={this.state.year}
              name='year'
              className='form-control col-sm-9'
            >
              <option value='1'>Année 1</option>
              <option value='2'>Année 2</option>
              <option value='3'>Année 3</option>
            </select>
          </div>
          <div className='row'>
            <button className='btn btn-primary mx-auto mb-3 mh-3' type='submit'>
              Envoyer
            </button>
          </div>
        </form>
        <div className='container'>
          <p>
            * - Veuillez héberger vos images via un site tel que{' '}
            <a href='https://www.imgur.com'>Imgur</a> et inscrire le lien de
            l'image (qui se termine souvent par .jpg), si vous n'avez qu'un site
            internet prenez un screen de celui-ci et mettez le.
          </p>
          <p>
            ** - Si votre projet ne comporte pas de site internet, laissez vide
            (logique). Si votre site n'est pas en ligne mais est seulement en
            HTML/CSS/JS, envoyez nous les sources et nous nous en chargerons.
          </p>
        </div>
      </div>
    );
  }
}

export default Form;
