import { Button } from "../../ui/button";

export default function RoleTable({ roles, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-muted shadow-sm bg-white">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-background-light text-gray-700 uppercase text-xs">
          <tr>
            <th className="px-4 py-3">Role Name</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="border-t border-muted hover:bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-900">{role.name}</td>
              <td className="px-4 py-3 text-gray-600">{role.description}</td>
              <td className="px-4 py-3 space-x-2">
                <Button variant="outline">Edit</Button>
                <Button
                  variant="destructive"
                  onClick={() => onDelete(role.id)}
                >
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
