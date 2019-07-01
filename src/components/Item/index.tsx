import React from 'react';
import {IItem} from 'components/Item/interfaces';

const Item: React.FC<IItem> = React.memo((props) => (
  <div>
    <h1>{props.userId}</h1>
    <h2>{props.id}</h2>
    <h3>{props.title}</h3>
    <h4>{props.completed}</h4>
  </div>
));

export default Item;
