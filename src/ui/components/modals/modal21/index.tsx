import Image from 'next/image';
import Button from '../../button';
import Modal from '../../modal';

const Modal21 = () => {
  return (
    <Modal
      className={`relative flex h-[508px] w-480 flex-col items-center rounded-xl bg-white pt-[60px] pb-50`}
    >
      <Image
        src='/images/Modal21/img.png'
        alt=''
        width={268}
        height={220}
        layout='fixed'
      />
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mb-5 mt-7 text-3xl font-bold'>Opps</h1>
        <h2 className='mb-8 text-center text-xl leading-6'>Page not found</h2>
        <Button className='grid h-12 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium leading-5 text-black w-350'>Go to Home</Button>
      </div>
    </Modal>
  );
};
export default Modal21;
