/* eslint-disable react-hooks/exhaustive-deps */
import Nope from 'nope-validator';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../../app/slices/selectedModalSlice';
import { RootState } from '../../../app/store';
import { useForm } from '../../../hooks/useForm';
import {
  CheckedRadioIcon,
  DesktopIcon,
  MobileIcon,
} from '../../components/icons';

enum DeviceEnum {
  Desktop,
  Mobile,
}

type FormInputs = {
  DeviceType: DeviceEnum;
  SetDevice: boolean;
};

const schema = Nope.object().shape({
  Device: Nope.string(),
});

const VisitorDevice = () => {
  const dispatch = useDispatch();
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );

  const { register, watch, handleSubmit, errors } = useForm<FormInputs>({
    schema,
  });

  useEffect(() => {
    const subscription = watch((data) => {
      dispatch(updateData(data));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data: FormInputs) => {
    dispatch(updateData(data));
  };

  return (
    <form className='font-Poppins' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between'>
          <p className='mb-4 text-[14px] font-semibold leading-5 tracking-tight'>
            Visitor Device
          </p>
          <label className='relative mb-5 inline-flex cursor-pointer items-center'>
            <input
              type='checkbox'
              defaultChecked
              className='peer sr-only'
              {...register('SetDevice')}
            />
            <div className="peer h-5 w-9 rounded-full bg-gray-300 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full  peer-checked:after:border-white peer-focus:outline-none "></div>
          </label>
        </div>
        <div className='flex items-center justify-between'>
          <div className=' flex h-12 max-w-[179px] grow items-center rounded-xl bg-[#F5F5F5] p-[15px]'>
            <label className='relative flex cursor-pointer py-4 text-sm'>
              <input
                value='Desktop'
                type='radio'
                checked={data.get('DeviceType') === 'Desktop'}
                disabled={data.get('SetDevice') === false}
                className='peer mr-[10px] h-[18px] w-[18px] cursor-pointer rounded border-[#999999] text-primary focus:ring-0 disabled:cursor-auto disabled:text-gray '
                {...register('DeviceType')}
              />
              <div className='text-[#999999] peer-checked:text-primary peer-disabled:text-[#999999]'>
                <DesktopIcon fill='currentColor' />
              </div>
              <span className='ml-[5px]'>Desktop</span>
              <div
                className={`absolute hidden text-primary peer-checked:block ${
                  data.get('SetDevice') === false && 'text-gray'
                }`}
              >
                <CheckedRadioIcon fill='currentColor' />
              </div>
            </label>
          </div>
          <div className='flex h-12 max-w-[179px] grow items-center rounded-xl bg-[#F5F5F5] p-[15px]'>
            <label className='relative flex cursor-pointer py-4 text-sm'>
              <input
                value='Mobile'
                type='radio'
                checked={data.get('DeviceType') === 'Mobile'}
                disabled={data.get('SetDevice') === false}
                className='peer mr-[10px] h-[18px] w-[18px] cursor-pointer rounded border-[#999999] text-primary focus:ring-0 disabled:cursor-auto disabled:text-gray '
                {...register('DeviceType')}
              />
              <div className='text-[#999999] peer-checked:text-primary peer-disabled:text-[#999999]'>
                <MobileIcon fill='currentColor' />
              </div>
              <span className='ml-[5px]'>Mobile</span>
              <div
                className={`absolute hidden text-primary peer-checked:block ${
                  data.get('SetDevice') === false && 'text-gray'
                }`}
              >
                <CheckedRadioIcon fill='currentColor' />
              </div>
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};
export default VisitorDevice;
