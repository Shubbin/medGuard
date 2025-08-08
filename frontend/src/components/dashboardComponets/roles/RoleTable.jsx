import { useState, useEffect } from "react";
import RoleForm from "./RoleForm";
import { Pencil, Trash } from "lucide-react";

const RoleTable = () => {
  const [roles, setRoles] = useState([]);
  const [editingRole, setEditingRole] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rolesPerPage = 5;

  const fetchRoles = async () => {
    try {
      const res = await fetch("https://medguardapi.onrender.com/api/users", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch users");
      setRoles(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `https://medguardapi.onrender.com/api/users/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to delete user");
      fetchRoles();
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  const handleUpdate = async (id, newRole) => {
    try {
      const res = await fetch(
        `https://medguardapi.onrender.com/api/users/${id}/role`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ role: newRole }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update role");
      setEditingRole(null);
      fetchRoles();
    } catch (err) {
      console.error("Error updating role:", err);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const filteredRoles = roles.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRole = currentPage * rolesPerPage;
  const indexOfFirstRole = indexOfLastRole - rolesPerPage;
  const currentRoles = filteredRoles.slice(indexOfFirstRole, indexOfLastRole);
  const totalPages = Math.ceil(filteredRoles.length / rolesPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">User Role Management</h2>

      <input
        type="text"
        placeholder="Search by name or email"
        className="w-full p-2 mb-4 border rounded md:w-1/2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="w-full border border-collapse border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border border-primary-dark">Name</th>
            <th className="p-2 border border-primary-dark">Email</th>
            <th className="p-2 border border-primary-dark">Role</th>
            <th className="p-2 border border-primary-dark">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRoles.map((user) => (
            <tr key={user._id}>
              <td className="p-2 border border-primary-dark">{user.name}</td>
              <td className="p-2 border border-primary-dark">{user.email}</td>
              <td className="p-2 capitalize border border-primary-dark">
                {user.role}
              </td>
              <td className="flex gap-2 p-2 border border-r-primary-dark border-b-primary-dark">
                <button
                  onClick={() => setEditingRole(user)}
                  className="flex items-center gap-4 p-2 text-white bg-blue-600 rounded-md"
                >
                  Edit <Pencil size={15} />
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="flex items-center gap-4 p-2 text-white bg-red-600 rounded-md"
                >
                  Delete
                  <Trash size={15} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => handlePageChange(num)}
            className={`px-3 py-1 rounded border ${
              currentPage === num ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      {editingRole && (
        <RoleForm
          currentRole={editingRole}
          onCancel={() => setEditingRole(null)}
          onSave={handleUpdate}
        />
      )}
    </div>
  );
};

export default RoleTable;
