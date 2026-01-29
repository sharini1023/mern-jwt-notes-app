import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/notes", {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log("FETCHED NOTES:", res.data);
      setNotes(res.data);
    } catch (err) {
      console.error("FETCH ERROR:", err.response?.data || err.message);
    }
  };

  const addNote = async () => {
    console.log("BUTTON CLICK WORKING");
    if (!title || !content) {
      alert("Fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/notes",
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("NOTE ADDED:", res.data);

      setTitle("");
      setContent("");
      fetchNotes();
    } catch (err) {
      console.error("ADD ERROR:", err.response?.data || err.message);
    }
  };

  return (
    <div style={{ width: "400px", margin: "auto", textAlign: "center" }}>
      <h2>My Notes</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", width: "100%", margin: "10px 0", padding: "8px" }}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ display: "block", width: "100%", margin: "10px 0", padding: "8px" }}
      />

      <button onClick={addNote} style={{ padding: "8px 15px" }}>
        Add Note
      </button>

      <hr />

      {notes.map((note) => (
        <div key={note._id} style={{ background: "#eee", padding: "10px", margin: "10px 0" }}>
          <h4>{note.title}</h4>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}
