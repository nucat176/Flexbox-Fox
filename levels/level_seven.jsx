import React from 'react';
import {hashHistory} from 'react-router';


class LevelSeven extends React.Component {

  constructor(props){
    super(props);
    this.state = {display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'};
    this.answer = {display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end'};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderNextButton = this.renderNextButton.bind(this);
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e){
    let that = this;
    return e => {
      e.preventDefault();
      if(this.state.alignItems === this.answer.alignItems &&
        this.state.justifyContent === this.answer.justifyContent){
          hashHistory.push("/8");
      } else {
        alert("Try again!");
      }
    }
  }

  renderNextButton(){
    if(this.state.alignItems === this.answer.alignItems &&
      this.state.justifyContent === this.answer.justifyContent){
      return (
        <button type="submit" className="submit-button">Next Level!</button>
      );
    } else {
      return (<span></span>);
    }
  }

  render(){
    return(
      <section className="flexbox-fox">
        <form className="console-form" onSubmit={this.handleSubmit()}>
          <p className="description">
          Lead the foxes to the center of the garden using a combination of
          justify-content and align-items.
          <br/>
          <br/>
          </p>
          <span className="input-console">
            <span className="not-submit">
              display: flex;
              <br/>
              justify-content:
              &nbsp;
              <input type="text" onChange={this.update("justifyContent")} className="css-input" placeholder="Insert CSS command here!"/>
              &nbsp;
              ;
              <br/>
              align-items:
              &nbsp;
              <input type="text" onChange={this.update("alignItems")} className="css-input" placeholder="Insert CSS command here!"/>
              &nbsp;
              ;
            </span>
            {this.renderNextButton()}
          </span>
        </form>
        <div className="fox-area" style={this.state}>
          <img
            className="fox"
            src="http://res.cloudinary.com/dfufqfnjx/image/upload/v1479235465/fox13_awuzpm.png"/>
          <img
            className="fox2"
            src="http://res.cloudinary.com/dfufqfnjx/image/upload/v1479235465/fox13_awuzpm.png"/>
          <img
            className="fox3"
            src="http://res.cloudinary.com/dfufqfnjx/image/upload/v1479235465/fox13_awuzpm.png"/>
          <div className='den-area' style={this.answer}>
            <img
              className="den"
              src="http://res.cloudinary.com/dfufqfnjx/image/upload/v1479235787/cave-entrance-clip-art-at-clker-com-vector-clip-art-online-royalty-fVB7sf-clipart_lm9nfy.png"/>
            <img
              className="den2"
              src="http://res.cloudinary.com/dfufqfnjx/image/upload/v1479235787/cave-entrance-clip-art-at-clker-com-vector-clip-art-online-royalty-fVB7sf-clipart_lm9nfy.png"/>
            <img
              className="den3"
              src="http://res.cloudinary.com/dfufqfnjx/image/upload/v1479235787/cave-entrance-clip-art-at-clker-com-vector-clip-art-online-royalty-fVB7sf-clipart_lm9nfy.png"/>
          </div>
        </div>
      </section>
    )
  }
}

export default LevelSeven;
