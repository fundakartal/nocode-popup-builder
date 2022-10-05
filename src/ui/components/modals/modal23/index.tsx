import Button from '../../button';
import { FacebookIcon, PinterestIcon, TwitterIcon } from '../../icons';
import Modal from '../../modal';

const Modal23 = () => {
  return (
    <Modal
      className={`relative flex h-[430px] w-480 flex-col items-center rounded-xl bg-white pt-[60px] pb-50`}
    >
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mb-5 text-3xl font-bold'>Share this page</h1>
        <h2 className='w-[306px] text-center text-xl leading-6'>
          If you liked this page you can share it on your social media.
        </h2>
        <div className='mt-11 flex flex-col gap-4'>
          <Button className='relative flex h-12 w-350 items-center justify-center rounded-lg bg-blue-facebook py-4 font-medium text-white transition duration-300 hover:bg-blue-facebook-dark '>
            <div className='absolute left-3'>
              <FacebookIcon />
            </div>
            Facebook
          </Button>
          <Button className='relative flex h-12 w-350 items-center justify-center rounded-lg bg-red py-4 font-medium text-white transition duration-300 hover:bg-red-dark '>
            <div className='absolute left-3'>
              <PinterestIcon />
            </div>
            Pinterest
          </Button>
          <Button className='relative flex h-12 w-350 items-center justify-center rounded-lg bg-blue-twitter py-4 font-medium text-white transition duration-300 hover:bg-blue-twitter-dark '>
            <div className='absolute left-3'>
              <TwitterIcon />
            </div>
            Twitter
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default Modal23;
