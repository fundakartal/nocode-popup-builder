import Image from 'next/image';
import Modal from '../../modal';

const Modal14 = () => {
  return (
    <Modal className='relative flex h-[340px] w-[740px] gap-6 rounded-xl bg-white p-50'>
      <Image
        src='/images/Modal14/profileImg.svg'
        alt=''
        width={100}
        height={100}
        layout='fixed'
      />
      <div className='w-[510px]'>
        <figcaption>
          <p className='mt-5 text-2xl font-bold leading-7'>Jenny Yelriver</p>
          <p className='mt-3 mb-10 text-lg leading-5 text-gray-dark'>
            @jennyyelriver
          </p>
        </figcaption>
        <blockquote className='mb-9 text-lg leading-5'>
          Duis eget elit erat. Aliam euismod, mauris quis tristique feugiat,
          elit diam tincidunt erat, nec fringilla odio orci dapibu magna.
          Vestibulum ultrices sem nec ex efficitur aliquam.
        </blockquote>
        <span className='text-sm leading-4 text-gray-dark'>
          10 SEP 2021 - 16:33 PM
        </span>
      </div>
    </Modal>
  );
};
export default Modal14;
