import {IDeleteListAction, ISetListAction} from './interfaces';
import {ListActionTypes} from 'reducers/list/interfaces';
import {httpService} from 'services/http';
import {IItem} from 'components/Item/interfaces';
import {Dispatch} from 'redux';

export const fetchList = () => async (dispatch: Dispatch): Promise<void> => {
  const res = await httpService.get<IItem[]>('https://jsonplaceholder.typicode.com/todos');

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
