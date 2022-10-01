import { ListOptions, OptionsItem } from './Statistics.styled';
export const Statistics = ({ options: { Good, Neutral, Bad } }) => {
  const total = Good + Neutral + Bad;
  const positivePercentage = Math.round((Good / total) * 100);
  return (
    <ListOptions>
      <OptionsItem>Good: {Good}</OptionsItem>
      <OptionsItem>Neutral: {Neutral}</OptionsItem>
      <OptionsItem>Bad: {Bad}</OptionsItem>
      <OptionsItem>Total {total}</OptionsItem>
      <OptionsItem>Percent {positivePercentage}%</OptionsItem>
    </ListOptions>
  );
};
