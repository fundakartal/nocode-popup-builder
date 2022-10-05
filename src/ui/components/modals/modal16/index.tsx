import Button from '../../button';
import { BellIcon } from '../../icons';
import Modal from '../../modal';

const Modal16 = () => {
  return (
    <Modal
      className={`relative flex h-480 w-480 flex-col items-center rounded-xl bg-white py-50`}
    >
      <div className='mb-5 flex h-[60px] w-[60px] items-center justify-center text-primary'>
        <BellIcon fill='currentColor' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mb-5 text-3xl font-bold'>Reminders</h1>
        <h2 className='mb-10 w-350 text-center text-xl leading-6'>
          How often would you like to be reminded to write?
        </h2>

        <div className='flex flex-col gap-4'>
          <Button
            className={`grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
            type='submit'
          >
            Daily
          </Button>
          <Button
            className={`grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
            type='submit'
          >
            Weekly
          </Button>
        </div>

        <p className='mt-7 text-sm leading-4'>No Reminders</p>
      </div>
    </Modal>
  );
};
export default Modal16;
