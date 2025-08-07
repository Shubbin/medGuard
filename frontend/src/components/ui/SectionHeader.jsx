const SectionHeader = ({ title, icon: Icon }) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      {Icon && <Icon className="w-6 h-6 text-green-600" />}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h1>
    </div>
  );
};

export default SectionHeader;
