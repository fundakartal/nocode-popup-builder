/* eslint-disable react-hooks/exhaustive-deps */
import Nope from 'nope-validator';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateData } from '../../../app/slices/selectedModalSlice';
import { useForm } from '../../../hooks/useForm';
import { CaretDownIcon, XIconXS } from '../../components/icons';

type FormInputs = {
  SetLanguages: boolean;
  selectAll: boolean;
  BrowserLanguages: string[];
};

const schema = Nope.object().shape({
  SetLanguages: Nope.boolean(),
  selectAll: Nope.boolean(),
});

interface languageData {
  name: string;
  isChecked: boolean;
}

const languageData = [
  { name: 'English', code: 'en', isChecked: true },
  { name: 'French', code: 'fr', isChecked: false },
  { name: 'German', code: 'de', isChecked: false },
  { name: 'Polish', code: 'pl', isChecked: false },
  { name: 'Dutch', code: 'nl', isChecked: false },
  { name: 'Finnish', code: 'fi', isChecked: false },
  { name: 'Swedish', code: 'sv', isChecked: false },
  { name: 'Turkish', code: 'tr', isChecked: false },
  { name: 'Italian', code: 'it', isChecked: false },
  { name: 'Spanish', code: 'es', isChecked: false },
  { name: 'Portuguese', code: 'pt', isChecked: false },
  { name: 'Russian', code: 'ru', isChecked: false },
  { name: 'Chinese', code: 'zh', isChecked: false },
  { name: 'Japanese', code: 'ja', isChecked: false },
  { name: 'Korean', code: 'ko', isChecked: false },
];

const BrowserLanguage = () => {
  const [dropdown, setDropdown] = useState(false);
  const [languages, setLanguages] = useState(languageData);
  const dispatch = useDispatch();
  const { register, watch, setValue, getValues, handleSubmit } =
    useForm<FormInputs>({
      schema,
    });

  useEffect(() => {
    const subscription = watch((data) => {
      dispatch(updateData(data));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    let languageCodes = languages
      .filter((language) => language.isChecked)
      .map((languge) => languge.code);
    setValue('BrowserLanguages', languageCodes);
    getValues('BrowserLanguages').length === 0 && setValue('selectAll', false);
  }, [languages]);

  const handleChange = (e: {
    target: { value?: any; name?: any; checked?: any };
  }) => {
    const { name, checked, value } = e.target;
    if (name === 'selectAll') {
      let tempLanguage = languages.map((language) => {
        return { ...language, isChecked: checked };
      });
      setLanguages(tempLanguage);
    } else {
      let tempLanguage = languages.map((language) =>
        language.code === value ? { ...language, isChecked: checked } : language
      );
      setLanguages(tempLanguage);
    }
  };
  const deleteLanguage = (lang: string) => {
    let tempLanguage = languages.map((language) =>
      language.name === lang ? { ...language, isChecked: false } : language
    );
    setLanguages(tempLanguage);
  };

  const deleteAll = () => {
    let tempLanguage = languages.map((language) => {
      return { ...language, isChecked: false };
    });
    setLanguages(tempLanguage);
    setValue('selectAll', false);
  };

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

          <div className='relative flex min-h-[36px] w-[378px] items-center justify-between rounded-lg border border-[#DDDDDD] p-[3px] pr-3 text-sm leading-[18px] focus:border-[3px] focus:border-primary focus:border-opacity-[0.15] focus:ring-primary'>
            <div
              className={`${
                !getValues('SetLanguages') && 'pointer-events-none opacity-50'
              }`}
            >
              {!languages.some((language) => language?.isChecked) ? (
                <span className='px-3 text-sm leading-[18px] text-gray-dark'>
                  Select Languages
                </span>
              ) : (
                <div className='flex flex-wrap gap-[3px]'>
                  {languages
                    .filter((language) => language?.isChecked)
                    .map((language, i) => (
                      <p
                        key={i}
                        className='group flex h-[30px] items-center gap-[11px] rounded-md bg-[#EAEAEA] pl-4 pr-[9px] hover:border hover:border-red'
                      >
                        {language.name}
                        <span
                          onClick={() => deleteLanguage(language.name)}
                          className='grid h-[18px] w-[18px] cursor-pointer place-items-center group-hover:rounded-full group-hover:bg-red group-hover:text-white'
                        >
                          <XIconXS fill='currentColor' />
                        </span>
                      </p>
                    ))}
                </div>
              )}
            </div>
            <button
              className='disabled:opacity-50'
              disabled={!getValues('SetLanguages')}
              onClick={() => setDropdown(!dropdown)}
            >
              <CaretDownIcon />
            </button>

            <div className={`absolute right-0 top-full z-50 font-Inter`}>
              {dropdown && (
                <div
                  className={`mt-2 flex w-[378px] flex-col gap-1 rounded-md border border-[#DDDDDD] bg-white shadow-lg`}
                >
                  <label className='flex w-full cursor-pointer items-center border-b px-5 py-4 hover:bg-[#F5F5F5]'>
                    <input
                      type='checkbox'
                      checked={
                        !languages.some(
                          (language) => language?.isChecked !== true
                        )
                      }
                      className='mr-[10px] h-[18px] w-[18px] cursor-pointer rounded border-[#999999] text-primary focus:ring-0 disabled:cursor-auto disabled:text-gray '
                      {...register('selectAll', {
                        onChange: (e) => handleChange(e),
                      })}
                    />
                    All Languages
                  </label>
                  <div className='py-[10px]'>
                    {languages.map((language, index) => (
                      <label
                        className=' flex h-8 w-full cursor-pointer items-center px-5 py-1.5 hover:bg-[#F5F5F5]'
                        key={index}
                      >
                        <input
                          {...register('BrowserLanguages', {
                            onChange: (e) => handleChange(e),
                          })}
                          type='checkbox'
                          value={language.code}
                          checked={language?.isChecked}
                          className='mr-[10px] h-[18px] w-[18px] cursor-pointer rounded border-[#999999] text-sm font-medium text-primary focus:ring-0 disabled:cursor-auto disabled:text-gray '
                        />
                        {language.name}
                      </label>
                    ))}
                  </div>
                  <div className='flex items-center justify-between border-t border-[#EAEAEA] px-5 py-4'>
                    <button
                      onClick={deleteAll}
                      className='text-xs font-semibold'
                    >
                      Clear Selected Languages
                    </button>
                    <button
                      onClick={() => setDropdown(!dropdown)}
                      className='text-xs'
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className='mt-1.5 text-sm text-red'>
            {getValues('BrowserLanguages')?.length === 0 &&
              getValues('SetLanguages') &&
              'Please select at least one language'}
          </p>
        </div>
      </form>
    </div>
  );
};
export default BrowserLanguage;
