import React from 'react';

export default function Input(props) {
  return (
    <div className="">
      <input
        type="text"
        placeholder="child input"
        onChange={props.handleSearchTermChange}
      />
    </div>
  );
}
