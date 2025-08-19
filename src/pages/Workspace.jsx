import { useState } from "react";
import { Save, Trash2 } from "lucide-react";

function Workspace() {
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    alert("Notes saved! (You can later connect this to backend)");
  };

  const handleClear = () => {
    setNotes("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl p-8">
        <h2 className="text-3xl font-bold text-[#1c2412] mb-6 text-center">
          ✍️ Your Workspace
        </h2>

        {/* Toolbar */}
        <div className="flex justify-end gap-3 mb-4">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
          >
            <Save size={18} /> Save
          </button>
          <button
            onClick={handleClear}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
          >
            <Trash2 size={18} /> Clear
          </button>
        </div>

        {/* Notes area */}
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Start writing your notes..."
          className="w-full h-72 border rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 shadow-inner"
        />

        {/* Word & Character Count */}
        <div className="mt-3 text-gray-500 text-sm flex justify-between">
          <span>{notes.split(/\s+/).filter(Boolean).length} words</span>
          <span>{notes.length} characters</span>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
