import React from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {startSpin, stopSpin} from 'actions/spinner';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  start: () => dispatch(startSpin()),
  stop: () => dispatch(stopSpin()),
});

const SpinnerController: React.FC<ReturnType<typeof mapDispatchToProps>> = React.memo((props) => {
  return (
    <div>
      <Button onClick={props.start}>Start</Button>
      <Button onClick={props.stop}>Stop</Button>
    </div>);
});

export default connect(null, mapDispatchToProps)(SpinnerController);
