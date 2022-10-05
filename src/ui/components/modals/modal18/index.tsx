import Button from '../../button';
import { DarkModeIcon, EyeIcon, HomeIcon } from '../../icons';
import Modal from '../../modal';

const Modal18 = () => {
  return (
    <Modal
      className={`relative flex h-[672px] w-480 flex-col items-center rounded-xl bg-white py-50`}
    >
      <div className='mb-5 flex h-[60px] w-[60px] items-center justify-center text-primary'>
        <DarkModeIcon fill='currentColor' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mb-5 text-3xl font-bold'>Dark mode</h1>
        <h2 className='mb-10 w-[234px] text-center text-xl leading-6'>
          Just letting you know that we have dark mode.
        </h2>
        <div className='flex w-350 flex-col gap-9'>
          <div className='flex gap-4'>
            <div className='grid h-9 w-9 place-content-center'>
              <EyeIcon fill='currentColor' />
            </div>
            <div className='mt-1.5'>
              <h3 className='mb-3 text-xl font-bold leading-6'>Eye relief</h3>
              <p className='leading-5'>
                With dark mode you won’t be giving your eyes shock in the
                morning.
              </p>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='grid h-9 w-9 place-content-center'>
              <HomeIcon fill='currentColor' />
            </div>
            <div className='mt-1.5'>
              <h3 className='mb-3 text-xl font-bold leading-6'>Environment</h3>
              <p className='leading-5'>
                Change the mode depending in which place you’re at the moment.
              </p>
            </div>
          </div>
        </div>

        <div className='mt-11 flex flex-col gap-4'>
          <Button className='grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark'>
            Turn on dark mode
          </Button>
          <Button className='grid h-12 w-350 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium leading-5 text-black'>
            Keep using light mode
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default Modal18;
