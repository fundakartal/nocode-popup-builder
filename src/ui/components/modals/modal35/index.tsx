import React from 'react';
import { DocumentIcon, DownloadIcon, MailIcon, PrintIcon } from '../../icons';
import Modal from '../../modal';

const Modal35 = () => {
  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState('action2');

  const isRadioSelected = (value: string): boolean =>
    selectedRadioBtn === value;

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedRadioBtn(e.currentTarget.value);
  };

  return (
    <Modal
      className={`relative flex w-480 flex-col items-center rounded-xl bg-white py-12`}
    >
      <h1 className={`mb-6 text-3xl font-bold leading-9 text-black`}>
        Ready to export
      </h1>
      <h2 className='text-xl leading-6'>Take action now.</h2>
      <form className='mt-10 flex gap-5'>
        <div>
          <input
            type='radio'
            name='action1'
            value='action1'
            id='action1'
            checked={isRadioSelected('action1')}
            onChange={handleRadioClick}
            className='peer hidden'
          />
          <label
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-lg border border-gray-light ring-primary ring-opacity-50 transition duration-300 hover:border-primary hover:ring-[5px] hover:ring-primary hover:ring-opacity-20 peer-checked:border-primary peer-checked:ring-[5px] peer-checked:ring-opacity-100 '
            htmlFor='action1'
          >
            <DownloadIcon />
          </label>
        </div>
        <div>
          <input
            type='radio'
            name='action2'
            value='action2'
            id='action2'
            checked={isRadioSelected('action2')}
            onChange={handleRadioClick}
            className='peer hidden'
          />
          <label
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-lg border border-gray-light ring-primary ring-opacity-50 transition duration-300 hover:border-primary hover:ring-[5px] hover:ring-primary hover:ring-opacity-20 peer-checked:border-primary peer-checked:ring-[5px] peer-checked:ring-opacity-100 '
            htmlFor='action2'
          >
            <DocumentIcon />
          </label>
        </div>
        <div>
          <input
            type='radio'
            name='action3'
            value='action3'
            id='action3'
            checked={isRadioSelected('action3')}
            onChange={handleRadioClick}
            className='peer hidden'
          />
          <label
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-lg border border-gray-light ring-primary ring-opacity-50 transition duration-300 hover:border-primary hover:ring-[5px] hover:ring-primary hover:ring-opacity-20 peer-checked:border-primary peer-checked:ring-[5px] peer-checked:ring-opacity-100 '
            htmlFor='action3'
          >
            <MailIcon />
          </label>
        </div>
        <div>
          <input
            type='radio'
            name='action4'
            value='action4'
            id='action4'
            checked={isRadioSelected('action4')}
            onChange={handleRadioClick}
            className='peer hidden'
          />
          <label
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-lg border border-gray-light ring-primary ring-opacity-50 transition duration-300 hover:border-primary hover:ring-[5px] hover:ring-primary hover:ring-opacity-20 peer-checked:border-primary peer-checked:ring-[5px] peer-checked:ring-opacity-100 '
            htmlFor='action4'
          >
            <PrintIcon />
          </label>
        </div>
      </form>
    </Modal>
  );
};
export default Modal35;
