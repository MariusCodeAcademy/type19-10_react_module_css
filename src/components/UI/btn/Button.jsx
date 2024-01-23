import css from './Button.module.css';

export default function Button({ children, className = '' }) {
  // return <button className={css.btn + ' ' + className}>{children}</button>;
  return <button className={`${css.btn} ${className}`}>{children}</button>;
  // return <button className={[css.btn, className].join(' ')}>{children}</button>;
}
