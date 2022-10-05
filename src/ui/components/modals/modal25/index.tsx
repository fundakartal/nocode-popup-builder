import React from 'react';
import Image from 'next/image';
import Button from '../../button';
import Modal from '../../modal';

const Modal25 = () => {
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
      className={`relative flex h-[400px] w-[740px] flex-col items-center justify-center rounded-xl bg-white`}
    >
      <div className='flex w-full justify-between p-4 pr-10'>
        <Image
          src='/images/Modal25/img.svg'
          alt=''
          width={300}
          height={370}
          layout='fixed'
        />
        <div className='ml-9 flex w-350 flex-col justify-center'>
          <h1 className='w-56 text-5xl font-bold leading-[58px]'>
            LOVE NATURE?
          </h1>
          <h2 className='mt-4 mb-8 w-80 text-xl leading-6'>
            Mauris feugiat egestas at llus tur pis massa, gravidez rum sit
            ameta.
          </h2>
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <div className='flex flex-col'>
              <input
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                type='email'
                placeholder='Enter your email address'
                className={`h-12 w-350 rounded-lg border border-gray-extra-light p-4 placeholder:leading-5 placeholder:text-black focus:border-primary`}
              />
              <label className='text-sm leading-7 text-red-600'>
                {message}
              </label>
            </div>
            <Button
              className='mt-4 grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark'
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
export default Modal25;
