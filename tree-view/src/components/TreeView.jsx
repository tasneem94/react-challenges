import { useState } from "react";
import { data } from "../data/treeData";
import { TreeContent } from "./TreeContent";
const TreeView = () => {
  const [showChildren, setShowChildren] = useState({});
  const handleClick = (id) => {
    setShowChildren((prevShowChildren) => ({
      ...prevShowChildren,
      [id]: !prevShowChildren[id],
    }));
    console.log(showChildren);
  };
  return (
    <div className="tree-view-container">
      <TreeContent
        data={data}
        handleClick={handleClick}
        showChildren={showChildren}
      />
    </div>
  );
};

export default TreeView;
