import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import Button from '../../button';
import Modal from '../../modal';

const Modal4 = () => {
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );
  const Size = data.get('Size');
  const Position = data.get('Position');
  const Content1 = data.get('Content1');
  const Content2 = data.get('Content2');
  const Content3 = data.get('Content3');
  const Color1 = data.get('Color1');
  const Color2 = data.get('Color2');
  const Color3 = data.get('Color3');

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
            : 'h-72 w-480'
        } relative flex flex-col items-center rounded-xl bg-white py-12`}
      >
        <div className='flex flex-col items-center justify-center'>
          <h1 className=' text-3xl font-bold'>{Content1}</h1>
          <h2 className='mt-5 mb-8 w-80 text-center text-xl leading-6'>
            {Content2}
          </h2>

          <Button
            className={`grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
          >
            {Content3}
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default Modal4;
