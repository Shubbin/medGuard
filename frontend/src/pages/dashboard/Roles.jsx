import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import RoleTable from "../../components/dashboardComponets/roles/RoleTable";
import RoleForm from  "../../components/dashboardComponets/roles/RoleForm";

export default function Roles() {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", description: "Full access to everything" },
    { id: 2, name: "Editor", description: "Can edit content" },
    { id: 3, name: "Viewer", description: "Can only view content" },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleAddRole = (newRole) => {
    setRoles([...roles, { ...newRole, id: Date.now() }]);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Roles Management</CardTitle>
          <Button onClick={() => setShowForm(true)}>Add Role</Button>
        </CardHeader>
        <CardContent>
          <RoleTable roles={roles} onDelete={handleDelete} />
        </CardContent>
      </Card>

      {showForm && (
        <RoleForm onSubmit={handleAddRole} onClose={() => setShowForm(false)} />
      )}
    </div>
  );
}
