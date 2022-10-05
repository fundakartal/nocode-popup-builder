import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import ModalImage from './ModalImage';
import TextContents from './TextContents';

const Content = () => {
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );

  return (
    <div className='font-Inter'>
      <div className='mb-8 flex items-center font-Poppins text-lg font-semibold leading-9 tracking-tight'>
        <span className='mr-4 grid h-9 w-9 place-items-center rounded-full bg-[#EAEAEA] '>
          3
        </span>
        Content
      </div>
      <TextContents />
      {data.get('Image') && <ModalImage />}
    </div>
  );
};
export default Content;
