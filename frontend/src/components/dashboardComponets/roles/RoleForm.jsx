import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import Input from "../../../components/Input";
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
      const res = await fetch("https://medguardapi.onrender.com/api/users");
      const allUsers = await res.json();
      const user = allUsers.find((u) => u.email === email);

      if (!user) {
        setError("User not found");
        setLoading(false);
        return;
      }

      const resUpdate = await fetch(
        `https://medguardapi.onrender.com/api/users/${user._id}/role`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ role }),
        }
      );

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
    <Card
      className="w-full max-w-md mx-auto border shadow-xl p-4 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-gray-200 dark:border-gray-700 transition-all"
      style={{
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        borderRadius: "1.25rem",
      }}
    >
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-lg">Assign Role to User</CardTitle>
        <Button variant="ghost" onClick={onClose}>
          <X />
        </Button>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}
        </CardContent>

        <CardFooter>
          <Button
            type="submit"
            className="w-full bg-primary-dark text-white"
            disabled={loading}
          >
            {loading ? "Assigning..." : "Assign Role"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
