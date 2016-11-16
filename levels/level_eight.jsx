import React from 'react';
import {hashHistory} from 'react-router';


class LevelEight extends React.Component {

  constructor(props){
    super(props);
    this.state = {display: 'flex', flexDirection: 'row'};
    this.answer = {display: 'flex', flexDirection: 'row-reverse'};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderNextButton = this.renderNextButton.bind(this);
  }

  update(){
    return e => this.setState({flexDirection: e.currentTarget.value})
  }

  handleSubmit(e){
    return e => {
      e.preventDefault();
      hashHistory.push("/9");
    }
  }

  renderNextButton(){
    if(this.state.flexDirection === this.answer.flexDirection){
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
            The foxes need to get in the same order as their dens using flex-direction.
            This CSS defines the direction items are placed in the container, and accepts the following values:
            <br/>
            <br/>
            <ul className="commands-list">
              <li>
                <span className="command-title">row</span>
                : Items are placed the same as the text direction.
              </li>
              <li>
                <span className="command-title">row-reverse</span>
                : Items are placed opposite to the text direction.
              </li>
              <li>
                <span className="command-title">column</span>
                : Items are placed top to bottom.
              </li>
              <li>
                <span className="command-title">column-reverse</span>
                : Items are placed bottom to top.
              </li>
            </ul>
          </p>
          <span className="input-console">
            <span className="not-submit">
              display: flex;
              <br/>
              flex-direction:
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
    );
  }
}

export default LevelEight;
