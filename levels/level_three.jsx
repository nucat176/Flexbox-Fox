import React from 'react';
import {hashHistory} from 'react-router';


class LevelThree extends React.Component {

  constructor(props){
    super(props);
    this.state = {display: 'flex', justifyContent: 'flex-start'};
    this.answer = {display: 'flex', justifyContent: 'space-around'};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderNextButton = this.renderNextButton.bind(this);
  }

  update(){
    return e => this.setState({justifyContent: e.currentTarget.value})
  }

  handleSubmit(e){
    let that = this;
    return e => {
      e.preventDefault();
      if(this.state.justifyContent === this.answer.justifyContent){
        hashHistory.push("/4");
      } else {
        alert("Try again!");
      }
    }
  }

  renderNextButton(){
    if(this.state.justifyContent === this.answer.justifyContent){
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
          Mr. Fox has a big sister too! Help all three foxes get find their dens using justify-content.
          This time, the dens have lots of space around them.
          <br/>
          <br/>
          Remember that this CSS property aligns items horizontally and accepts the
            following values:
            <br/>
            <br/>
            <ul className="commands-list">
              <li>
                <span className="command-title">flex-start</span>
                : Items align to the left side of the container.
              </li>
              <li>
                <span className="command-title">flex-end</span>
                : Items align to the right side of the container.
              </li>
              <li>
                <span className="command-title">center</span>
                : Items align at the center of the container.
              </li>
              <li>
                <span className="command-title">space-between</span>
                : Items display with equal spacing between them.
              </li>
              <li>
                <span className="command-title">space-around</span>
                : Items display with equal spacing around them.
              </li>
            </ul>
          </p>
          <span className="input-console">
            <span className="not-submit">
              display: flex;
              <br/>
              justify-content:
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

export default LevelThree;
