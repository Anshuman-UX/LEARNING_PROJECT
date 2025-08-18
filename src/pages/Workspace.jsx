import { useState } from "react";

function Workspace() {
  const [notes, setNotes] = useState("");

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-[#1c2412] mb-4">Your Notes</h2>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your notes here..."
        className="w-full h-64 border rounded p-3"
      />
    </div>
  );
}
export default Workspace;
