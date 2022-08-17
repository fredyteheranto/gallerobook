const FormGeneric = () => {
  return (
    <div>
      {' '}
      <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
        <label className="block text-black text-sm font-bold mb-1">
          First Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
        <label className="block text-black text-sm font-bold mb-1">
          Last Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
        <label className="block text-black text-sm font-bold mb-1">
          Address
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
        <label className="block text-black text-sm font-bold mb-1">City</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
      </form>
    </div>
  );
};

export default FormGeneric;
