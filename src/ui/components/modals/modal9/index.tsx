import React from 'react';
import Image from 'next/image';
import Button from '../../button';
import Modal from '../../modal';

const Modal9 = () => {
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
      className={`relative flex h-[752px] w-480 flex-col items-center rounded-xl bg-white`}
    >
      <Image
        src='/images/Modal9/img.svg'
        alt=''
        width={480}
        height={334}
        layout='fixed'
      />
      <div className='flex flex-col items-center justify-center py-10'>
        <h1 className='text-3xl font-bold'>Hello stranger</h1>
        <h2 className='mt-5 mb-7 text-xl leading-6'>
          Sign up now and get 30% discount
        </h2>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <div className='mb-7 flex flex-col gap-4'>
            <div className='flex flex-col'>
              <input
                value={name}
                onChange={({ target }) => setName(target.value)}
                type='text'
                placeholder='Enter Full name'
                className={`h-12 w-350 rounded-lg border border-gray-extra-light p-4 placeholder:leading-5 placeholder:text-black focus:border-primary`}
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
                className={`h-12 w-350 rounded-lg border border-gray-extra-light p-4 placeholder:leading-5 placeholder:text-black focus:border-primary`}
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
            className={`grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
            type='submit'
          >
            Sign up
          </Button>
          <p className='mt-5 text-sm leading-4'>
            Already&nbsp;
            <span className='underline underline-offset-2'>
              have an account?
            </span>
          </p>
        </form>
      </div>
    </Modal>
  );
};
export default Modal9;
