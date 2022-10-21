import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import Button from '../../button';
import { TrashIcon } from '../../icons';
import Modal from '../../modal';
import ModalContainer from '../../modalContainer';

const Modal3 = () => {
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );
  const Content1 = data.get('Content1');
  const Content2 = data.get('Content2');
  const Content3 = data.get('Content3');
  const Content4 = data.get('Content4');
  const Content5 = data.get('Content5');
  const Color1 = data.get('Color1');
  const Color2 = data.get('Color2');
  const Color3 = data.get('Color3');
  const Color4 = data.get('Color4');
  const Color5 = data.get('Color5');

  return (
    <ModalContainer>
      <Modal
        style={{ backgroundColor: Color2 }}
        className='h-[516px] w-[480px] bg-white py-10'
      >
        <div className='flex flex-col items-center justify-center'>
          <div
            className={`flex h-90 w-90 items-center justify-center rounded-full bg-primary transition duration-300`}
          >
            <TrashIcon />
          </div>
          <h1
            style={{ color: Color1 }}
            className='mt-7 mb-5 text-3xl font-bold'
          >
            {Content1}
          </h1>
          <h2
            style={{ color: Color1 }}
            className='mb-7 w-80 text-center text-xl leading-6'
          >
            {Content2}
          </h2>
          <h3 style={{ color: Color5 }} className='mb-9 w-60 leading-5 text-gray-dark '>{Content3}</h3>
          <div className='flex flex-col gap-4'>
            <Button style={{ backgroundColor: Color3 }}
              className={`grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
            >
              {Content4}
            </Button>
            <Button style={{ backgroundColor: Color2, borderColor: Color4}}
              className={`grid h-12 w-350 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium leading-5 text-black transition duration-300`}
            >
              {Content5}
            </Button>
          </div>
        </div>
      </Modal>
    </ModalContainer>
  );
};
export default Modal3;
