export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center w-12 h-12 bg-white rounded-full">
      <div className="w-3 h-3 bg-red-600 rounded-full mb-0.5"/>
      <div className="flex mt-0.5">
        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-0.5"/>
        <div className="w-3 h-3 bg-green-600 rounded-full ml-0.5"/>
      </div>
    </div>
  );
}

