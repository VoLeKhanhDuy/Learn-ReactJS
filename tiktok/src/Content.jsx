import React, { memo } from "react";

function Content({ onIncrease }) {
  return (
    <div>
      <button onClick={onIncrease}>Click!</button>
    </div>
  );
}

export default memo(Content);
