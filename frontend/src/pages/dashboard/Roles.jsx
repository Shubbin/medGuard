import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import RoleTable from "../../components/dashboardComponets/roles/RoleTable";
import RoleForm from "../../components/dashboardComponets/roles/RoleForm";
<<<<<<< HEAD
=======
import { PlusCircle } from "lucide-react";
>>>>>>> 53969141104cea62380aca306f9e80e9d816a024

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
<<<<<<< HEAD
    <section className="p-4 sm:p-6 md:p-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">Roles Management</h1>
        <p className="text-gray-600">
          Manage permissions and responsibilities within your system.
        </p>
      </div>

      <Card className="shadow-md rounded-2xl border border-muted bg-white">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-800">
            Current Roles
          </CardTitle>
          <Button
            onClick={() => setShowForm(true)}
            className="bg-primary text-white"
          >
            + Add Role
          </Button>
        </CardHeader>
        <CardContent className="pt-0">
=======
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Roles Management</CardTitle>
          <Button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 mb-2 text-white bg-primary-dark"
          >
            <PlusCircle size={20} />
            Add Role
          </Button>
        </CardHeader>
        <CardContent>
>>>>>>> 53969141104cea62380aca306f9e80e9d816a024
          <RoleTable roles={roles} onDelete={handleDelete} />
        </CardContent>
      </Card>

      {showForm && (
        <RoleForm onSubmit={handleAddRole} onClose={() => setShowForm(false)} />
      )}
<<<<<<< HEAD
    </section>
  );
}



=======
    </div>
  );
}
>>>>>>> 53969141104cea62380aca306f9e80e9d816a024
