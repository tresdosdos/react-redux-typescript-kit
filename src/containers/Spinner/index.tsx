import React from 'react';
import {connect} from 'react-redux';
import {IRootState} from '../../interfaces';
import './styles.scss';

const mapStateToProps = (state: IRootState) => ({
  isActive: state.spinner.isActive,
});

const Spinner: React.FC<ReturnType<typeof mapStateToProps>> = React.memo((props) => {
  if (props.isActive) {
    return (<h1>spinner is active</h1>);
  }

  return (<h1>spinner is disabled</h1>);
});

export default connect(mapStateToProps)(Spinner);
