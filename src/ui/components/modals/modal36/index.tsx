import React from 'react';
import Button from '../../button';
import { FolderIcon } from '../../icons';
import Modal from '../../modal';

const Modal35 = () => {
  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState('');

  const isRadioSelected = (value: string): boolean =>
    selectedRadioBtn === value;

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedRadioBtn(e.currentTarget.value);
  };

  return (
    <Modal
      className={`relative flex w-480 flex-col items-center rounded-xl bg-white py-12`}
    >
      <div className='text-primary'><FolderIcon fill='currentColor' /></div>
      <h1 className={`m-5 text-3xl font-bold leading-9 text-black`}>
        Save now
      </h1>
      <h2 className='text-xl leading-6'>Choose where you want to export.</h2>
      <form className='mt-10 flex flex-col gap-4'>
        <div className='flex gap-4'>
          <div>
            <input
              type='radio'
              name='saveRadio1'
              value='saveRadio1'
              id='saveRadio1'
              checked={isRadioSelected('saveRadio1')}
              onChange={handleRadioClick}
              className='peer hidden'
            />
            <label
              className='flex h-24 w-168 cursor-pointer items-center justify-center rounded-lg border border-gray-light ring-primary ring-opacity-50 transition duration-300 hover:border-primary hover:ring-[5px] hover:ring-primary hover:ring-opacity-20 peer-checked:border-primary peer-checked:ring-[5px] peer-checked:ring-opacity-100 '
              htmlFor='saveRadio1'
            >
              App Cloud
            </label>
          </div>
          <div>
            <input
              type='radio'
              name='saveRadio2'
              value='saveRadio2'
              id='saveRadio2'
              checked={isRadioSelected('saveRadio2')}
              onChange={handleRadioClick}
              className='peer hidden'
            />
            <label
              className='flex h-24 w-168 cursor-pointer items-center justify-center rounded-lg border border-gray-light ring-primary ring-opacity-50 transition duration-300 hover:border-primary hover:ring-[5px] hover:ring-primary hover:ring-opacity-20 peer-checked:border-primary peer-checked:ring-[5px] peer-checked:ring-opacity-100 '
              htmlFor='saveRadio2'
            >
              My Device
            </label>
          </div>
        </div>
        <div className='mt-7 flex flex-col gap-4'>
          <Button
            type='submit'
            className={`grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
          >
            Download
          </Button>
          <Button
            className={`grid h-12 w-350 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium leading-5 text-black`}
          >
            No, thanks
          </Button>
        </div>
      </form>
    </Modal>
  );
};
export default Modal35;
