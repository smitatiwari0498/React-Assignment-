import { useState } from "react";

const subjects = [
    "English",
    "Hindi",
    "Maths",
    "Science",
    "Computer",
];

function ResultCard() {
    const [marks, setMarks] = useState(["", "", "", "", ""]);

    const totalMarks = marks.reduce(
        (sum, mark) => sum + (Number(mark) || 0),
        0
    );

    const percentage = (totalMarks / 500) * 100;
    const isPass = marks.every((mark) => Number(mark) >= 33);

    const handleChange = (index, value) => {
        const updatedMarks = [...marks];
        updatedMarks[index] = value;
        setMarks(updatedMarks);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-4xl rounded-2xl bg-white p-6 shadow-lg">
                <h1 className="mb-6 text-center text-2xl font-bold">
                    Student Result
                </h1>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
                    {subjects.map((subject, index) => (
                        <div key={subject}>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                {subject}
                            </label>

                            <input
                                type="number"
                                min="0"
                                max="100"
                                maxLength="3"
                                value={marks[index]}
                                onChange={(e) => handleChange(index, e.target.value)}
                                placeholder="0-100"
                                className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-blue-500"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-6 rounded-xl bg-gray-50 p-4">
                    <div className="mb-2 flex justify-between">
                        <span className="font-medium">Total Marks</span>
                        <span>{totalMarks} / 500</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-medium">Percentage</span>
                        <span>{percentage.toFixed(2)}%</span>
                    </div>
                </div>

                <div
                    className={`mt-4 rounded-lg p-4 text-center text-lg font-semibold text-white ${isPass ? "bg-green-500" : "bg-red-500"
                        }`}
                >
                    {isPass ? "✅ Pass" : "❌ Fail"}
                </div>
            </div>
        </div>
    );
}

export default ResultCard;