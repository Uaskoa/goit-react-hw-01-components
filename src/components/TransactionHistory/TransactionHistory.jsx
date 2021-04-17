import PropTypes from "prop-types";
import "./TransactionHistory.scss";

const TransactionHistory = ({ items }) => (
  <table className="transaction-history">
    <thead className="transaction-history-head">
      <tr>
        <th className="transaction-history-head-item">Type</th>
        <th className="transaction-history-head-item">Amount</th>
        <th className="transaction-history-head-item">Currency</th>
      </tr>
    </thead>
    <tbody className="transaction-history-body">
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className="transaction-history-body-list">
          <td className="transaction-history-body-item">{type}</td>
          <td className="transaction-history-body-item">{amount}</td>
          <td className="transaction-history-body-item">{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
