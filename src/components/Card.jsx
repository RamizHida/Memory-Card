import '../styles/styles.css';

export function Card({ url }) {
  return (
    <>
      <div className="gif-container">
        <img src={url} className="gif-card" />
      </div>
    </>
  );
}
