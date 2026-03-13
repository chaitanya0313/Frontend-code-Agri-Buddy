import { useState } from "react";
import Header from "../components/Header";
import TopTabs from "../components/Toptabs";

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setExpenses([
      { id: Date.now(), desc, amount: Number(amount), date },
      ...expenses,
    ]);

    setDesc("");
    setAmount("");
    setDate("");
  };

  const recent = expenses.slice(0, 3);
  const list = showAll ? expenses : recent;

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <TopTabs />

        <form className="bg-white rounded-xl shadow-sm p-4 mt-6" onSubmit={handleSubmit}>
          <h3 className="font-semibold text-orange-600 mb-3">+ Add Expense</h3>

          <div className="grid sm:grid-cols-3 gap-3">
            <input
              className="border px-3 py-2 rounded"
              placeholder="Expense (Seeds, Fertilizer, Diesel)"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
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

          <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded">
            Save Expense
          </button>
        </form>

        <div className="bg-white rounded-xl shadow-sm p-4 mt-6">
          <div className="flex justify-between mb-2">
            <h3 className="font-semibold">Recent Expenses</h3>
            {expenses.length > 3 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-orange-600 text-sm"
              >
                {showAll ? "Hide history" : "See all history"}
              </button>
            )}
          </div>

          {list.length === 0 && (
            <p className="text-sm text-gray-500">No expenses added yet</p>
          )}

          {list.map((e) => (
            <div key={e.id} className="flex justify-between py-2 border-b">
              <div>
                <p className="font-medium">{e.desc}</p>
                <p className="text-xs text-gray-500">{e.date}</p>
              </div>
              <p className="text-orange-600 font-semibold">₹{e.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
