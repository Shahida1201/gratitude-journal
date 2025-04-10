import { useEffect, useState } from "react";
import "./index.css";

const affirmations = [
  "You are enough just as you are.",
  "Today is a fresh start.",
  "Every step forward matters.",
  "You are doing your best, and that’s enough.",
  "Believe in the power of small wins."
];

const motivationalQuote =
  "“Gratitude turns what we have into enough.” – Aesop";

function App() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);
  const [mood, setMood] = useState("🙂");

  useEffect(() => {
    const saved = localStorage.getItem("gratitudeEntries");
    if (saved) {
      setEntries(JSON.parse(saved));
    }
    showAffirmation();
  }, []);

  const handleAddEntry = () => {
    if (entry.trim() === "") return;
    const newEntry = {
      text: entry,
      date: new Date().toLocaleDateString(),
      mood
    };
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    setEntry("");
    localStorage.setItem("gratitudeEntries", JSON.stringify(updatedEntries));
  };

  const handleDelete = (indexToDelete) => {
    const updatedEntries = entries.filter((_, i) => i !== indexToDelete);
    setEntries(updatedEntries);
    localStorage.setItem("gratitudeEntries", JSON.stringify(updatedEntries));
  };

  const showAffirmation = () => {
    const today = new Date().toDateString();
    const lastShown = localStorage.getItem("affirmationDate");
    if (lastShown !== today) {
      const affirmation =
        affirmations[Math.floor(Math.random() * affirmations.length)];
      alert(`✨ Daily Affirmation:\n${affirmation}`);
      localStorage.setItem("affirmationDate", today);
    }
  };

  return (
    <div className="container">
      <h1>Gratitude Journal 📝</h1>
      <p className="quote">🌟 {motivationalQuote}</p>

      <textarea
        rows="4"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write something you're grateful for today..."
      />

      <div className="mood-selector">
        <label>Select your mood:</label>
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option>😊</option>
          <option>😌</option>
          <option>😄</option>
          <option>🙏</option>
          <option>❤️</option>
        </select>
      </div>

      <button onClick={handleAddEntry}>Add Entry ➕</button>

      <div className="entries">
        {entries.map((item, index) => (
          <div className="entry" key={index}>
            <div className="meta">
              <span>{item.date}</span> <span>{item.mood}</span>
            </div>
            <p>{item.text}</p>
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              🗑️ Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
