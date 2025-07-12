export function Sidebar({ navItems, activeTab, setActiveTab }) {
  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen p-6">
      <nav aria-label="Sidebar Navigation">
        <ul className="space-y-4">
          {navItems.map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <li key={item.tab}>
                <button
                  onClick={() => setActiveTab(item.tab)}
                  className={`group flex items-center gap-3 w-full px-4 py-2 rounded-lg transition duration-200
                    ${isActive ? "bg-blue-100 text-[#2563eb]" : "text-gray-700 hover:bg-gray-100"}
                    focus:outline-none focus:ring-2 focus:ring-[#2563eb]`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <div
                    className={`flex items-center justify-center h-9 w-9 rounded-full transition-colors
                      ${isActive ? "bg-[#2563eb] text-white" : "bg-gray-200 group-hover:bg-gray-300 text-gray-600 group-hover:text-black"}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
