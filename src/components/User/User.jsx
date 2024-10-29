import css from './User.module.css';

export function User({ name, lastName }) {
  return (
    <div className={css.contUser}>
      <p>{name}</p>
      <p>{lastName}</p>
    </div>
  );
}
