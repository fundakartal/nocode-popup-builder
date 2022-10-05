import React from 'react';
import Button from '../../button';
import Modal from '../../modal';
import CountryList from './CountryCodes.json';

const Modal29 = () => {
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState<string | null>(null);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email || !phone) {
      setMessage('Cannot be empty');
      setTimeout(() => {
        setMessage(null);
      }, 1500);
      return;
    }
    setEmail('');
    setPhone('');
    setMessage(null);
  };
  return (
    <Modal
      className={`relative flex h-[507px] w-480 flex-col items-center rounded-xl border-t-[10px] border-primary bg-white p-50 py-50`}
    >
      <h1 className='w-[339px] text-center text-3xl font-bold'>
        Get straight to growing your business well
      </h1>
      <h2 className='mt-4 mb-11 w-72 text-center text-xl leading-6'>
        There’s good news for parents who have child born.
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
          <label
            className={`${email && 'hidden'} text-sm leading-7 text-red-600`}
          >
            {message}
          </label>
        </div>
        <div className='mt-4 mb-8 flex gap-4'>
          <select className='h-12 w-24 rounded-lg border border-gray-extra-light placeholder:leading-5 placeholder:text-black focus:border-primary'>
            <option className='leading-5' defaultValue='+1'>
              +1
            </option>
            {CountryList.map((country, key) => (
              <option key={key} value={country.code}>
                {country.dial_code}
              </option>
            ))}
          </select>
          <input
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            type='tel'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            placeholder='Enter your phone'
            className={`h-12 w-[238px] rounded-lg border border-gray-extra-light p-4 placeholder:leading-5 placeholder:text-black focus:border-primary`}
          />
        </div>
        <label
          className={`-mt-8 ${phone && 'hidden'} text-sm leading-7 text-red-600`}
        >
          {message}
        </label>
        <Button
          className={`mt-8 grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
          type='submit'
        >
          Sign up
        </Button>
        <div className='mt-5 flex justify-between'>
          <p className='text-sm leading-4'>I have an account</p>
          <p className='text-sm leading-4'>Forgot Password</p>
        </div>
      </form>
    </Modal>
  );
};
export default Modal29;
