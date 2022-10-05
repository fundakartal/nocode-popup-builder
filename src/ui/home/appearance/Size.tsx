/* eslint-disable react-hooks/exhaustive-deps */
import Nope from 'nope-validator';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../../app/slices/selectedModalSlice';
import { RootState } from '../../../app/store';
import { useForm } from '../../../hooks/useForm';

enum SizeEnum {
  Small,
  Medium,
  Large,
}

type FormInputs = {
  Size: SizeEnum;
};

const schema = Nope.object().shape({
  Size: Nope.string(),
});

const Size = () => {
  const dispatch = useDispatch();
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );
  const { register, watch, handleSubmit, errors } =
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className='mb-4 text-sm leading-[18px]'>Size</p>
      <div className='flex h-12 w-[257px] items-center justify-between rounded-xl bg-[#F5F5F5] p-[3px] text-gray-dark'>
        <label className='h-full cursor-pointer'>
          <input
            {...register('Size')}
            type='radio'
            value='Small'
            className='peer hidden'
          />
          <span
            className={`${
              data.get('Size') === 'Small' && 'bg-white font-semibold'
            } grid h-full place-items-center rounded-xl px-4 text-black `}
          >
            Small
          </span>
        </label>

        <label className='h-full cursor-pointer'>
          <input
            {...register('Size')}
            type='radio'
            value='Medium'
            className='peer hidden'
          />
          <span
            className={`${
              data.get('Size') === 'Medium' && 'bg-white font-semibold'
            } grid h-full place-items-center rounded-xl px-4 text-black `}
          >
            Medium
          </span>
        </label>

        <label className='h-full cursor-pointer'>
          <input
            {...register('Size')}
            type='radio'
            value='Large'
            className='peer hidden'
          />
          <span
            className={`${
              data.get('Size') === 'Large' && 'bg-white font-semibold'
            } grid h-full place-items-center rounded-xl px-4 text-black `}
          >
            Large
          </span>
        </label>
      </div>
    </form>
  );
};
export default Size;
