import { PencilIcon, Trash2Icon } from "lucide-react";

const UserActions = ({ userId }) => {
  const handleEdit = () => {
    console.log("Edit user", userId);
  };

  const handleDelete = () => {
    console.log("Delete user", userId);
  };

  return (
    <div className="flex justify-end gap-2 pt-2">
      <button
        onClick={handleEdit}
        className="text-blue-500 hover:text-blue-700"
        title="Edit"
      >
        <PencilIcon className="w-4 h-4" />
      </button>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700"
        title="Delete"
      >
        <Trash2Icon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default UserActions;
