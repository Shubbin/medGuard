// UserActions.jsx
import { Trash2Icon } from "lucide-react";

const UserActions = ({ userId, userRole, onRoleChange, onDelete }) => {
  return (
    <div className="flex justify-between items-center gap-2 pt-4">
      <select
        value={userRole}
        onChange={(e) => onRoleChange(userId, e.target.value)}
        className="border border-gray-300 px-2 py-1 rounded text-sm"
      >
        <option value="user">User</option>
        <option value="sub-admin">Sub-Admin</option>
        <option value="admin">Admin</option>
      </select>

      <button
        onClick={() => onDelete(userId)}
        className="text-red-500 hover:text-red-700"
        title="Delete User"
      >
        <Trash2Icon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default UserActions;
