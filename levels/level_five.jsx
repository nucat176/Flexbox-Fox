import React from 'react';
import {hashHistory} from 'react-router';


class LevelFive extends React.Component {

  constructor(props){
    super(props);
    this.state = {display: 'flex', alignItems: 'flex-start'};
    this.answer = {display: 'flex', alignItems: 'flex-end'};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderNextButton = this.renderNextButton.bind(this);
  }

  update(){
    return e => this.setState({alignItems: e.currentTarget.value})
  }

  handleSubmit(e){
    let that = this;
    return e => {
      e.preventDefault();
      if(this.state.alignItems === this.answer.alignItems){
        hashHistory.push("/6");
      } else {
        alert("Try again!");
      }
    }
  }

  renderNextButton(){
    if(this.state.alignItems === this.answer.alignItems){
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
            Now use align-items to help the foxes get to the bottom of the garden.
            This CSS property aligns items vertically and accepts the following values:
            <br/>
            <br/>
            <ul className="commands-list">
              <li>
                <span className="command-title">flex-start</span>
                : Items align to the top of the container.
              </li>
              <li>
                <span className="command-title">flex-end</span>
                : Items align to the bottom of the container.
              </li>
              <li>
                <span className="command-title">center</span>
                : Items align at the vertical center of the container.
              </li>
              <li>
                <span className="command-title">baseline</span>
                : Items display at the baseline of the container.
              </li>
              <li>
                <span className="command-title">stretch</span>
                : Items are stretched to fit the container.
              </li>
            </ul>
          </p>
          <span className="input-console">
            <span className="not-submit">
              display: flex;
              <br/>
              align-items:
              &nbsp;
              <input type="text" onChange={this.update()} className="css-input" placeholder="Insert CSS command here!"/>
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

export default LevelFive;
