function Assistant() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-[#1c2412] mb-4">AI Assistant</h2>
      <div className="bg-white shadow p-4 rounded h-80 flex flex-col">
        <div className="flex-1 overflow-y-auto p-2">Chat messages here...</div>
        <input
          type="text"
          placeholder="Ask me anything..."
          className="border rounded p-2 mt-2"
        />
      </div>
    </div>
  );
}
export default Assistant;
