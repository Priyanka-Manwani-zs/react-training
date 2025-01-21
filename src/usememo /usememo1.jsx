import { useState, useMemo } from "react";

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000,
  };
});

function DelayCounter() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);

  const magical = numbers.find((item) => item.isMagical === true); // Expensive Computation

  return (
    <>
      <div className="card">
        <span>Magical number is {magical.index}</span>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default DelayCounter;
// const magical = useMemo(
//   () => numbers.find((item) => item.isMagical === true),
//   [numbers]
// );

// if (count == 10) {
//   setNumbers(
//     new Array(10_000_000).fill(0).map((_, i) => {
//       return {
//         index: i,
//         isMagical: i === 9_000_000,
//       };
//     })
//   );
// }
