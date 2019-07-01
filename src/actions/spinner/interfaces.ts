import {Action} from 'redux';
import {SpinnerActionTypes} from 'reducers/spinner/interfaces';

export type IStartSpinnerAction = Action<SpinnerActionTypes.START>;
export type IStopSpinnerAction = Action<SpinnerActionTypes.STOP>;
