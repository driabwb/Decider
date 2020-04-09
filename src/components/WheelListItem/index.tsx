import React from 'react';
import WheelOption from '../../types/WheelOption';

interface WheelListItemProps {
  item: WheelOption;
}

function WheelListItem(props: WheelListItemProps) {
  return (
    <div className="wheel-list-item-card" >
      { props.item.name }
      <button>Delete</button>
    </div>
  );
}

export default WheelListItem;
