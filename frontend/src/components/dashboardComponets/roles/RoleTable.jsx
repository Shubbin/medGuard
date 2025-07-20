import { Button } from "../../ui/button";

export default function RoleTable({ roles, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Role Name</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="border-t">
              <td className="p-2">{role.name}</td>
              <td className="p-2">{role.description}</td>
              <td className="p-2 space-x-2">
                <Button variant="outline">Edit</Button>
                <Button variant="destructive" onClick={() => onDelete(role.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
