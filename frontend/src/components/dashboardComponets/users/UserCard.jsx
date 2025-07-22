// UserCard.jsx
import { Card, CardContent } from "../../ui/card";
import UserActions from "./UserActions";

const UserCard = ({ user, handleRoleChange, handleDelete }) => {
  return (
    <Card className="rounded-xl shadow-lg hover:shadow-xl transition duration-200">
      <CardContent className="p-5 space-y-2">
        <div className="font-semibold text-lg">{user.name}</div>
        <div className="text-sm text-gray-600">{user.email}</div>

        <div className="flex flex-wrap gap-2 text-xs text-gray-600">
          <span className="bg-gray-100 px-2 py-0.5 rounded-full">
            Role: <span className="capitalize font-medium text-gray-800">{user.role}</span>
          </span>
          <span
            className={`px-2 py-0.5 rounded-full ${
              user.isVerified
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {user.isVerified ? "Verified" : "Not Verified"}
          </span>
        </div>

        <UserActions
          userId={user._id}
          userRole={user.role}
          onRoleChange={handleRoleChange}
          onDelete={handleDelete}
        />
      </CardContent>
    </Card>
  );
};

export default UserCard;
