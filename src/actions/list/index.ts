import {Dispatch} from 'redux';
import {ListActionTypes} from 'reducers/list/interfaces';
import {IItem} from 'components/Item/interfaces';
import {HttpService} from 'services/http';
import {IDeleteListAction, ISetListAction} from './interfaces';

export const fetchList = () => async (dispatch: Dispatch): Promise<void> => {
  const res = await HttpService.get<IItem[]>('https://jsonplaceholder.typicode.com/todos');

  dispatch(setList(res.data));
};

export const setList = (list: IItem[]): ISetListAction => {
  return {
    type: ListActionTypes.SET_LIST,
    payload: list,
  }
};


export const deleteList = (): IDeleteListAction => {
  return {
    type: ListActionTypes.DELETE_LIST,
  }
};
