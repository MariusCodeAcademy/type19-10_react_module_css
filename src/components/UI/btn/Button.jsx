import css from './Button.module.css';

export default function Button({ children, className = '', onClick = () => {} }) {
  // return <button className={css.btn + ' ' + className}>{children}</button>;
  return (
    <button onClick={onClick} className={`${css.btn} ${className}`}>
      {children}
    </button>
  );
  // return <button className={[css.btn, className].join(' ')}>{children}</button>;
}
