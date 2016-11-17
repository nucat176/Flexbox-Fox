import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import LevelOne from './levels/level_one';
import LevelTwo from './levels/level_two';
import LevelThree from './levels/level_three';
import LevelFour from './levels/level_four';
import LevelFive from './levels/level_five';
import LevelSix from './levels/level_six';
import LevelSeven from './levels/level_seven';
import LevelEight from './levels/level_eight';
import LevelNine from './levels/level_nine';
import LevelTen from './levels/level_ten';
import LevelEleven from './levels/level_eleven';
import LevelTwelve from './levels/level_twelve';
import LevelThirteen from './levels/level_thirteen';

const Root = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LevelOne}/>
        <Route path="2" component={LevelTwo}/>
        <Route path="3" component={LevelThree}/>
        <Route path="4" component={LevelFour}/>
        <Route path="5" component={LevelFive}/>
        <Route path="6" component={LevelSix}/>
        <Route path="7" component={LevelSeven}/>
        <Route path="8" component={LevelEight}/>
        <Route path="9" component={LevelNine}/>
        <Route path="10" component={LevelTen}/>
        <Route path="11" component={LevelEleven}/>
        <Route path="12" component={LevelTwelve}/>
        <Route path="13" component={LevelThirteen}/>
      </Route>
    </Router>
  )
};

export default Root;
