import React from 'react';
import {connect, ResolveThunks} from 'react-redux';
import {Button} from 'react-bootstrap';
import {fetchList, deleteList} from 'actions/list';
import {IItem} from 'components/Item/interfaces';
import Item from 'components/Item';
import {IRootState} from '../../interfaces';

const mapStateToProps = (state: IRootState) => ({
  items: state.list.list
});

const mapDispatchToProps = {
  fetchList,
  deleteList,
};

const configureItems = (items: IItem[]): JSX.Element[] => {
  return items.map((item) => (<Item {...item} key={item.id}/>));
};

const List: React.FC<ReturnType<typeof mapStateToProps> & ResolveThunks<typeof mapDispatchToProps>> = React.memo((props) => {
  return (
    <div>
      <Button onClick={props.fetchList}>Fetch</Button>
      <Button onClick={props.deleteList}>Delete</Button>
      {configureItems(props.items)}
    </div>);
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
