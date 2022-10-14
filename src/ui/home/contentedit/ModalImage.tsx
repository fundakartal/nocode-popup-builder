import { useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { useCallback, useEffect, useState } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { RootState } from '../../../app/store';
import { updateData } from '../../../app/slices/selectedModalSlice';
import { CloudIcon } from '../../components/icons';

const ModalImage = () => {
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );
  const [image, setImage] = useState(data.get('Image'));
  const dispatch = useDispatch();

  const onDrop = useCallback((acceptedFiles: any) => {
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);
    formData.append(
      'upload_preset',
      `${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`
    );
    Axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/upload`,
      formData
    ).then((response) => {
      setImage(response.data.url);
    });
  }, []);

  const id = data.get('id');
  useEffect(() => {
    setImage(data.get('Image'));
  }, [id]);

  useEffect(() => {
    const Image = { Image: image };
    dispatch(updateData(Image));
  }, [image]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
       'image/*': ['.jpeg', '.png', '.svg']
    },
  });

  return (
    <div>
      <p className='mb-4 mt-4 text-sm leading-[18px]'>Upload Image</p>
      <div className='flex w-full items-center justify-center'>
        <div
          className='flex h-[178px] w-[378px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-[#DDDDDD] transition duration-300 hover:bg-gray-100'
          {...getRootProps()}
        >
          <div className='flex flex-col items-center justify-center gap-5'>
            <input {...getInputProps()} />
            <Image src={image} alt='' width={72} height={80} layout='fixed' />
            <div className='flex items-center justify-center gap-[5px] text-sm leading-[18px]'>
              <CloudIcon /> Drop your image here or{' '}
              <span className='font-semibold text-primary underline underline-offset-2'>
                upload
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalImage;
