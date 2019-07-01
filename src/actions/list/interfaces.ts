import {IAction} from '../../interfaces';
import {ListActionTypes} from 'reducers/list/interfaces';
import {IItem} from 'components/Item/interfaces';
import {Action} from 'redux';

export type ISetListAction = IAction<ListActionTypes.SET_LIST, IItem[]>;
export type IDeleteListAction = Action<ListActionTypes.DELETE_LIST>;
