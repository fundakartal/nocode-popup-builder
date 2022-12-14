/* eslint-disable react-hooks/exhaustive-deps */
import Nope from 'nope-validator';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../../app/slices/selectedModalSlice';
import { RootState } from '../../../app/store';
import { useForm } from '../../../hooks/useForm';

type FormInputs = {
  AfterScroll: number;
  SetAfterScroll: boolean;
};

const schema = Nope.object().shape({
  AfterScroll: Nope.number(),
});

const AfterScroll = () => {
  const dispatch = useDispatch();
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );

  const { register, watch, handleSubmit, errors } =
    useForm<FormInputs>({
      schema,
      defaultValues: {AfterScroll: 50, SetAfterScroll: true}
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
            After % Scroll
          </p>
          <label className='relative mb-5 inline-flex cursor-pointer items-center'>
            <input
              type='checkbox'
              defaultValue='false'
              className='peer sr-only'
              {...register('SetAfterScroll')}
            />
            <div className="peer h-5 w-9 rounded-full bg-gray-300 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full  peer-checked:after:border-white peer-focus:outline-none "></div>
          </label>
        </div>
        <input
          className='h-9 max-w-[378px] rounded-lg border border-[#DDDDDD] text-[14px] leading-[18px] focus:border-[3px] focus:border-primary focus:border-opacity-[0.15] focus:ring-primary'
          type='number'
          disabled={data.get('SetAfterScroll') === false}
          {...register('AfterScroll')}
        />
        <p className='mt-2 text-sm text-red'>{errors.AfterScroll?.message}</p>
      </div>
    </form>
  );
};
export default AfterScroll;
