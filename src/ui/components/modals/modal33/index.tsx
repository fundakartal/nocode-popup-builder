import Image from 'next/image';
import Modal from '../../modal';

const Modal33 = () => {
  return (
    <Modal
      className={`relative gap-4 flex h-40 w-[740px] items-center rounded-xl bg-white p-8 py-12`}
    >
      <div className='flex h-90 w-90 items-center justify-center rounded-full bg-primary'>
        <Image
          src='/images/logo.svg'
          alt=''
          width={27}
          height={46}
          layout='fixed'
        />
      </div>
      <div className='flex flex-col '>
        <h1 className=' text-2xl leading-7 font-bold'>Reach and grow your audiennce</h1>
        <h2 className='mt-2 text-gray-dark text-xl leading-6'>
          Build a better popup today.
        </h2>
      </div>
    </Modal>
  );
};
export default Modal33;
