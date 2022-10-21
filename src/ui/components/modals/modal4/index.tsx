import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import Button from '../../button';
import Modal from '../../modal';
import ModalContainer from '../../modalContainer';

const Modal4 = () => {
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );
  const Content1 = data.get('Content1');
  const Content2 = data.get('Content2');
  const Content3 = data.get('Content3');
  const Color1 = data.get('Color1');
  const Color2 = data.get('Color2');
  const Color3 = data.get('Color3');

  return (
    <ModalContainer>
      <Modal style={{ backgroundColor: Color2 }} className='h-72 w-480 py-12'>
        <div className='flex flex-col items-center justify-center'>
          <h1 style={{ color: Color1 }} className=' text-3xl font-bold'>
            {Content1}
          </h1>
          <h2
            style={{ color: Color1 }}
            className='mt-5 mb-8 w-80 text-center text-xl leading-6'
          >
            {Content2}
          </h2>

          <Button
            style={{ backgroundColor: Color3, color: Color2 }}
            className={`grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
          >
            {Content3}
          </Button>
        </div>
      </Modal>
    </ModalContainer>
  );
};
export default Modal4;
