import { Card, CardContent } from "../../ui/card";
import UserActions from "./UserActions";

const UserCard = ({ user }) => {
  return (
    <Card className="rounded-xl shadow-lg hover:shadow-xl transition duration-200">
      <CardContent className="p-5 space-y-2">
        <div className="font-semibold text-lg">{user.name}</div>
        <div className="text-sm text-gray-600">{user.email}</div>
        <div className="text-sm text-blue-600 font-medium">{user.role}</div>

        <UserActions userId={user.id} />
      </CardContent>
    </Card>
  );
};

export default UserCard;
