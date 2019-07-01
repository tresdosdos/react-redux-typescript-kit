import {IStartSpinnerAction, IStopSpinnerAction} from './interfaces';
import {SpinnerActionTypes} from 'reducers/spinner/interfaces';

export const startSpin = (): IStartSpinnerAction => {
  return {
    type: SpinnerActionTypes.START,
  }
};

export const stopSpin = (): IStopSpinnerAction => {
  return {
    type: SpinnerActionTypes.STOP,
  }
};
