import Button from '../../button';
import { CheckIcon } from '../../icons';
import Modal from '../../modal';

const Modal20 = () => {
  return (
    <Modal
      className={`relative flex h-[448px] w-480 flex-col items-center rounded-xl bg-white pt-[60px] pb-50`}
    >
      <div className='text-primary'>
        <CheckIcon fill='currentColor' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mb-5 mt-10 text-3xl font-bold'>Good job, Jenny</h1>
        <h2 className='w-300 text-center text-xl leading-6'>
          Your profile is created!
        </h2>
        <Button className='mt-8 mb-1 grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark '>
          Go to my profile
        </Button>
        <Button className='grid h-12 place-content-center rounded-lg border border-none border-gray-extra-light bg-white py-4 font-medium leading-5 text-black'>
          Go to Home
        </Button>
      </div>
    </Modal>
  );
};
export default Modal20;
