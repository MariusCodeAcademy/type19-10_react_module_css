import css from '../styles/button.module.css';

export default function AboutPage() {
  console.log('css ===', css);

  const obj = { 'hello its me': 5 };
  console.log('obj ===', obj);
  return (
    <div>
      <h1 className={css['d-none']}>AboutPage</h1>
      <p>
        Doloribus, repellendus! Saepe sapiente nesciunt corporis nulla ipsam hic quos dolorem
        Exercitationem excepturi iste dolore dicta. Omnis aspernatur ex magni illo sint, voluptatem
        nobis dolores ipsum.
      </p>
      <button className={css.btn}>Read more</button>
    </div>
  );
}
