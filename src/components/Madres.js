export const Madres = ({ imagen, fecha, nombre, placa, pluma }) => (
  <div className="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full hover:bg-gray-700">
    <img
      src={
        imagen ||
        'https://i.postimg.cc/qMJDfbR5/Whats-App-Image-2022-08-15-at-10-41-48-AM.jpg'
      }
      alt="profile image"
      className="object-cover w-10 h-10 rounded-full"
    />
    <div className="pl-4 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="text-white font-medium">
          Gallina {pluma} / {nombre}{' '}
        </div>
      </div>
      <p className="my-2 text-sm text-gray-400">
        Madre placa #1209 traida de europa
      </p>
      <p className="text-right text-gray-400 text-sm">Ver Gallina</p>
    </div>
  </div>
);
