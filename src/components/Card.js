export const CardEjemplares = ({
  imagen,
  fecha,
  nombre,
  trabajos,
  marca,
  pluma,
  estado,
}) => (
  <div className="w-full md:w-4/12">
    <div className="p-2">
      <div className="p-4 rounded-3xl" style={{ backgroundColor: '#fff' }}>
        <div className="flex justify-between pt-0 relative">
          <div className="flex items-center">
            <div className="flex space-x-2 justify-center">
              <p className="text-base font-bold opacity-70">
                {' '}
                Nombre : #{nombre}
              </p>
            </div>
          </div>
          <div className="flex space-x-2 justify-center">
            <p className="text-base font-bold opacity-70">
              <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">
                {estado == '1' ? 'De pelea' : 'Trabajando'}
              </span>
            </p>
          </div>
        </div>
        <div className="text-center mb-4 mt-5">
          <div className="text-sm opacity-90 mt-2 flex items-center">
            <img
              className="items-center  overflow-hidden object-cover "
              height="200px"
              width="200px"
              src={
                imagen
                  ? imagen
                  : 'https://i.postimg.cc/qMJDfbR5/Whats-App-Image-2022-08-15-at-10-41-48-AM.jpg'
              }
              style={{ margin: '0 auto' }}
              alt="participant"
            />
          </div>
        </div>
        <div className="flex justify-between pt-0 relative">
          <div className="flex space-x-2  pt-0 ">Pluma : {pluma}</div>
          <div className="flex space-x-2  pt-0 "> {trabajos}</div>
        </div>
        <div className="flex justify-between pt-0 relative">
          <div className="flex items-center">
            <div className="flex space-x-2 justify-center">
              <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">
                1 G
              </span>
              <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                1 T
              </span>
              <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded">
                0 P
              </span>
            </div>
          </div>
          <div className="flex space-x-2 justify-center">
            <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-400 text-white rounded">
              {marca == 0 ? 'No marcado' : 'Marca ' + marca}
            </span>
          </div>
        </div>
        <div className="pt-4">
          <div className="flex space-x-2 justify-center">
            <button className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-700 text-white rounded">
              Ver Gallo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
