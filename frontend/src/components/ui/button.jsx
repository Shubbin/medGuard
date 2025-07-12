
export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded focus:outline-none focus:ring ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}