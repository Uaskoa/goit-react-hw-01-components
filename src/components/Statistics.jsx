import PropTypes from "prop-types";


const Statistics = ({ title, stats }) => (
  <div>
        {title && <h2>{ title}</h2>}
    <ul>
      {stats.map(({ id, label, percentage }) => (
        <li key={id}>
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
      ))}
    </ul>
  </div>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;