import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import AnimatedInput from './components/AnimatedInput';
import '../../fonts/index.css';
import './Input.css';


export default class Input extends Component {
  static propTypes = {
    inputLabel: PropTypes.string,
    theme: PropTypes.string,
    onUserInput: PropTypes.func
  }

  static defaultProps = {
    inputLabel: '',
    theme: null,
    onUserInput: () => console.warn('no onUserInput prop given')
  }

  // PRIVATE

  _sendUpdate = (e) => {
    const { onUserInput } = this.props;
    onUserInput(e.target.value);
  }


  render() {
    const { inputLabel, theme, onUserInput, ...props } = this.props;

    if (!!!theme) {
      return(
        <AnimatedInput
          inputLabel={ inputLabel }
          onUserInput={ onUserInput }
          { ...props }
        />
      );
    }

    return (
      <div className="Input">
        <label className="Input-label">
          { inputLabel }
        </label>

        <div className="Input-wrapper">
          <input
            className="Input-input"
            placeholder=""
            { ...props }
            onFocus={ this._updateClass }
            onChange={ this._sendUpdate } />
        </div>
      </div>
    );
  }
}
