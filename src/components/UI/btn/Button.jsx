import PropTypes from 'prop-types';
import css from './Button.module.css';

function Button({ children, className = '', onClick = () => {} }) {
  // return <button className={css.btn + ' ' + className}>{children}</button>;
  return (
    <button onClick={onClick} className={`${css.btn} ${className}`}>
      {children}
    </button>
  );
  // return <button className={[css.btn, className].join(' ')}>{children}</button>;
}
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
