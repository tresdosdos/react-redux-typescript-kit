import {Action} from 'redux';
import {ISpinnerState} from 'reducers/spinner/interfaces';
import {IListState} from 'reducers/list/interfaces';

export interface IAction<T, S> extends Action<T> {
  payload: S;
}

export interface IWord {
  word: string,
}

export interface IRootState {
  spinner: ISpinnerState;
  list: IListState;
}
