import {ActionType} from 'typesafe-actions';
import * as actions from 'actions/list';
import {IListState, ListActionTypes} from './interfaces';

type IListActions = ActionType<typeof actions>;
const initialState: IListState = {
  list: [],
};

export default function ListReducer(state = initialState, action: IListActions): IListState {
  switch (action.type) {
    case ListActionTypes.SET_LIST: {
      return {...state, list: action.payload};
    }
    case ListActionTypes.DELETE_LIST: {
      return {...state, list: []};
    }
    default: {
      return state;
    }
  }
}
