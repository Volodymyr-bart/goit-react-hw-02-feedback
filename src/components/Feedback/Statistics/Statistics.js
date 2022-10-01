import { ListOptions, OptionsItem } from './Statistics.styled';
import PropTypes from 'prop-types';
export const Statistics = ({
  options: { Good, Neutral, Bad },
  total,
  positivePercentage,
}) => {
  return (
    <ListOptions>
      <OptionsItem>Good: {Good}</OptionsItem>
      <OptionsItem>Neutral: {Neutral}</OptionsItem>
      <OptionsItem>Bad: {Bad}</OptionsItem>
      <OptionsItem>Total: {total}</OptionsItem>
      <OptionsItem>Percent: {positivePercentage}%</OptionsItem>
    </ListOptions>
  );
};

Statistics.propTypes = {
  options: PropTypes.exact({
    Good: PropTypes.number.isRequired,
    Neutral: PropTypes.number.isRequired,
    Bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
