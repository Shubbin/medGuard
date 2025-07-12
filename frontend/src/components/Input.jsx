const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className='relative mb-6'>
      {Icon && (
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <Icon className='w-5 h-5 text-primary' />
        </div>
      )}
      <input
        {...props}
        className='w-full pl-10 pr-3 py-2 bg-secondary bg-opacity-60 rounded-lg border border-primary focus:border-primary-dark focus:ring-2 focus:ring-primary-dark text-text placeholder-gray-400 transition duration-200 outline-none'
      />
    </div>
  );
};

export default Input;