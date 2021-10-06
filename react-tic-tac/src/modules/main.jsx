const arrayEx = () => {
  const arrayRow = [0, 0, 0];
  const arrayCol = [0, 0, 0];

  arrayRow.map((row) => {
    const cols = arrayCol.map((col) => {
      // 한 라인의 button 만들기
    });
    // 각 라인의 컴포넌트 만들기
  });

  const arrFuncCol = Array(3).fill(0);
  const arrFuncRow = Array(3).fill(arrFuncCol);

  /**
   * const arrFuncBox = Array(3).fill( [Array(3).fill(0)]   );
   * const arrFuncBox = [
   * 	[
   * 		[0,0,0],
   * * 		[0,0,0],
   * * 		[0,0,0],
   * 	]
   * ]
   */
  // const arrFuncBox = Array(3).fill( [...Array(3).fill(0)]   );
  const arrFuncBox = Array(3).fill(Array(3).fill(0));
  arrFuncBox.map((sub) => {
    sub.map((b) => {
      // 한라인의 button 만들기
    });
    // 각 라인의 컴포넌트 만들기
  });
};

/**
 * 다차원 배열
 * 배열 속에 요소가 배열로 이루어진 배열
 * a = [1,2,3,4,5]
 * console.log( a[0] )
 * a[0] = 3
 *
 * b = [
 * 	[1,2,3,4,5]
 * ]
 * console.log(b[0][1])
 * b[0][2] = 100
 *
 * c = [
 * 	[
 * 		[1,2,3,4,5]
 * 	]
 * ]
 * console.log(c[0][0][1])
 *
 */

// const RenderSquare = (props) => {
//  const { squares } = props;
const RenderSquare = ({ squares, changeSquares }) => {
  // const squares = props.squares
  const arrayBox = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const onButtonClick = (e) => {
    // if(e.target.tagName === "BUTTON")
    const index = e.target.dataset.index;
    changeSquares(index);
  };

  let index = 0;
  const buttons = arrayBox.map((subBox) => {
    const buttonCols = subBox.map(() => {
      // 한라인의 button 만들기
      return (
        <button data-index={index} onClick={onButtonClick}>
          {squares[index++]}
        </button>
      );
    });
    // 각 라인의 컴포넌트 만들기
    return <div className="box_row">{buttonCols}</div>;
  });
  return buttons;
};

/**
 * 0,1,2
 * 3,4,5
 * 6,7,8
 */
const calcWinner = (squares) => {
  
  // let i
  //   for (i = 0; i < 3; i++){
  //   squares[i] ++
  // }
//   for (let i = 0; i < 3;i++){
//    let prevTic = null
//     for (let j = 0; j < 3; i++){
//        if(!prevTic)
//        prevTic = squares[i][j]
//        else if(prevTic != squares[i]){
//                prevTic = null;
//                break;
//      }
//      if(prevTic)
//           return prevTic
//     }
//     return squares[i]
// }
  // return squares[i]
  // if (squares[0] && squares[0] === squares[1] && squares[0] === squares[2]) {
  //   return squares[0]
  // } else if (squares[3]) {
    
  // }

  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  win.forEach(i)={
    
  }
}
export { RenderSquare, calcWinner };