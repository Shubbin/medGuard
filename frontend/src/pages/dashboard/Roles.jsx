import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import RoleTable from "../../components/dashboardComponets/roles/RoleTable";
import RoleForm from "../../components/dashboardComponets/roles/RoleForm";
import { PlusCircle } from "lucide-react";

export default function Roles() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // ✅ Correct endpoint
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("http://localhost:8000/api/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    }

    fetchUsers();
  }, []);

  // ✅ Correct endpoint
  const handleRoleUpdate = async (userId, updatedRole) => {
    try {
      const res = await fetch(`http://localhost:8000/api/users/${userId}/role`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: updatedRole }),
      });

      if (!res.ok) throw new Error("Failed to update role");

      const result = await res.json();
      const updatedUser = result.user;

      setUsers((prev) =>
        prev.map((user) => (user._id === userId ? updatedUser : user))
      );
    } catch (err) {
      console.error("Error updating role:", err);
    }
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Roles Management</CardTitle>
          <Button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 mb-2 text-white bg-primary-dark text-sm md:text-md"
          >
            <PlusCircle size={20} />
            Add Role
          </Button>
        </CardHeader>
        <CardContent>
          <RoleTable users={users} onDelete={handleDelete} onUpdateRole={handleRoleUpdate} />
        </CardContent>
      </Card>

      {showForm && (
        <RoleForm onClose={() => setShowForm(false)} />
      )}
    </div>
  );
}
