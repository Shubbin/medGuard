// src/components/dashboardComponets/Reportmails/MailReportCard.jsx

import { Card, CardContent } from "../../ui/card";
import { MapPin, CalendarDays } from "lucide-react";

const ReportMailCard = ({ report }) => {
  if (!report) return null;

  return (
    <Card className="shadow-lg hover:shadow-xl transition overflow-hidden">
      {report.photo && (
        <img
          src={`https://medguardapi.onrender.com/uploads/${report.photo}`}
          alt={report.drugName || "Report"}
          className="w-full h-48 object-cover"
        />
      )}

      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {report.drugName}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {report.description}
        </p>

        <div className="flex items-center text-xs text-gray-500 gap-2 mt-2">
          <MapPin className="w-4 h-4" />
          <span>{report.location}</span>
        </div>

        <div className="flex items-center text-xs text-gray-500 gap-2">
          <CalendarDays className="w-4 h-4" />
          <span>{new Date(report.createdAt).toLocaleString()}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportMailCard;
