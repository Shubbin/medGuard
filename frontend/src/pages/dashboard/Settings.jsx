import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
<<<<<<< HEAD
import { SettingsIcon } from "lucide-react";
=======
import {
  Camera,
  Lock,
  LogOut,
  Moon,
  MoonStar,
  SettingsIcon,
} from "lucide-react";
>>>>>>> 53969141104cea62380aca306f9e80e9d816a024

export default function Settings() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
<<<<<<< HEAD
        <SettingsIcon className="text-primary w-6 h-6" />
=======
        <SettingsIcon className="w-6 h-6 text-primary" />
>>>>>>> 53969141104cea62380aca306f9e80e9d816a024
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>

      <Card>
        <div className="p-4">
<<<<<<< HEAD
          <h2 className="text-xl font-medium mb-2">General Settings</h2>
          <Separator />
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Update your dashboard preferences and configurations.
            </p>
=======
          <h2 className="mb-2 text-xl font-medium">General Settings</h2>
          <Separator />
          <div className="mt-4">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center justify-center gap-4 shadow-md py-14 rounded-xl">
                <Camera
                  className="p-2 text-white rounded-full bg-primary-dark"
                  size={40}
                />
                Update Profile Icon
              </div>
              <div className="flex flex-col items-center justify-center gap-4 shadow-md py-14 rounded-xl">
                <Lock className="p-2 text-white rounded-full bg-primary-dark" size={40} />
                Change Password
              </div>
              <div className="flex flex-col items-center justify-center gap-4 shadow-md py-14 rounded-xl">
                <Moon className="p-2 text-white rounded-full bg-primary-dark" size={40} />
                Toggle Dark Mode
              </div>
              <div className="flex flex-col items-center justify-center gap-4 shadow-md py-14 rounded-xl">
                <LogOut
                  className="p-2 text-white rounded-full bg-primary-dark"
                  size={40}
                />
                Logout
              </div>
            </div>
>>>>>>> 53969141104cea62380aca306f9e80e9d816a024
            <div className="mt-4">
              <Button>Save Changes</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
