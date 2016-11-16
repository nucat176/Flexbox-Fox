import React from 'react';
import {hashHistory} from 'react-router';


class LevelEleven extends React.Component {

  constructor(props){
    super(props);
    this.state = {display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'};
    this.answer = {display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderNextButton = this.renderNextButton.bind(this);
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e){
    return e => {
      e.preventDefault();
      hashHistory.push("/12");
    }
  }

  renderNextButton(){
    if(this.state.justifyContent === this.answer.justifyContent &&
      this.state.flexDirection === this.answer.flexDirection){
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
          Help the foxes find their dens using flex-direction and justify-content.
          <br/>
          Notice that when the flex direction is a column, justify-content chances to the vertical
          and align-items to the horizontal.
          <br/>
          <br/>
          </p>
          <span className="input-console">
            <span className="not-submit">
              display: flex;
              <br/>
              flex-direction:
              &nbsp;
              <input type="text" onChange={this.update("flexDirection")} className="css-input" placeholder="Insert CSS command here!"/>
              &nbsp;
              ;
              <br/>
              justify-content:
              &nbsp;
              <input type="text" onChange={this.update("justifyContent")} className="css-input" placeholder="Insert CSS command here!"/>
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

export default LevelEleven;
