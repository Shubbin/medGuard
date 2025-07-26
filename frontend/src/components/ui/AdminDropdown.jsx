const AdminDropdown = ({ links, dropdownVisibility }) => {
  return (
    <>
      {dropdownVisibility && (
        <div className="absolute w-56 top-20 right-4 bg-primary-dark rounded-xl p-2">
          {links.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-4 p-4 text-white hover:bg-white/30 rounded-xl cursor-pointer"
            >
              <Icon className="h-4" /> <h1>{label} </h1>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AdminDropdown;
