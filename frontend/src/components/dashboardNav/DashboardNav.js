import {
  HomeIcon,
  ScanSearchIcon,
  MailIcon,
  BarChart2Icon,
  UsersIcon,
  ShieldIcon,
  SettingsIcon,
} from "lucide-react";

export const navConfig = {
  admin: [
    { name: "Overview", icon: HomeIcon, path: "overview" },
    { name: "Drug Verification Logs", icon: ScanSearchIcon, path: "verifications" },
    { name: "Mail Reports", icon: MailIcon, path: "reportMails" },
    { name: "Analytics", icon: BarChart2Icon, path: "analytics" },
    { name: "Users", icon: UsersIcon, path: "users" },
    { name: "Roles", icon: ShieldIcon, path: "roles" },
    { name: "Settings", icon: SettingsIcon, path: "settings" },
  ],

  subadmin: [
    { name: "Overview", icon: HomeIcon, path: "overview" },
    { name: "Drug Verification Logs", icon: ScanSearchIcon, path: "verifications" },
    { name: "Mail Reports", icon: MailIcon, path: "reportMails" },
    { name: "Analytics", icon: BarChart2Icon, path: "analytics" },
  ],
};