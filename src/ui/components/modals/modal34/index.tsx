import Image from 'next/image';
import Button from '../../button';
import Modal from '../../modal';

const Modal34 = () => {
  return (
    <Modal
      className={`relative flex h-[402px] w-480 flex-col rounded-xl bg-white p-10`}
    >
      <div className='flex items-center gap-4'>
        <div className='flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary'>
          <Image
            src='/images/logo.svg'
            alt=''
            width={27}
            height={46}
            layout='fixed'
          />
        </div>
        <p className='text-[27px] font-bold leading-8 text-primary'>tailwind</p>
      </div>
      <div className='flex mt-8 flex-col'>
        <h1 className=' text-3xl font-bold'>
          Learn, share and connect with our community.
        </h1>
        <h2 className='mt-4 mb-8 w-[309px] text-xl leading-6'>
          Explore our amazing products curated by our team just for you.{' '}
        </h2>

        <div className='flex gap-8'>
          <Button
            className={`grid h-12 w-168 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
          >
            Join the club
          </Button>
          <Button
            className={`flex h-12 items-center justify-center py-4 font-medium `}
          >
            Maybe Later
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default Modal34;
