import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { SettingsIcon } from "lucide-react";

export default function Settings() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <SettingsIcon className="text-primary w-6 h-6" />
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>

      <Card>
        <div className="p-4">
          <h2 className="text-xl font-medium mb-2">General Settings</h2>
          <Separator />
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Update your dashboard preferences and configurations.
            </p>
            <div className="mt-4">
              <Button>Save Changes</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
