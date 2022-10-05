import React from 'react';
import Image from 'next/image';
import Button from '../../button';
import Modal from '../../modal';

const Modal10 = () => {
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
      className={`relative flex h-[584px] w-480 flex-col items-center rounded-xl bg-white py-50`}
    >
      <Image
        src='/images/Modal10/icon.svg'
        alt=''
        width={160}
        height={172}
        layout='fixed'
      />
      <div className='mt-4 flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold'>Check your email</h1>
        <h2 className='mt-5 mb-11 w-350 text-center text-xl leading-6'>
          Once you deletet your account, you’ll lose all data associatted with
          it.
        </h2>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <div className='flex flex-col'>
            <input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              type='email'
              placeholder='Enter your email'
              className={`h-12 w-350 rounded-lg border border-gray-extra-light p-4 placeholder:leading-5 placeholder:text-black focus:border-primary`}
            />
            <label className='text-sm leading-7 text-red-600'>{message}</label>
          </div>
          <Button
            className={`mt-4 mb-5 grid h-12 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
            type='submit'
          >
            Sign up
          </Button>
          <p className='text-sm leading-4'>
            Already <span className='underline'>have an account?</span>
          </p>
        </form>
      </div>
    </Modal>
  );
};
export default Modal10;
