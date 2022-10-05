import { useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { useCallback, useEffect, useState } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { updateData } from '../../../app/slices/selectedModalSlice';
import { CloudIcon, ImageIcon } from '../../components/icons';

const Logo = () => {
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );
  const [logo, setLogo] = useState(data.get('Logo'));
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
      setLogo(response.data.url);
    });
  }, []);

  useEffect(() => {
    const Logo = { Logo: logo };
    dispatch(updateData(Logo));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logo]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/svg': [],
    },
  });

  return (
    <>
      {data.get('Logo') && (
        <>
          <p className='mb-4 text-sm leading-[18px]'>Upload Logo</p>
          <div className='flex w-full items-center justify-center'>
            <div
              className='flex h-[178px] w-[378px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-[#DDDDDD] transition duration-300 hover:bg-gray-100'
              {...getRootProps()}
            >
              <div className='flex flex-col items-center justify-center gap-5'>
                <input {...getInputProps()} />
                <div className='grid h-20 w-20 place-items-center rounded-xl bg-primary bg-opacity-10'>
                  <ImageIcon />
                </div>
                <div className='flex items-center justify-center gap-[5px] text-sm leading-[18px]'>
                  <CloudIcon /> Drop your image here or{' '}
                  <span className='font-semibold text-primary underline underline-offset-2'>
                    upload
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Logo;
