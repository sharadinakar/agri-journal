function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="bg-green-700 text-white font-Roboto px-4 py-2 rounded-full hover:bg-green-800 transition-all duration-300">
      {children}
    </button>
  );
}
