function AdminDashboard() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-[#1c2412] mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white shadow p-6 rounded">
          <h3 className="font-bold">📊 Active Users Chart</h3>
          <div className="h-40 flex items-center justify-center text-gray-500">
            Chart Placeholder
          </div>
        </div>
        <div className="bg-white shadow p-6 rounded">
          <h3 className="font-bold">👥 Live Users</h3>
          <p>Currently: 12 active users</p>
        </div>
      </div>

      <div className="mt-6 bg-white shadow p-6 rounded">
        <h3 className="font-bold">📚 Book Approvals</h3>
        <div className="flex justify-between items-center mt-3 border-b pb-2">
          <span>Sample Book 1</span>
          <div>
            <button className="bg-green-600 text-white px-3 py-1 rounded mr-2">Accept</button>
            <button className="bg-red-600 text-white px-3 py-1 rounded">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminDashboard;
