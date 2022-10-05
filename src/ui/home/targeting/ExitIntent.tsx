/* eslint-disable react-hooks/exhaustive-deps */
import Nope from 'nope-validator';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateData } from '../../../app/slices/selectedModalSlice';
import { useForm } from '../../../hooks/useForm';

type FormInputs = {
  ExitIntent: boolean;
};

const schema = Nope.object().shape({
  ExitIntent: Nope.boolean(),
});

const GetCode = () => {
  const dispatch = useDispatch();

  const { register, watch, control, reset, getValues, handleSubmit, errors } =
    useForm<FormInputs>({
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
          <p className='text-[14px] font-semibold leading-5 tracking-tight'>
            Exit Intent Targeting
          </p>
          <label className='relative inline-flex cursor-pointer items-center'>
            <input
              type='checkbox'
              defaultValue='false'
              className='peer sr-only'
              {...register('ExitIntent')}
            />
            <div className="peer h-5 w-9 rounded-full bg-gray-300 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full  peer-checked:after:border-white peer-focus:outline-none "></div>
          </label>
        </div>
      </div>
    </form>
  );
};
export default GetCode;
