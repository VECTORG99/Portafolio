export default function LoadingSpinner({ label = '' }) {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner__ring" />
      {label && <p className="loading-spinner__label">{label}</p>}
    </div>
  );
}
