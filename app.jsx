import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="app">
        <h1 className="game-title">Flexbox Fox</h1>
        {this.props.children}
      </div>
    );
  }
}


export default App;
