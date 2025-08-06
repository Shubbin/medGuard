import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { PlusCircle, XCircle } from "lucide-react";

export default function RoleForm({ onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-white shadow-black shadow-sm p-4 rounded-lg">
      <CardHeader>
        <CardTitle>Add New Role</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold">Role Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-black px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-black px-3 py-2 rounded"
              rows={3}
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="bg-danger text-white font-bold flex gap-2"
            >
              Cancel
              <XCircle size={20} />
            </Button>
            <Button
              type="submit"
              className="bg-primary-dark text-white font-bold flex gap-2"
            >
              Create
              <PlusCircle size={20} />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}