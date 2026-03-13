export async function addExpense(expenseData) {
  const response = await fetch("/api/expense", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expenseData),
  });

  return response.json();
}

export async function getExpenses() {
  const response = await fetch("/api/expense");
  return response.json();
}
