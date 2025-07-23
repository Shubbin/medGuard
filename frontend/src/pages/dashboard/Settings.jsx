import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import {
  Camera,
  Lock,
  LogOut,
  Moon,
  MoonStar,
  SettingsIcon,
} from "lucide-react";

export default function Settings() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <SettingsIcon className="w-6 h-6 text-primary" />
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>

      <Card>
        <div className="p-4">
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
            <div className="mt-4">
              <Button>Save Changes</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
