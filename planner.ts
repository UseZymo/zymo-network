export function createPlan(
  goal: string
) {

  return {
    goal,
    steps: [
      "Analyze",
      "Plan",
      "Execute",
      "Complete"
    ]
  };

}
