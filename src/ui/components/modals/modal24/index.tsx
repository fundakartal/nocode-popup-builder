import React from 'react';
import Image from 'next/image';
import Button from '../../button';
import Modal from '../../modal';

const Modal24 = () => {
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
      className={`relative flex h-[400px] w-[740px] flex-col items-center rounded-xl bg-white`}
    >
      <div className='flex w-full'>
        <Image
          src='/images/Modal24/img.svg'
          alt=''
          width={370}
          height={400}
          layout='fixed'
        />
        <div className='ml-9 flex w-300 flex-col items-center justify-center'>
          <h1 className='w-[238px] text-center text-4xl font-bold leading-10'>
            BE THE FIRST TO KNOW
          </h1>
          <h2 className='mt-4 mb-9 w-[245px] text-xl leading-6'>
            Sign up for email list and get our newest collection.
          </h2>
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <div className='flex flex-col'>
              <input
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                type='email'
                placeholder='Enter your email address'
                className={`h-12 w-300 rounded-lg border border-gray-extra-light p-4 placeholder:leading-5 placeholder:text-black focus:border-primary`}
              />
              <label className='text-sm leading-7 text-red-600'>
                {message}
              </label>
            </div>
            <Button
              className='mt-4 grid h-12 w-300 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark'
              type='submit'
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};
export default Modal24;
