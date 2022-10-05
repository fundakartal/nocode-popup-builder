import React from 'react';
import Button from '../../button';
import Modal from '../../modal';

const Modal5 = () => {
  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState('radio3');

  const isRadioSelected = (value: string): boolean =>
    selectedRadioBtn === value;

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioBtn(e.currentTarget.value);

  return (
    <Modal
      className={`relative flex h-550 w-480 flex-col items-center rounded-xl bg-white py-12`}
    >
      <div className='flex flex-col items-center justify-center'>
        <span className='mb-3 block text-lg font-medium uppercase leading-6 text-primary'>
          plans
        </span>
        <h1 className=' text-3xl font-bold'>Choose best for you</h1>
        <h2 className='mb-14 mt-4 text-center text-xl leading-6'>
          Only pay for the capacity that you use.
        </h2>
        <form className='flex flex-col gap-8'>
          <div className='group flex'>
            <input
              type='radio'
              name='radio1'
              value='radio1'
              checked={isRadioSelected('radio1')}
              onChange={handleRadioClick}
              className='form-radio h-6 w-6 cursor-pointer checked:text-primary focus:ring-transparent group-hover:border-primary group-hover:ring-[5px] group-hover:ring-primary group-hover:ring-opacity-20'
            />
            <label
              htmlFor='radio1'
              className='ml-3 text-lg font-medium leading-6'
            >
              Starter
              <span className='mt-2 block text-sm font-normal leading-4 text-gray'>
                1 free (then $15 per meember / month)
              </span>
            </label>
          </div>
          <div className='group flex'>
            <input
              type='radio'
              name='radio2'
              value='radio2'
              checked={isRadioSelected('radio2')}
              onChange={handleRadioClick}
              className='form-radio h-6 w-6 cursor-pointer checked:text-primary focus:ring-transparent group-hover:border-primary group-hover:ring-[5px] group-hover:ring-primary group-hover:ring-opacity-20'
            />
            <label
              htmlFor='radio2'
              className='ml-3 text-lg font-medium leading-6'
            >
              Pro
              <span className='mt-2 block text-sm font-normal leading-4 text-gray'>
                $19 per member/month
              </span>
            </label>
          </div>
          <div className='group flex'>
            <input
              type='radio'
              name='radio3'
              value='radio3'
              checked={isRadioSelected('radio3')}
              onChange={handleRadioClick}
              className='form-radio h-6 w-6 cursor-pointer checked:text-primary focus:ring-transparent group-hover:border-primary group-hover:ring-[5px] group-hover:ring-primary group-hover:ring-opacity-20'
            />
            <label
              htmlFor='radio3'
              className='ml-3 text-lg font-medium leading-6'
            >
              Business
              <span className='mt-2 block text-sm font-normal leading-4 text-gray'>
                $29 per member/month
              </span>
            </label>
          </div>
        </form>
        <div className='mt-10 flex gap-4'>
          <Button
            className={`grid h-12 w-168 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium leading-5 text-black transition duration-300`}
          >
            Cancel
          </Button>
          <Button
            className={`grid h-12 w-168 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
          >
            Continue
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default Modal5;
