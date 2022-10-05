import React from 'react';
import Image from 'next/image';
import Button from '../../button';
import Modal from '../../modal';

const Modal28 = () => {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState<string | null>(null);

  const handleSubmit = (e: { preventDefault: () => void }) => {
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
      className={`relative flex h-[516px] w-480 flex-col  rounded-xl border-t-[10px] border-primary bg-white p-50`}
    >
      <div className='flex w-350 items-center gap-4'>
        <Image
          src='/images/Modal28/img.svg'
          alt=''
          width={60}
          height={60}
          layout='fixed'
        />
        <div>
          <p className='text-lg font-bold leading-5'>Jenny Yelriver</p>
          <p className='mt-[5px] text-sm leading-4'>Creative Director</p>
        </div>
      </div>
      <div className='mt-10 flex flex-col '>
        <h1 className='text-3xl font-bold'>
          Start your 14-day free trial today and shine.
        </h1>
        <h2 className='mt-4 mb-9 w-80 text-xl leading-6'>
          If you’re looking for a new way to promote your business that won’t
          cost you money.
        </h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              type='email'
              placeholder='Enter your email address'
              className={`h-12 w-350 rounded-lg border border-gray-extra-light p-4 placeholder:leading-5 placeholder:text-black focus:border-primary`}
            />
            <label className='text-sm leading-7 text-red-600'>{message}</label>
          </div>
          <Button
            className={`grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
            type='submit'
          >
            Subscribe
          </Button>
        </form>
      </div>
    </Modal>
  );
};
export default Modal28;
