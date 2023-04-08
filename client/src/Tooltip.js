const Tooltip = ({ x, y, tooltipInfo }) => {
  return <div style={{
    width: '224px',
    height: '29px',
    background:' rgba(1, 1, 1, 0.75)',
    borderRadius: '1px 8px 2px',
    position: 'absolute',
    top: `${y}px`,
    left: `${x}px`,
    color: 'white',
  }}>
    {
      tooltipInfo.join(', ')
    }
  </div>;
};

export default Tooltip;