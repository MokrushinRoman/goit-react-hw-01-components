import PropTypes from 'prop-types';

export const TransactionHistory = ({ operations }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {operations.map(({ id, type, amount, currancy }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount} </td>
            <td>{currancy} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  operations: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currancy: PropTypes.string.isRequired,
    })
  ).isRequired,
};
