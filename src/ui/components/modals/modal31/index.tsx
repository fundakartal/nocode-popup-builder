import Image from 'next/image';
import React from 'react';
import Button from '../../button';
import Modal from '../../modal';

const Modal31 = () => {
  const [text, setText] = React.useState('');
  const handleClick = (e: any) => {
    const id = +e.currentTarget.id;
    setText(dummyTexts[id].content);
  };
  const dummyTexts = [
    {
      id: 0,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur fermentum blandit.',
    },
    {
      id: 1,
      content:
        'Quisque ultricies volutpat libero, ac pellentesque odio. Integer sodales euismod posuere.',
    },
    {
      id: 3,
      content:
        'Our award winning templates are the most beautiful way to present your ideas online.',
    },
    {
      id: 4,
      content:
        ' Ut tempor vitae tortor eget iaculis. Aliquam volutpat tristique turpis ut cursus.',
    },
    {
      id: 5,
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
    },
  ];
  const getButtons = (num: number) => {
    const arr = [];
    for (var i = 0; i < num; i++) {
      arr.push(
        <button
          key={i}
          id={`${i}`}
          onClick={(e) => handleClick(e)}
          className={`h-3 w-3 rounded-full bg-[#DDD]`}
        ></button>
      );
    }
    return arr;
  };

  return (
    <Modal
      className={`relative flex h-[687px] w-480 flex-col items-center justify-between rounded-xl bg-white`}
    >
      <Image
        src='/images/Modal31/bg.png'
        alt=''
        width={480}
        height={250}
        layout='fixed'
        priority={true}
      />
      <div className='absolute bottom-0 flex flex-col items-center pb-50'>
        <div className='mb-4 flex h-[120px] w-[120px] items-center justify-center rounded-full bg-primary'>
          <Image
            src='/images/logo.svg'
            alt=''
            width={36}
            height={62}
            layout='fixed'
          />
        </div>
        <p className='font-bold leading-5'>OVERVIEW</p>
        <div className='mt-10 flex flex-col items-center justify-center text-center'>
          <h1 className='text-3xl font-bold'>Welcome to onboarding</h1>
          <h2 className='mt-4 mb-9 w-80 text-xl leading-6'>{text}</h2>
          <div className='flex gap-3'>{getButtons(5)}</div>
          <div className='mt-8 flex gap-4'>
            <Button
              className={`grid h-12 w-168 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium leading-5 text-black`}
            >
              Maybe Later
            </Button>
            <Button
              className={`grid h-12 w-168 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
            >
              Connect now
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Modal31;
