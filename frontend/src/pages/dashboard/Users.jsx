
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8000/api"
    : "/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/users`, {
        withCredentials: true,
      });
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-8">
      {/* Header and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Users</h1>
        <input
          type="text"
          placeholder="Search by email or name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
      </div>

      {/* User Cards */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-32 bg-gray-200 rounded-xl"
            ></div>
          ))}
        </div>
      ) : filteredUsers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <div
              key={user._id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
            >
              <div className="font-semibold text-lg text-gray-900">
                {user.name}
              </div>
              <div className="text-sm text-gray-700 truncate">{user.email}</div>

              <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600">
                <span className="bg-gray-100 px-2 py-0.5 rounded-full">
                  Role: <span className="capitalize">{user.role}</span>
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full ${
                    user.isVerified ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {user.isVerified ? "Verified" : "Not Verified"}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10 text-sm">
          No users found.
        </div>
      )}
    </div>
  );
};

export default Users;
