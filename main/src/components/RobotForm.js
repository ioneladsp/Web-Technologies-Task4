import React, { Component } from 'react';

class RobotForm extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      type: null,
      mass: null,
    };
  }

  render() {
    return (
      <div>
        <input
          type='text'
          id='name'
          placeholder='name'
          onChange={(evt) =>
            this.setState({
              name: evt.target.value,
            })
          }
        />
        <input
          type='text'
          placeholder='type'
          id='type'
          onChange={(evt) =>
            this.setState({
              type: evt.target.value,
            })
          }
        />
        <input
          type='text'
          id='mass'
          placeholder='mass'
          onChange={(evt) =>
            this.setState({
              mass: evt.target.value,
            })
          }
        />
        <input
          type='button'
          value='add'
          onClick={(event) => {
            const robot = {
              name: this.state.name,
              type: this.state.type,
              mass: this.state.mass,
            };
            this.props.onAdd(robot);
          }}
        />
      </div>
    );
  }
}

export default RobotForm;
