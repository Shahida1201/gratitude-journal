import { useState } from "react";

export default function GratitudeForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form className="gratitude-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Write something you're grateful for..."
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
