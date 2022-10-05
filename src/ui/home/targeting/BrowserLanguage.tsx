/* eslint-disable react-hooks/exhaustive-deps */
import Nope from 'nope-validator';
import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../../app/slices/selectedModalSlice';
import { RootState } from '../../../app/store';
import { useForm } from '../../../hooks/useForm';
import { CaretDownIcon, XIconXS } from '../../components/icons';

enum LanguagesEnum {
  English = 'English',
  French = 'French',
  German = 'German',
  Polish = 'Polish',
  Dutch = 'Dutch',
  Finnish = 'Finnish',
}

type FormInputs = {
  SetLanguages: boolean;
  BrowserLanguages: LanguagesEnum[];
};

const schema = Nope.object().shape({
  SetLanguages: Nope.number(),
});

const Languages = ['English', 'French', 'German', 'Polish', 'Dutch', 'Finnish'];

const BrowserLanguage = () => {
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );

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
    <div>
      <form className='font-Poppins' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between'>
            <p className='mb-4 text-sm font-semibold leading-5 tracking-tight'>
              Browser Language
            </p>
            <label className='relative mb-5 inline-flex cursor-pointer items-center'>
              <input
                type='checkbox'
                defaultChecked
                defaultValue='true'
                className='peer sr-only'
                {...register('SetLanguages')}
              />
              <div className="peer h-5 w-9 rounded-full bg-gray-300 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full  peer-checked:after:border-white peer-focus:outline-none "></div>
            </label>
          </div>

          <div className=' relative flex min-h-[36px] w-[378px] items-center justify-between rounded-lg border border-[#DDDDDD] p-[3px] pr-3 text-sm leading-[18px] focus:border-[3px] focus:border-primary focus:border-opacity-[0.15] focus:ring-primary'>
            <div>
              {!data.get('BrowserLanguages') ? (
                <span className='px-3 text-sm leading-[18px] text-gray-dark'>
                  Select
                </span>
              ) : (
                <div className='flex flex-wrap gap-[3px]'>
                  {data
                    .get('BrowserLanguages')
                    .map((lang: string, i: number) => (
                      <p
                        key={i}
                        className='group flex h-[30px]  items-center gap-[11px] rounded-md bg-[#EAEAEA] pl-4 pr-[9px] hover:border hover:border-red'
                      >
                        {lang}
                        <span className='grid h-[18px] w-[18px] place-items-center group-hover:rounded-full group-hover:bg-red group-hover:text-white'>
                          <XIconXS fill='currentColor' />
                        </span>
                      </p>
                    ))}
                </div>
              )}
            </div>
            <div onClick={() => setDropdown(!dropdown)}>
              <CaretDownIcon />
            </div>

            <div className={`absolute right-0 top-full`}>
              {dropdown && (
                <div
                  className={`mt-2 flex w-[378px] flex-col gap-1 rounded-md border border-[#DDDDDD] bg-white shadow-lg`}
                >
                  <label className='flex w-full cursor-pointer items-center border-b px-5 py-4 hover:bg-[#F5F5F5]'>
                    <input
                      type='checkbox'
                      className='mr-[10px] h-[18px] w-[18px] cursor-pointer rounded border-[#999999] text-primary focus:ring-0 disabled:cursor-auto disabled:text-gray '
                    />
                    All Languages
                  </label>
                  {Languages.map((language, index) => (
                    <label
                      className=' flex h-8 w-full cursor-pointer items-center px-5 py-1.5 hover:bg-[#F5F5F5]'
                      key={index}
                    >
                      <input
                        {...register('BrowserLanguages')}
                        type='checkbox'
                        value={language}
                        className='mr-[10px] h-[18px] w-[18px] cursor-pointer rounded border-[#999999] text-sm font-medium text-primary focus:ring-0 disabled:cursor-auto disabled:text-gray '
                      />
                      {language}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default BrowserLanguage;
