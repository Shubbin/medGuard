import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import  Input  from "../../../components/Input";
import { Button } from "../../../components/ui/button";
import { X } from "lucide-react";

export default function RoleForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Fetch user by email
      const res = await fetch("http://localhost:8000/api/admin/users");
      const allUsers = await res.json();
      const user = allUsers.find((u) => u.email === email);

      if (!user) {
        setError("User not found");
        setLoading(false);
        return;
      }

      const resUpdate = await fetch(`http://localhost:8000/api/admin/users/${user._id}/role`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
      });

      if (!resUpdate.ok) {
        throw new Error("Failed to update role");
      }

      // ✅ Role updated
      onClose();
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white border shadow-lg">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-lg">Assign Role to User</CardTitle>
        <Button variant="ghost" onClick={onClose}>
          <X />
        </Button>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <Input
            type="email"
            placeholder="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <select
            className="w-full px-4 py-2 border rounded"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="sub-admin">Sub-Admin</option>
            <option value="admin">Admin</option>
          </select>

          {error && <p className="text-red-600 text-sm">{error}</p>}
        </CardContent>

        <CardFooter>
          <Button type="submit" className="w-full bg-primary-dark text-white" disabled={loading}>
            {loading ? "Assigning..." : "Assign Role"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
