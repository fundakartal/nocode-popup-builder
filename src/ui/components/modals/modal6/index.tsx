import Nope from 'nope-validator';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  setIsCompleted,
  setShow,
} from '../../../../app/slices/selectedModalSlice';
import { RootState } from '../../../../app/store';
import { useForm } from '../../../../hooks/useForm';
import Button from '../../button';
import { PercentageIcon } from '../../icons';
import Modal from '../../modal';
import ModalContainer from '../../modalContainer';

type FormInputs = {
  email: string;
};

const schema = Nope.object().shape({
  email: Nope.string().email().required('E-mail is required'),
});

const Modal6 = () => {
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );
  const Content1 = data.get('Content1');
  const Content2 = data.get('Content2');
  const Content3 = data.get('Content3');
  const Content4 = data.get('Content4');
  const Content5 = data.get('Content5');
  const Color1 = data.get('Color1');
  const Color2 = data.get('Color2');
  const Color3 = data.get('Color3');
  const Color4 = data.get('Color4');
  const WebhookURL = data.get('WebhookURL');
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<FormInputs>({ schema });

  const onSubmit = (data: FormInputs) => {
    fetch(`${WebhookURL}`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ data }),
    });
    dispatch(setShow(false));
    dispatch(setIsCompleted(true));
  };
  const handleModal = () => {
    dispatch(setShow(false));
    dispatch(setIsCompleted(true));
  };

  return (
    <ModalContainer>
      <Modal
        style={{ backgroundColor: Color2 }}
        className='h-[446px] w-480 bg-white py-10'
      >
        <div
          style={{ color: Color3 }}
          className={`flex flex-col items-center justify-center text-primary`}
        >
          <PercentageIcon fill='currentColor' />
          <h1
            style={{ color: Color1 }}
            className={`mt-7 mb-5 text-3xl font-bold leading-9 text-black`}
          >
            {Content1}
          </h1>
          <h2
            style={{ color: Color1 }}
            className={`mb-10 text-xl leading-6 text-black`}
          >
            {Content2}
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col'>
            <input
              style={{ borderColor: Color4 }}
              type='email'
              placeholder={Content5}
              className={`form-input h-12 w-350 rounded-lg border border-gray-extra-light p-4 placeholder:leading-5 placeholder:text-black focus:border-primary`}
              {...register('email')}
            />
            <label className='text-sm leading-7 text-red-600'>
              {errors.email?.message}
            </label>
          </div>
          <div className={`${errors.email ? 'mt-2' : 'mt-8'} flex gap-4`}>
            <Button
              style={{ color: Color1, backgroundColor: Color2}}
              type='reset'
              onClick={handleModal}
              className={`grid h-12 w-168 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium leading-5 text-black transition duration-300`}
            >
              {Content4}
            </Button>
            <Button 
              style={{ color: Color2, backgroundColor: Color3}}
              className={`grid h-12 w-168 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
              type='submit'
            >
              {Content3}
            </Button>
          </div>
        </form>
      </Modal>
    </ModalContainer>
  );
};
export default Modal6;
