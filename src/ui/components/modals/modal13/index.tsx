import Button from '../../button';
import { BigSmileIcon } from '../../icons';
import Modal from '../../modal';

const Modal13 = () => {
  return (
    <Modal
      fill='white'
      className={`relative flex h-[466px] w-480 flex-col items-center rounded-xl bg-primary pt-14 text-white justify-between overflow-hidden`}
    >
      <div className={`flex flex-col items-center justify-center`}>
        <BigSmileIcon />
        <h1 className={`mt-10 text-3xl font-bold leading-9`}>
          Welcome to talk
        </h1>
        <h2 className={`mb-14 mt-5 w-80 text-center text-xl leading-6`}>
          Send friends photos, videos, locations, songs, voice messages, and
          more.
        </h2>
      </div>
      <Button
        className={`h-16 w-full border-none bg-black bg-opacity-10 text-xl leading-6 text-white transition duration-300 hover:bg-primary-dark`}
      >
        Let’s get started
      </Button>
    </Modal>
  );
};
export default Modal13;
