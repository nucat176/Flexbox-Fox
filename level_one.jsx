import React from 'react';

class LevelOne extends React.Component {

  constructor(props){
    super(props);
    this.state = {display: 'flex', justifyContent: 'flex-start'};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    return e => this.setState({justifyContent: e.currentTarget.value})
  }

  render(){
    return(
      <section className="flexbox-fox">
        <form className="console-form" onSubmit={this.handleSubmit()}>
          justify-content:
          <input type="text" onChange={this.handleSubmit()} className="css-input" placeholder="Insert CSS command here!"/>
          <button type="submit">Submit Code!</button>
        </form>
        <div id="fox-area" style={this.state}>
          Stuff
        </div>
      </section>
    )
  }
}

export default LevelOne;
