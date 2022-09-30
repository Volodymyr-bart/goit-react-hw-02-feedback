export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <div>
      {keys.map(key => (
        <li key={key}>
          <button onClick={() => onLeaveFeedback(key)}>{key}</button>
        </li>
      ))}
    </div>
  );
};
