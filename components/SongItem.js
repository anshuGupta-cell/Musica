import React from 'react';

const SongItem = (props) => {
  const {name, src, handleClick, id} = props;
  
  return (
      <div className="chutiya mb-3" onClick={()=> handleClick(src, id, name)} >
        <p>{name}</p>
      </div>

  );
};

export default SongItem;
