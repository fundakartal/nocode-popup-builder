import Image from 'next/image';
import React from 'react';
import Modal from '../../modal';

const Modal15 = () => {
  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState('radio3');

  const isRadioSelected = (value: string): boolean =>
    selectedRadioBtn === value;

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedRadioBtn(e.currentTarget.value);
  };

  return (
    <Modal
      className={`relative flex h-56 w-480 flex-col items-center rounded-xl bg-white py-12`}
    >
      <h1 className={`mb-8 text-3xl font-bold leading-9 text-black`}>
        Let’s feedback
      </h1>
      <form className='flex gap-4'>
        <div>
          <input
            type='radio'
            name='radio1'
            value='radio1'
            id='radio1'
            checked={isRadioSelected('radio1')}
            onChange={handleRadioClick}
            className='peer hidden'
          />
          <label
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-gray-light ring-primary ring-opacity-50 transition duration-300 hover:border-primary hover:ring-[5px] hover:ring-primary hover:ring-opacity-20 peer-checked:border-primary peer-checked:ring-[5px] peer-checked:ring-opacity-100 '
            htmlFor='radio1'
          >
            <Image
              src='/images/Modal15/emoji1.png'
              alt=''
              width={36}
              height={36}
              layout='fixed'
            />
          </label>
        </div>
        <div>
          <input
            type='radio'
            name='radio2'
            value='radio2'
            id='radio2'
            checked={isRadioSelected('radio2')}
            onChange={handleRadioClick}
            className='peer hidden'
          />
          <label
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-gray-light ring-primary ring-opacity-50 transition duration-300 hover:border-primary hover:ring-[5px] hover:ring-primary hover:ring-opacity-20 peer-checked:border-primary peer-checked:ring-[5px] peer-checked:ring-opacity-100 '
            htmlFor='radio2'
          >
            <Image
              src='/images/Modal15/emoji2.png'
              alt=''
              width={36}
              height={36}
              layout='fixed'
            />
          </label>
        </div>
        <div>
          <input
            type='radio'
            name='radio3'
            value='radio3'
            id='radio3'
            checked={isRadioSelected('radio3')}
            onChange={handleRadioClick}
            className='peer hidden'
          />
          <label
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-gray-light ring-primary ring-opacity-50 transition duration-300 hover:border-primary hover:ring-[5px] hover:ring-primary hover:ring-opacity-20 peer-checked:border-primary peer-checked:ring-[5px] peer-checked:ring-opacity-100 '
            htmlFor='radio3'
          >
            <Image
              src='/images/Modal15/emoji3.png'
              alt=''
              width={36}
              height={36}
              layout='fixed'
            />
          </label>
        </div>
        <div>
          <input
            type='radio'
            name='radio4'
            value='radio4'
            id='radio4'
            checked={isRadioSelected('radio4')}
            onChange={handleRadioClick}
            className='peer hidden'
          />
          <label
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-gray-light ring-primary ring-opacity-50 transition duration-300 hover:border-primary hover:ring-[5px] hover:ring-primary hover:ring-opacity-20 peer-checked:border-primary peer-checked:ring-[5px] peer-checked:ring-opacity-100 '
            htmlFor='radio4'
          >
            <Image
              src='/images/Modal15/emoji4.png'
              alt=''
              width={36}
              height={36}
              layout='fixed'
            />
          </label>
        </div>
        <div>
          <input
            type='radio'
            name='radio5'
            value='radio5'
            id='radio5'
            checked={isRadioSelected('radio5')}
            onChange={handleRadioClick}
            className='peer hidden'
          />
          <label
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-gray-light ring-primary ring-opacity-50 transition duration-300 hover:border-primary hover:ring-[5px] hover:ring-primary hover:ring-opacity-20 peer-checked:border-primary peer-checked:ring-[5px] peer-checked:ring-opacity-100 '
            htmlFor='radio5'
          >
            <Image
              src='/images/Modal15/emoji5.png'
              alt=''
              width={36}
              height={36}
              layout='fixed'
            />
          </label>
        </div>
      </form>
    </Modal>
  );
};
export default Modal15;
