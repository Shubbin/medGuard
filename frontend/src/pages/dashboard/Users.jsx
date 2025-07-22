// Users.jsx
import { useState } from "react";
import axios from "axios";
import UserCard from "../../components/dashboardComponets/users/UserCard";

const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8000/api"
    : "/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API_URL}/admin/users`, {
        withCredentials: true,
      });
      setUsers(data.users);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId, newRole) => {
    try {
      await axios.patch(
        `${API_URL}/admin/update-role`,
        { userId, newRole },
        { withCredentials: true }
      );
      fetchUsers();
    } catch (err) {
      console.error("Role update failed:", err);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`${API_URL}/admin/user/${userId}`, {
        withCredentials: true,
      });
      fetchUsers();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Users</h1>
        <input
          type="text"
          placeholder="Search by email or name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-xl" />
          ))}
        </div>
      ) : filteredUsers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <UserCard
              key={user._id}
              user={user}
              handleRoleChange={handleRoleChange}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No users found.</div>
      )}
    </div>
  );
};

export default Users;
