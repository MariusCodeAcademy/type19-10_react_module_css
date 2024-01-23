import PropTypes from 'prop-types';

function Card({ name, count }) {
  return (
    <div>
      <p>card</p>
      <h2>{name}</h2>
      <p>{count}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Card;
