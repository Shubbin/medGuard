import {
  HomeIcon,
  ScanSearchIcon,
  CameraIcon,
  MicIcon,
  MailIcon,
  BarChart2Icon,
  UsersIcon,
  ShieldIcon,
  SettingsIcon,
} from "lucide-react";

export const navConfig = {
  admin: [
    { name: "Overview", icon: HomeIcon, tab: "overview" },
    { name: "Drug Verification Logs", icon: ScanSearchIcon, tab: "verifications" },
    { name: "Image Reports", icon: CameraIcon, tab: "image-reports" },
    { name: "Voice Search Logs", icon: MicIcon, tab: "voice-logs" },
    { name: "Mail Reports", icon: MailIcon, tab: "mails" },
    { name: "Analytics", icon: BarChart2Icon, tab: "analytics" },
    { name: "Users", icon: UsersIcon, tab: "users" },
    { name: "Roles", icon: ShieldIcon, tab: "roles" },
    { name: "Settings", icon: SettingsIcon, tab: "settings" },
  ],

  subadmin: [
    { name: "Overview", icon: HomeIcon, tab: "overview" },
    { name: "Drug Verification Logs", icon: ScanSearchIcon, tab: "verifications" },
    { name: "Image Reports", icon: CameraIcon, tab: "image-reports" },
    { name: "Mail Reports", icon: MailIcon, tab: "mails" },
    { name: "Analytics", icon: BarChart2Icon, tab: "analytics" },
  ],
};
