import PropTypes from 'prop-types';

function Card({ name, count, arr }) {
  return (
    <div>
      <p>card</p>
      <h2>{name}</h2>
      <p>{count}</p>
      {arr?.map((str) => (
        <p key={str}>one</p>
      ))}
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  arr: PropTypes.array,
};

export default Card;
