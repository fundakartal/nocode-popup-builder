import Nope from 'nope-validator';
import React from 'react';
import Button from '../../button';
import { SecurityIcon } from '../../icons';
import Modal from '../../modal';
import { useSelector } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import { RootState } from '../../../../app/store';

type FormInputs = {
  code: string;
};

const schema = Nope.object().shape({
  code: Nope.string().required('Code is required'),
});

const Modal1 = () => {
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );
  const Size = data.get('Size');
  const Position = data.get('Position');
  const Content1 = data.get('Content1');
  const Content2 = data.get('Content2');
  const Content3 = data.get('Content3');
  const Content4 = data.get('Content4');
  const Content5 = data.get('Content5');
  const Color1 = data.get('Color1');
  const Color2 = data.get('Color2');
  const Color3 = data.get('Color3');
  const Color4 = data.get('Color4');
  const SetAfterScroll = data.get('SetAfterScroll');
  const AfterScroll = data.get('AfterScroll');
  const SetAfterXSeconds = data.get('SetAfterXSeconds');
  const AfterXSeconds = data.get('AfterXSeconds');
  const SetDevice = data.get('SetDevice');
  const DeviceType = data.get('DeviceType');
  const ExitIntent = data.get('ExitIntent');
  const WebhookURL = data.get('WebhookURL');

  const { register, handleSubmit, errors } = useForm<FormInputs>({ schema });
  const onSubmit = (data: FormInputs) => {
    fetch(`${WebhookURL}`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ data }),
    });
  };

  return (
    <div
      className={`grid place-items-center h-full w-full bg-black bg-opacity-5 
    ${
      Position === 'Top'
        ? 'items-start'
        : Position === 'Right'
        ? 'justify-end'
        : Position === 'Bottom'
        ? 'items-end'
        : Position === 'Left'
        ? 'justify-start'
        : Position === 'LeftTop'
        ? 'items-start justify-start'
        : Position === 'RightTop'
        ? 'items-start justify-end'
        : Position === 'RightBottom'
        ? 'items-end justify-end'
        : Position === 'LeftBottom'
        ? 'items-end justify-start'
        : 'place-items-center'
    }`}
    >
      <Modal
        className={`relative flex ${
          Size === 'Small'
            ? 'h-[440px] w-[420px]'
            : Size === 'Large'
            ? 'h-[480px] w-[520px]'
            : 'h-[446px] w-[480px]'
        } flex-col items-center rounded-xl bg-white py-10`}
      >
        <div className={`grid place-items-center`}>
          <div
            className={`grid h-90 w-90 place-items-center rounded-full bg-primary transition duration-300 `}
          >
            <SecurityIcon />
          </div>
          <h1 className={`mt-7 mb-4 text-3xl font-bold leading-9 text-black`}>
            {Content1}
          </h1>
          <h2 className={`mb-10 text-xl leading-6 text-black`}>{Content2}</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col'>
            <input
              type='text'
              placeholder={Content3}
              className={`form-input h-12 ${
                Size === 'Small'
                  ? 'w-[300px]'
                  : Size === 'Large'
                  ? 'w-[370px]'
                  : 'w-[350px]'
              } rounded-lg border border-gray-extra-light p-4 placeholder:leading-5 placeholder:text-black focus:border-primary`}
              {...register('code')}
            />
            <label className='text-sm leading-7 text-red-600'>
              {errors.code?.message}
            </label>
          </div>
          <div className='mt-8 flex gap-4'>
            <Button
              type='reset'
              className='grid h-12 w-168 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium text-black transition duration-300'
            >
              {Content5}
            </Button>
            <Button
              className={`grid h-12 w-168 place-content-center rounded-lg bg-primary py-4 font-medium text-white transition duration-300 hover:bg-primary-dark`}
              type='submit'
            >
              {Content4}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default Modal1;
