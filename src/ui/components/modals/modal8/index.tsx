import React from 'react';
import Button from '../../button';
import Modal from '../../modal';

const Modal8 = () => {
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
      fill='white'
      className={`relative flex h-[400px] w-[740px] flex-col items-center rounded-xl bg-primary text-white`}
    >
      <div className={`flex flex-col items-center justify-center`}>
        <h1 className={`mt-16 mb-5 text-3xl font-bold leading-9`}>
          Subscribe to our newsletter
        </h1>
        <h2 className={`mb-12 text-xl leading-6`}>
          Receive the flash news in your inbox.
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type='email'
            placeholder='Enter your email'
            className={`h-12 w-350 rounded-lg border border-gray-extra-light bg-primary p-4 placeholder:leading-5 placeholder:text-white focus:border-primary`}
          />
          <label className='text-sm leading-7 text-white'>{message}</label>
        </div>
        <div className='mt-6 mb-5'>
          <input
            type='radio'
            name='radio1'
            value='radio1'
            className='form-radio h-6 w-6 cursor-pointer border-white bg-primary checked:border-white checked:text-primary focus:ring-0 '
          />

          <label htmlFor='radio1' className='ml-3 text-sm leading-4'>
            By subscribe this form I agree to Privacy Policy.
          </label>
        </div>
        <Button
          className={`ml-auto grid h-12 w-168 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium leading-5 text-black`}
        >
          Sign up now
        </Button>
      </form>
    </Modal>
  );
};
export default Modal8;
