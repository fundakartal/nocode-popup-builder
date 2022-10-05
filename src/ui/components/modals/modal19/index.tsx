import Image from 'next/image';
import Button from '../../button';
import Modal from '../../modal';

const Modal19 = () => {
  return (
    <Modal
      className={`relative flex h-[471px] w-480 flex-col items-center rounded-xl bg-white py-50`}
    >
      <Image
        src='/images/Modal19/icon.svg'
        alt=''
        width={120}
        height={120}
        layout='fixed'
      />
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mb-6 mt-10 text-5xl font-bold leading-[58px]'>
          Hey there🥳
        </h1>
        <h2 className='mb-8 w-300 text-center text-xl leading-6'>
          We’re launching our product and we would be happy to have you.
        </h2>

        <Button className='grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark'>
          Sign up now
        </Button>
      </div>
    </Modal>
  );
};
export default Modal19;
