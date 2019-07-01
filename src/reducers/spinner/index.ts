import {ActionType} from 'typesafe-actions';
import * as actions from 'actions/spinner';
import {ISpinnerState, SpinnerActionTypes} from './interfaces';

type ISpinnerActions = ActionType<typeof actions>;
const initialState: ISpinnerState = {
  isActive: false,
};

export default function SpinnerReducer(state = initialState, action: ISpinnerActions): ISpinnerState {
  switch (action.type) {
    case SpinnerActionTypes.START: {
      return {...state, isActive: true};
    }
    case SpinnerActionTypes.STOP: {
      return {...state, isActive: false};
    }
    default: {
      return state;
    }
  }
}
