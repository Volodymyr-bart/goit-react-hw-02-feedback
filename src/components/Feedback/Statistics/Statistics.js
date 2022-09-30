export const Statistics = ({ options: { Good, Neutral, Bad } }) => {
  const total = Good + Neutral + Bad;
  const positivePercentage = Math.round((Good / total) * 100);
  return (
    <div>
      <span>Good:{Good}</span>
      <span>Neutral:{Neutral}</span>
      <span>Bad:{Bad}</span>
      <span>Total{total}</span>
      <span>Percent{positivePercentage}%</span>
    </div>
  );
};
