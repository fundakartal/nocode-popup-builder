import Image from 'next/image';
import React from 'react';
import Modal from '../../modal';

const Modal32 = () => {
  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState('emoji3');

  const isRadioSelected = (value: string): boolean =>
    selectedRadioBtn === value;

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedRadioBtn(e.currentTarget.value);
  };

  return (
    <Modal
      className={`relative flex h-[365px] w-480 flex-col items-center justify-between rounded-xl bg-white`}
    >
      <div className='flex h-[220px] w-full flex-col items-center rounded-t-xl bg-[#F6F1FF]'>
        <div className='absolute -top-16 flex h-[120px] w-[120px] items-center justify-center rounded-full bg-primary'>
          <Image
            src='/images/logo.svg'
            alt=''
            width={36}
            height={62}
            layout='fixed'
          />
        </div>
        <h1 className={`mt-24 text-3xl font-bold leading-9 text-black`}>
          Do you like our design?
        </h1>
        <h2 className='mt-5 mb-7 text-xl leading-6'>Help us to improve it.</h2>
      </div>
      <form className='flex gap-7 mb-7'>
        <div className='flex flex-col items-center'>
          <input
            type='radio'
            name='emoji1'
            value='emoji1'
            id='emoji1'
            checked={isRadioSelected('emoji1')}
            onChange={handleRadioClick}
            className='peer hidden'
          />
          <label
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-gray-light ring-primary ring-opacity-50 transition duration-300 hover:border-primary hover:ring-[5px] hover:ring-primary hover:ring-opacity-20 peer-checked:border-primary peer-checked:ring-[5px] peer-checked:ring-opacity-100 '
            htmlFor='emoji1'
          >
            <Image
              src='/images/Modal32/emoji1.png'
              alt=''
              width={36}
              height={36}
              layout='fixed'
            />
          </label>
          <span className='mt-[10px] font-medium leading-5 text-gray-dark'>
            Cool
          </span>
        </div>
        <div className='flex flex-col items-center'>
          <input
            type='radio'
            name='emoji2'
            value='emoji2'
            id='emoji2'
            checked={isRadioSelected('emoji2')}
            onChange={handleRadioClick}
            className='peer hidden'
          />
          <label
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-gray-light ring-primary ring-opacity-50 transition duration-300 hover:border-primary hover:ring-[5px] hover:ring-primary hover:ring-opacity-20 peer-checked:border-primary peer-checked:ring-[5px] peer-checked:ring-opacity-100 '
            htmlFor='emoji2'
          >
            <Image
              src='/images/Modal32/emoji6.png'
              alt=''
              width={36}
              height={36}
              layout='fixed'
            />
          </label>
          <span className='mt-[10px] font-medium leading-5 text-gray-dark'>
            Not Bad
          </span>
        </div>
        <div className='flex flex-col items-center'>
          <input
            type='radio'
            name='emoji3'
            value='emoji3'
            id='emoji3'
            checked={isRadioSelected('emoji3')}
            onChange={handleRadioClick}
            className='peer hidden'
          />
          <label
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-gray-light ring-primary ring-opacity-50 transition duration-300 hover:border-primary hover:ring-[5px] hover:ring-primary hover:ring-opacity-20 peer-checked:border-primary peer-checked:ring-[5px] peer-checked:ring-opacity-100 '
            htmlFor='emoji3'
          >
            <Image
              src='/images/Modal32/emoji3.png'
              alt=''
              width={36}
              height={36}
              layout='fixed'
            />
          </label>
          <span className='mt-[10px] font-medium leading-5 text-gray-dark'>
            Average
          </span>
        </div>
        <div className='flex flex-col items-center'>
          <input
            type='radio'
            name='emoji4'
            value='emoji4'
            id='emoji4'
            checked={isRadioSelected('emoji4')}
            onChange={handleRadioClick}
            className='peer hidden'
          />
          <label
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-gray-light ring-primary ring-opacity-50 transition duration-300 hover:border-primary hover:ring-[5px] hover:ring-primary hover:ring-opacity-20 peer-checked:border-primary peer-checked:ring-[5px] peer-checked:ring-opacity-100 '
            htmlFor='emoji4'
          >
            <Image
              src='/images/Modal15/emoji4.png'
              alt=''
              width={36}
              height={36}
              layout='fixed'
            />
          </label>
          <span className='mt-[10px] font-medium leading-5 text-gray-dark'>
            Good
          </span>
        </div>
        <div className='flex flex-col items-center'>
          <input
            type='radio'
            name='emoji5'
            value='emoji5'
            id='emoji5'
            checked={isRadioSelected('emoji5')}
            onChange={handleRadioClick}
            className='peer hidden'
          />
          <label
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-gray-light ring-primary ring-opacity-50 transition duration-300 hover:border-primary hover:ring-[5px] hover:ring-primary hover:ring-opacity-20 peer-checked:border-primary peer-checked:ring-[5px] peer-checked:ring-opacity-100 '
            htmlFor='emoji5'
          >
            <Image
              src='/images/Modal15/emoji2.png'
              alt=''
              width={36}
              height={36}
              layout='fixed'
            />
          </label>
          <span className='mt-[10px] font-medium leading-5 text-gray-dark'>
            Bad
          </span>
        </div>
      </form>
    </Modal>
  );
};
export default Modal32;
