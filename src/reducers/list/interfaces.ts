import {IItem} from 'components/Item/interfaces';

export interface IListState {
  list: IItem[];
}

export enum ListActionTypes {
  SET_LIST = 'SET_LIST',
  DELETE_LIST = 'DELETE_LIST',
}
