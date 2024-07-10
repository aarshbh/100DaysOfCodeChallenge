import React, { useState, useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer"
function generateList(size) {
  return Array.from({ length: size }, (_, index) => `Item ${index + 1}`);
}

const VirtualizedListExamples = () => {
  const [items, setItems] = useState([]);
  const [triggerRender, setTriggerRender] = useState(false);

  const handleGenerateList = () => {
    setItems(generateList(10000));
    setTimeout(() => {
      setTriggerRender((prev) => !prev);
    }, 1000);
  };

  const rowRenderer = ({ key, index, style }) => (
      <div key={key} style={style}>
        {items[index]}
      </div>
    )

  return (
    <div>
      <div>
        <button onClick={handleGenerateList}>Generate Large List</button>
        <div style={{ width: "100%", height: "400px" }}>
          <AutoSizer>
            {({ width, height }) => (
              <List
                width={width}
                height={height}
                itemCount={items.length}
                itemSize={20}
            >
                {rowRenderer}
            </List>
              
            )}
          </AutoSizer>
        </div>
      </div>
    </div>
  );
};

export default VirtualizedListExamples;
