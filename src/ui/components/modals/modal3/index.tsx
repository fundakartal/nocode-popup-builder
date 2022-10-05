import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import Button from '../../button';
import { TrashIcon } from '../../icons';
import Modal from '../../modal';

const Modal3 = () => {
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );
  const Size = data.get('Size');
  const Position = data.get('Position');
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
    <div
      className={`grid h-full w-full bg-black bg-opacity-5 
    ${
      Position === 'Top'
        ? 'items-start'
        : Position === 'Right'
        ? 'justify-end'
        : Position === 'Bottom'
        ? 'items-end'
        : Position === 'Left'
        ? 'justify-start'
        : Position === 'LeftTop'
        ? 'items-start justify-start'
        : Position === 'RightTop'
        ? 'items-start justify-end'
        : Position === 'RightBottom'
        ? 'items-end justify-end'
        : Position === 'LeftBottom'
        ? 'items-end justify-start'
        : 'place-items-center'
    }`}
    >
      <Modal
        className={`relative flex ${
          Size === 'Small'
            ? 'h-[440px] w-[420px]'
            : Size === 'Large'
            ? 'h-[480px] w-[520px]'
            : 'h-[516px] w-[480px]'
        } relative flex flex-col items-center rounded-xl bg-white py-10`}
      >
        <div className='flex flex-col items-center justify-center'>
          <div
            className={`flex h-90 w-90 items-center justify-center rounded-full bg-primary transition duration-300`}
          >
            <TrashIcon />
          </div>
          <h1 className='mt-7 mb-5 text-3xl font-bold'>{Content1}</h1>
          <h2 className='mb-7 w-80 text-center text-xl leading-6'>
            {Content2}
          </h2>
          <h3 className='mb-9 w-60 leading-5 text-gray-dark '>
            {Content3}
            <span className='text-black'>30.08.2021</span>.
          </h3>
          <div className='flex flex-col gap-4'>
            <Button
              className={`grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
            >
              {Content4}
            </Button>
            <Button
              className={`grid h-12 w-350 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium leading-5 text-black transition duration-300`}
            >
              {Content5}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Modal3;
