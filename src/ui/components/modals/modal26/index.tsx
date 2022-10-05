import React from 'react';
import Image from 'next/image';
import Button from '../../button';
import { LetterIcon } from '../../icons';
import Modal from '../../modal';

const Modal26 = () => {
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
      className={`relative flex h-[441px] w-[740px] flex-col items-center justify-center rounded-xl bg-white`}
    >
      <div className='flex w-full flex-row-reverse justify-end p-14 '>
        <div className='absolute top-20 -right-32'>
          <Image
            src='/images/Modal26/img.svg'
            alt=''
            width={400}
            height={450}
            layout='fixed'
          />
        </div>
        <div className='absolute top-8 right-[200px] z-50 text-primary'>
          <LetterIcon fill='currentColor' />
        </div>
        <div className='flex w-350 flex-col justify-center'>
          <h1 className='w-[258px] text-4xl font-bold leading-[44px]'>
            Sign up for our newsletter
          </h1>
          <h2 className='mt-4 mb-9 w-80 text-xl leading-6'>
            If you’re looking for a new way to promote your business that won’t
            cost you money.
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
export default Modal26;
