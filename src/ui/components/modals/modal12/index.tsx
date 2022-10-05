import React from 'react';
import Image from 'next/image';
import Button from '../../button';
import Modal from '../../modal';

const Modal12 = () => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState<string | null>(null);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!name || !email) {
      setMessage('Cannot be empty');
      setTimeout(() => {
        setMessage(null);
      }, 1500);
      return;
    }
    setEmail('');
    setName('');
    setMessage(null);
  };
  return (
    <Modal
      className={`relative flex h-[563px] w-[740px] items-center rounded-xl`}
    >
      <Image
        src='/images/Modal12/img.svg'
        alt=''
        width={550}
        height={563}
        layout='fixed'
      />
      <div className='absolute right-0 flex flex-col rounded-xl bg-white py-12 px-10'>
        <h1 className='text-4xl font-bold leading-[44px]'>Sign up</h1>
        <h2 className='mt-4 mb-8 text-2xl leading-7'>Join new adventure</h2>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col'>
              <input
                value={name}
                onChange={({ target }) => setName(target.value)}
                type='text'
                placeholder='Enter Full name'
                className={`h-12 w-300 rounded-lg border border-gray-extra-light p-4 placeholder:leading-5 placeholder:text-black focus:border-primary`}
              />
              <label
                className={`${name && 'hidden'} text-sm leading-7 text-red-600`}
              >
                {message}
              </label>
            </div>
            <div className='flex flex-col'>
              <input
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                type='email'
                placeholder='Enter your email'
                className={`h-12 w-300 rounded-lg border border-gray-extra-light p-4 placeholder:leading-5 placeholder:text-black focus:border-primary`}
              />
              <label
                className={`${
                  email && 'hidden'
                } text-sm leading-7 text-red-600`}
              >
                {message}
              </label>
            </div>
          </div>
          <Button
            className={`mt-7 mb-5 grid h-12 w-300 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
            type='submit'
          >
            Sign up
          </Button>
          <div className='flex justify-between'>
            <p className='text-sm leading-4'>Forgot password</p>
            <p className='text-sm leading-4'>Log In</p>
          </div>
        </form>
      </div>
    </Modal>
  );
};
export default Modal12;
