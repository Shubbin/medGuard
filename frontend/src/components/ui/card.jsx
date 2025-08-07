const Card = ({ children, className = "bg-white rounded-xl shadow p-6 border border-[#B7D3E3]" }) => {
  return <div className={className}>{children}</div>;
};

const CardHeader = ({ children, className = "mb-4" }) => {
  return <div className={className}>{children}</div>;
};

const CardTitle = ({ children, className = "text-xl font-bold text-[#2563eb]" }) => {
  return <h3 className={className}>{children}</h3>;
};

const CardContent = ({ children, className = "text-sm text-[#1f2937]" }) => {
  return <div className={className}>{children}</div>;
};

const CardFooter = ({ children, className = "mt-4 border-t pt-4 flex justify-end" }) => {
  return <div className={className}>{children}</div>;
};

export { Card, CardHeader, CardTitle, CardContent, CardFooter};
