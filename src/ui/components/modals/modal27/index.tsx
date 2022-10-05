import React from 'react';
import Button from '../../button';
import { FrameIcon } from '../../icons';
import Modal from '../../modal';

const Modal27 = () => {
  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState<string | null>(null);

  const isRadioSelected = (value: string): boolean =>
    selectedRadioBtn === value;

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioBtn(e.currentTarget.value);

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
    setSelectedRadioBtn('')
    setMessage(null);
  };
  return (
    <Modal
      className={`relative flex h-[582px] w-480 flex-col items-center rounded-xl bg-white bg-[url('/images/Modal27/img.svg')] pt-[60px]`}
    >
      <div className='flex flex-col items-center justify-center'>
        <h1 className='w-[258px] text-center text-4xl font-bold leading-[44px]'>
          Sign up for our newsletter
        </h1>
        <div className='relative my-7 text-primary'>
          <FrameIcon fill='currentColor' />
          <span className='absolute top-0 flex h-12 w-350 items-center justify-center text-lg font-bold text-black '>
            GET 30% OF DISCOUNT
          </span>
        </div>
        <h2 className='mb-12 w-[242px] text-center text-xl leading-6'>
          Be the first to learn about new trends and offers.
        </h2>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <div className='flex flex-col'>
            <input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              type='email'
              placeholder='Enter your email address'
              className={`mb-8 h-12 w-350 rounded-lg border border-gray-extra-light p-4 placeholder:leading-5 placeholder:text-black focus:border-primary`}
            />
            <label className='-mt-8 text-sm leading-7 text-red-600'>{message}</label>
          </div>
          <div className='mt-8 flex items-center justify-center gap-7'>
            <div className='group flex'>
              <label className=' text-lg font-medium leading-6 text-gray'>
                <input
                  type='radio'
                  name='radio1'
                  value='radio1'
                  checked={isRadioSelected('radio1')}
                  onChange={handleRadioClick}
                  className='form-radio  mr-3 h-6 w-6 cursor-pointer checked:text-primary focus:ring-transparent group-hover:border-primary group-hover:ring-[5px] group-hover:ring-primary group-hover:ring-opacity-20'
                />
                Women
              </label>
            </div>
            <div className='group flex'>
              <label className=' text-lg font-medium leading-6 text-gray'>
                <input
                  type='radio'
                  name='radio2'
                  value='radio2'
                  checked={isRadioSelected('radio2')}
                  onChange={handleRadioClick}
                  className='form-radio  mr-3 h-6 w-6 cursor-pointer checked:text-primary focus:ring-transparent group-hover:border-primary group-hover:ring-[5px] group-hover:ring-primary group-hover:ring-opacity-20'
                />
                Men
              </label>
            </div>
          </div>
          <Button
            className='mt-8 grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark'
            type='submit'
          >
            Subscribe
          </Button>
        </form>
      </div>
    </Modal>
  );
};
export default Modal27;
