const Square = ({squareClicked, value}) => {
 
  return (
    <button className="square" onClick={squareClicked}>
      {value}
    </button>
  );
};

export default Square;
