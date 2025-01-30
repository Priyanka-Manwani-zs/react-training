const Button = ({
  alignment,
  text,
  index,

  showSideBar,
  sidebarOpen,
}) => {
  return (
    <Tooltip text={text} alignment={alignment} isButton={true} index={index}>
      <button
        onClick={() => {
          if (index == 4) {
            showSideBar(true);
          } else {
            return;
          }
        }}
      >
        Click me
      </button>
    </Tooltip>
  );
};
