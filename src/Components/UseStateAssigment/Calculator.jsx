import { useState } from "react";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(Number(firstNumber) + Number(secondNumber));
  };

  const handleSubtraction = () => {
    setResult(Number(firstNumber) - Number(secondNumber));
  };

  const handleMultiplication = () => {
    setResult(Number(firstNumber) * Number(secondNumber));
  };

  const handleDivision = () => {
    setResult(Number(firstNumber) / Number(secondNumber));
  };


  /* function getValue(event){
    console.log(event.target.value)
  }
 */
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Simple Calculator
        </h1>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Enter First Number"
            value={firstNumber}
            onChange={(e) => setFirstNumber(e.target.value)}
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />

          <input
            type="number"
            placeholder="Enter Second Number"
            value={secondNumber}
            onChange={(e) => setSecondNumber(e.target.value)}
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={handleAddition}
            className="rounded-lg bg-green-500 py-2 text-white"
          >
            Add (+)
          </button>

          <button
            onClick={handleSubtraction}
            className="rounded-lg bg-red-500 py-2 text-white"
          >
            Subtract (-)
          </button>

          <button
            onClick={handleMultiplication}
            className="rounded-lg bg-blue-500 py-2 text-white"
          >
            Multiply (*)
          </button>

          <button
            onClick={handleDivision}
            className="rounded-lg bg-purple-500 py-2 text-white"
          >
            Divide (/)
          </button>
        </div>

        <div className="mt-6 rounded-lg bg-slate-100 p-4 text-center">
          <h2 className="text-xl font-semibold">
            Result: {result}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Calculator;