export const TreeContent = ({ data, handleClick, showChildren }) => {
  return (
    <>
      {data.map((item) => (
        <div className="tree-view" key={item.id}>
          <div className="tree-node">
            <div>{item.label}</div>
            {item.children && item.children.length !== 0 && (
              <div className="plus-btn" onClick={() => handleClick(item.id)}>
                {showChildren[item.id] ? "-" : "+"}
              </div>
            )}
          </div>

          {item.children &&
            item.children.length !== 0 &&
            showChildren[item.id] && (
              <div className="children">
                <TreeContent
                  data={item.children}
                  handleClick={handleClick}
                  showChildren={showChildren}
                />
              </div>
            )}
        </div>
      ))}
    </>
  );
};
