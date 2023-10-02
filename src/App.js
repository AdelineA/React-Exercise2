function App() {
  const handleClick = () => {
    alert("Clicked !");
  };
  return (
    <div className="py-10 flex items-center justify-center">
      <button
        onClick={handleClick}
        className="bg-gray-500 px-4 py-2 text-white rounded text-xl hover:bg-blue-200"
      >
        Click Me!
      </button>
    </div>
  );
}

export default App;
