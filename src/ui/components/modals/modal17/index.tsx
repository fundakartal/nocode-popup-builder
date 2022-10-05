import { ArrowIcon, FlagIcon } from '../../icons';
import Modal from '../../modal';

const Modal17 = () => {
  return (
    <Modal
      className={`relative flex h-[360px] w-480 flex-col items-center rounded-xl bg-white py-50`}
    >
      <div className='mb-5  grid h-[60px] w-[60px] place-items-center text-primary'>
        <FlagIcon fill='currentColor' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mb-5 text-3xl font-bold'>Don’t miss out</h1>
        <h2 className='w-350 text-center text-xl leading-6'>
          Allow notifications get free ebook.
        </h2>
      </div>
      <div className='hover-border-none mt-10 grid h-[60px] w-[60px] place-items-center rounded-full border border-primary text-primary transition duration-300 hover:bg-primary hover:text-white'>
        <ArrowIcon fill='currentColor' />
      </div>
    </Modal>
  );
};
export default Modal17;
