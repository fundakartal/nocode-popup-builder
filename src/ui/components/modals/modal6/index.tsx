import React from 'react';
import Button from '../../button';
import { PercentageIcon } from '../../icons';
import Modal from '../../modal';

const Modal6 = () => {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState<string | null>(null);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter a valid email address');
      setTimeout(() => {
        setMessage(null);
      }, 1500);
      return;
    }
    setEmail('');
    setMessage(null);
  };
  return (
    <Modal
      className={`relative flex h-[446px] w-480 flex-col items-center rounded-xl bg-white py-10`}
    >
      <div className={`flex flex-col items-center justify-center`}>
        <PercentageIcon />
        <h1 className={`mt-7 mb-5 text-3xl font-bold leading-9 text-black`}>
          Join our mail list
        </h1>
        <h2 className={`mb-10 text-xl leading-6 text-black`}>
          Save up to 30% of your next order
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type='email'
            placeholder='Enter your email'
            className={`form-input h-12 w-350 rounded-lg border border-gray-extra-light p-4 placeholder:leading-5 placeholder:text-black focus:border-primary`}
          />
          <label className='text-sm leading-7 text-red-600'>{message}</label>
        </div>
        <div className='mt-8 flex gap-4'>
          <Button
            className={`grid h-12 w-168 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium leading-5 text-black transition duration-300`}
          >
            Later
          </Button>
          <Button
            className={`grid h-12 w-168 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
            type='submit'
          >
            Join now
          </Button>
        </div>
      </form>
    </Modal>
  );
};
export default Modal6;
