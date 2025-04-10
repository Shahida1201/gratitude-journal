export default function GratitudeList({ entries, onDelete }) {
  return (
    <ul className="gratitude-list">
      {entries.map((entry, index) => (
        <li key={index}>
          <div>
            <strong>{entry.text}</strong>
            <div className="timestamp">{entry.timestamp}</div>
          </div>
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
