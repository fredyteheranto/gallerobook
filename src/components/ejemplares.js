import { CardEjemplares } from './Card';
import FormGeneric from './FormGeneric';
import { Madres } from './Madres';
import ModalGallero, { ModalGalleria } from './Modal';

const Ejemplares = ({ title }) => {
  const guardaData = () => {
    console.log('plk');
  };
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-8/12 bg-gray-800 py-6 px-6 rounded-3xl">
        <div className="flex justify-between text-white items-center mb-8">
          <p className="text-2xl font-bold">{title}</p>

          <button className="">
            {' '}
            <ModalGallero name="Agregar Ejemplar" subtmit={guardaData}>
              <FormGeneric />
            </ModalGallero>
          </button>
        </div>

        <div className="flex flex-wrap">
          <CardEjemplares
            fecha="12-12-12"
            nombre="01902"
            imagen="https://i.postimg.cc/JnMSd1Bs/Whats-App-Image-2022-08-15-at-8-46-03-AM.jpg"
            trabajos="3 trabajos"
            pluma="Gallino"
            marca="0"
            estado="0"
          />
        </div>
      </div>
      <div className="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
        <div className="bg-gray-800 rounded-3xl px-6 pt-6">
          <div className="flex text-white text-2xl pb-6 font-bold">
            <p>Relación de Madres</p>
          </div>
          <div>
            <Madres
              pluma="china"
              nombre="#1232"
              fecha="12-12-12"
              imagen="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ejemplares;
