import Button from '../../button';
import Modal from '../../modal';

const Modal22 = () => {
  return (
    <Modal
      fill='white'
      className={`relative flex h-[400px] w-[740px] flex-col items-center rounded-xl bg-white bg-[url('/images/Modal22/img.png')] py-[77px] px-50`}
    >
      <div className='flex w-full flex-col text-white'>
        <h1 className='mb-6 text-3xl font-bold'>World Animal Day</h1>
        <h2 className='mb-10 w-300 text-xl leading-6'>
          Animal Day is an international day of action for animal rights and
          welfare celebrated annually on October 4.
        </h2>
        <Button className='grid h-12 w-300 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium leading-5 text-black'>
          Learn more
        </Button>
      </div>
    </Modal>
  );
};
export default Modal22;
