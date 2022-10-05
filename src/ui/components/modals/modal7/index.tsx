import Button from '../../button';
import Modal from '../../modal';

const Modal7 = () => {
  return (
    <Modal
      fill='white'
      className={`relative flex h-72 w-480 flex-col items-center rounded-xl bg-primary py-14`}
    >
      <div className={`flex flex-col items-center justify-center text-white`}>
        <h1 className={`text-3xl font-bold leading-9`}>Hi, stranger</h1>
        <h2 className={`mt-5 mb-10 text-xl leading-6`}>
          Sign up now, and get a 30% discount
        </h2>
      </div>
      <div className='flex gap-4'>
        <Button
          className={`border border-gray-extra-light grid h-12 w-168 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-white hover:text-primary hover:border-none`}
        >
          Log In
        </Button>
        <Button
          className={`grid hover:bg-primary hover:text-white h-12 w-168 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium leading-5 text-black transition duration-300`}
          type='submit'
        >
          Sign up now
        </Button>
      </div>
    </Modal>
  );
};
export default Modal7;
