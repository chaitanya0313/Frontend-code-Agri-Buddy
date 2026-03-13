import Header from "../components/Header";
import TopTabs from "../components/Toptabs";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <TopTabs />

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Profit / Loss Overview
          </h2>
          <p className="text-sm text-gray-500">This Month</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <p className="text-sm text-gray-500">Total Income</p>
            <p className="text-2xl font-semibold text-green-600">₹125,000</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4">
            <p className="text-sm text-gray-500">Total Expenses</p>
            <p className="text-2xl font-semibold text-orange-500">₹87,500</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 sm:col-span-2">
            <p className="text-sm text-gray-500">Net Profit</p>
            <p className="text-2xl font-semibold text-green-700">₹37,500</p>
          </div>
        </div>
      </div>
    </div>
  );
}
