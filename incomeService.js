// Later replace fetch URL with your backend endpoint

export async function addIncome(incomeData) {
  const response = await fetch("/api/income", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(incomeData),
  });

  return response.json();
}

export async function getIncomes() {
  const response = await fetch("/api/income");
  return response.json();
}
