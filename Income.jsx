import { useState } from "react";
import Header from "../components/Header";
import TopTabs from "../components/Toptabs";

export default function Income() {
  const [incomes, setIncomes] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setIncomes([
      { id: Date.now(), source, amount: Number(amount), date },
      ...incomes,
    ]);

    setSource("");
    setAmount("");
    setDate("");
  };

  const recent = incomes.slice(0, 3);
  const list = showAll ? incomes : recent;

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <TopTabs />

        <form className="bg-white rounded-xl shadow-sm p-4 mt-6" onSubmit={handleSubmit}>
          <h3 className="font-semibold text-green-700 mb-3">+ Add Income</h3>

          <div className="grid sm:grid-cols-3 gap-3">
            <input
              className="border px-3 py-2 rounded"
              placeholder="Source (Crop sale, Milk sale)"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              required
            />

            <input
              type="number"
              className="border px-3 py-2 rounded"
              placeholder="Amount (₹)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />

            <input
              type="date"
              className="border px-3 py-2 rounded"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded">
            Save Income
          </button>
        </form>

        <div className="bg-white rounded-xl shadow-sm p-4 mt-6">
          <div className="flex justify-between mb-2">
            <h3 className="font-semibold">Recent Income</h3>
            {incomes.length > 3 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-green-600 text-sm"
              >
                {showAll ? "Hide history" : "See all history"}
              </button>
            )}
          </div>

          {list.length === 0 && (
            <p className="text-sm text-gray-500">No income added yet</p>
          )}

          {list.map((i) => (
            <div key={i.id} className="flex justify-between py-2 border-b">
              <div>
                <p className="font-medium">{i.source}</p>
                <p className="text-xs text-gray-500">{i.date}</p>
              </div>
              <p className="text-green-700 font-semibold">₹{i.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
