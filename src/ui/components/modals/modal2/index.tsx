import Image from 'next/image';
import Button from '../../button';
import Modal from '../../modal';
import { RootState } from '../../../../app/store';
import { useSelector } from 'react-redux';
import ModalContainer from '../../modalContainer';

const Modal2 = () => {
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );
  const Content1 = data.get('Content1');
  const Content2 = data.get('Content2');
  const Content3 = data.get('Content3');
  const Content4 = data.get('Content4');
  const Color1 = data.get('Color1');
  const Color2 = data.get('Color2');
  const Color3 = data.get('Color3');
  const Color4 = data.get('Color4');
  const image = data.get('Image');

  return (
    <ModalContainer>
      <Modal style={{ backgroundColor: Color2 }} className='h-[600px] w-480 bg-white '>
        <Image
          src={image}
          alt=''
          width={480}
          height={300}
          layout='fixed'
          priority={true}
        />
        <div className='flex flex-col items-center justify-center py-10'>
          <h1 style={{ color: Color1 }} className='text-3xl font-bold'>
            {Content1}
          </h1>
          <h2 style={{ color: Color1 }} className='mt-5 mb-7 text-xl leading-6'>
            {Content2}
          </h2>
          <div className='flex flex-col gap-4'>
            <Button
              style={{ backgroundColor: Color3 }}
              className={`grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
            >
              {Content3}
            </Button>
            <Button
              style={{
                backgroundColor: Color2,
                color: Color1,
                borderColor: Color4,
              }}
              className={`grid h-12 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium leading-5 text-black transition duration-300`}
            >
              {Content4}
            </Button>
          </div>
        </div>
      </Modal>
    </ModalContainer>
  );
};
export default Modal2;
