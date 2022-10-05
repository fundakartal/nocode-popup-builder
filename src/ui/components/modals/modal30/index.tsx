import Image from 'next/image';
import Button from '../../button';
import Modal from '../../modal';

const Modal30 = () => {
  return (
    <Modal
      fill='white'
      className={`relative flex h-[702px] w-480 flex-col items-center justify-between rounded-xl bg-white`}
    >
      <Image
        src='/images/Modal30/bg.svg'
        alt=''
        width={480}
        height={250}
        layout='fixed'
      />
      <div className='absolute bottom-0 flex flex-col items-center pb-50'>
        <div className='mb-4 flex h-[120px] w-[120px] items-center justify-center rounded-full border-[5px] border-white'>
          <Image
            src='/images/Modal30/img.svg'
            alt=''
            width={120}
            height={120}
            layout='fixed'
          />
        </div>
        <p className='text-center text-xl font-bold leading-6'>
          Jenny Yelriver
        </p>
        <p className='mt-1.5 text-center leading-5'>Creative Director</p>
        <div className='mt-8 flex flex-col items-center justify-center text-center'>
          <h1 className='w-[326px] text-3xl font-bold'>
            5 reasons to purchase desktop computers
          </h1>
          <h2 className='mt-4 mb-9 w-80  text-xl leading-6'>
            Our award winning templates are the most beautiful way to present
            your ideas online.
          </h2>
          <div className='flex gap-4'>
            <Button
              className={`grid h-12 w-168 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium leading-5 text-black`}
            >
              Maybe Later
            </Button>
            <Button
              className={`grid h-12 w-168 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
            >
              Read Article
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Modal30;
