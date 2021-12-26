import React, { Component } from 'react';
import RobotStore from '../stores/RobotStore';
import Robot from './Robot';
import RobotForm from './RobotForm';

class RobotList extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }
  componentDidMount() {
    this.store = new RobotStore();
    this.setState({
      robots: this.store.getRobots(),
    });
    this.store.emitter.addListener('UPDATE', () => {
      this.setState({
        robots: this.store.getRobots(),
      });
    });
  }

  onAdd(robot) {
    this.store.addRobot(robot);
  }

  render() {
    return (
      <div>
        {this.state.robots.map((e, i) => (
          <Robot item={e} key={i} />
        ))}
        <RobotForm store={this.store} onAdd={this.onAdd} />
      </div>
    );
  }
}

export default RobotList;
