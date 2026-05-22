export function getAudit(data: any) {
  let savings = 0;
  let suggestions = [];

  if (data.tool === "ChatGPT") {
    savings = data.seats * 15;
    suggestions.push("Reduce ChatGPT seats");
  }

  if (data.tool === "Cursor") {
    savings = 20;
    suggestions.push("Remove unused Cursor seats");
  }

  if (data.tool === "Copilot") {
    savings = data.seats * 10;
    suggestions.push("Optimize Copilot plan");
  }

  return {
    savingsMonthly: savings,
    savingsYearly: savings * 12,
    suggestions,
  };
}