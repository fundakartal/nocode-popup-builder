import React from 'react';
import Nope from 'nope-validator';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  setIsCompleted,
  setShow,
} from '../../../../app/slices/selectedModalSlice';
import { RootState } from '../../../../app/store';
import { useForm } from '../../../../hooks/useForm';
import Button from '../../button';
import Modal from '../../modal';
import ModalContainer from '../../modalContainer';

enum PlanEnum {
  Starter,
  Pro,
  Business,
}

const schema = Nope.object().shape({
  PlanEnum: Nope.string(),
});

type FormInputs = {
  PlanType: PlanEnum;
};

const Modal5 = () => {
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );
  const { register, handleSubmit } = useForm<FormInputs>({
    schema,
  });
  const Content1 = data.get('Content1');
  const Content2 = data.get('Content2');
  const Content3 = data.get('Content3');
  const Content4 = data.get('Content4');
  const Content5 = data.get('Content5');
  const Content6 = data.get('Content6');
  const Content7 = data.get('Content7');
  const Content8 = data.get('Content8');
  const Content9 = data.get('Content9');
  const Content10 = data.get('Content10');
  const Content11 = data.get('Content11');
  const Color1 = data.get('Color1');
  const Color2 = data.get('Color2');
  const Color3 = data.get('Color3');
  const Color4 = data.get('Color4');
  const Color5 = data.get('Color5');
  const WebhookURL = data.get('WebhookURL');
  const dispatch = useDispatch();
  const [selectedPlan, setSelectedPlan] = React.useState('Business');
  
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

  const hexToRGB = (hex: string, alpha: number | undefined = 1) => {
    hex = hex.toUpperCase();
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <ModalContainer>
      <Modal style={{ backgroundColor: Color2 }} className='h-550 w-480 py-12 '>
        <div className='flex flex-col items-center justify-center'>
          <span
            style={{ color: Color3 }}
            className='mb-3 block text-lg font-medium uppercase leading-6 text-primary'
          >
            {Content1}
          </span>
          <h1 style={{ color: Color1 }} className=' text-3xl font-bold'>
            {Content2}
          </h1>
          <h2
            style={{ color: Color1 }}
            className='mb-14 mt-4 text-center text-xl leading-6'
          >
            {Content3}
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-8'
          >
            <div className={`group flex ${!Content4 && !Content5 && 'hidden'}`}>
              <input
                onMouseOver={(e) => {
                  (e.target as HTMLInputElement).style.borderColor = Color3;
                  (
                    e.target as HTMLInputElement
                  ).style.boxShadow = `0 0 0 5px ${hexToRGB(Color3, 0.2)}`;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLInputElement).style.borderColor =
                    selectedPlan === Content4 ? Color3 : '#6b7280';
                  (e.target as HTMLInputElement).style.boxShadow = 'none';
                }}
                style={{
                  color: selectedPlan === Content4 && Color3,
                  borderColor: selectedPlan === Content4 && Color3,
                }}
                type='radio'
                value={Content4}
                className='form-radio h-6 w-6 cursor-pointer checked:text-primary focus:ring-transparent group-hover:border-primary group-hover:ring-[5px] group-hover:ring-primary group-hover:ring-opacity-20'
                {...register('PlanType', {
                  onChange: ({ target }) => setSelectedPlan(target.value),
                })}
              />
              <label
                style={{ color: Color1 }}
                className='ml-3 text-lg font-medium leading-6'
              >
                {Content4}
                <span
                  style={{ color: Color5 }}
                  className='mt-2 block text-sm font-normal leading-4 text-gray'
                >
                  {Content5}
                </span>
              </label>
            </div>
            <div className={`group flex ${!Content6 && !Content7 && 'hidden'}`}>
              <input
                onMouseOver={(e) => {
                  (e.target as HTMLInputElement).style.borderColor = Color3;
                  (
                    e.target as HTMLInputElement
                  ).style.boxShadow = `0 0 0 5px ${hexToRGB(Color3, 0.2)}`;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLInputElement).style.borderColor =
                    selectedPlan === Content6 ? Color3 : '#6b7280';
                  (e.target as HTMLInputElement).style.boxShadow = 'none';
                }}
                style={{
                  color: selectedPlan === Content6 && Color3,
                  borderColor: selectedPlan === Content6 && Color3,
                }}
                type='radio'
                value={Content6}
                className='form-radio h-6 w-6 cursor-pointer checked:text-primary focus:ring-transparent group-hover:border-primary group-hover:ring-[5px] group-hover:ring-primary group-hover:ring-opacity-20'
                {...register('PlanType', {
                  onChange: ({ target }) => setSelectedPlan(target.value),
                })}
              />
              <label
                style={{ color: Color1 }}
                className='ml-3 text-lg font-medium leading-6'
              >
                {Content6}
                <span
                  style={{ color: Color5 }}
                  className='mt-2 block text-sm font-normal leading-4 text-gray'
                >
                  {Content7}
                </span>
              </label>
            </div>
            <div className={`group flex ${!Content8 && !Content9 && 'hidden'}`}>
              <input
                onMouseOver={(e) => {
                  (e.target as HTMLInputElement).style.borderColor = Color3;
                  (
                    e.target as HTMLInputElement
                  ).style.boxShadow = `0 0 0 5px ${hexToRGB(Color3, 0.2)}`;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLInputElement).style.borderColor =
                    selectedPlan === Content8 ? Color3 : '#6b7280';
                  (e.target as HTMLInputElement).style.boxShadow = 'none';
                }}
                style={{
                  color: selectedPlan === Content8 && Color3,
                  borderColor: selectedPlan === Content8 && Color3,
                }}
                type='radio'
                value={Content8}
                defaultChecked
                className='form-radio h-6 w-6 cursor-pointer checked:text-primary focus:ring-transparent group-hover:border-primary group-hover:ring-[5px] group-hover:ring-primary group-hover:ring-opacity-20'
                {...register('PlanType', {
                  onChange: ({ target }) => setSelectedPlan(target.value),
                })}
              />
              <label
                style={{ color: Color1 }}
                className='ml-3 text-lg font-medium leading-6'
              >
                {Content8}
                <span
                  style={{ color: Color5 }}
                  className='mt-2 block text-sm font-normal leading-4 text-gray'
                >
                  {Content9}
                </span>
              </label>
            </div>
            <div className='flex gap-4'>
              <Button
                style={{ color: Color1, borderColor: Color4 }}
                type='reset'
                onClick={handleModal}
                className={`grid h-12 w-168 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium leading-5 text-black transition duration-300`}
              >
                {Content10}
              </Button>
              <Button
                style={{ color: Color2, backgroundColor: Color3 }}
                type='submit'
                className={`grid h-12 w-168 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
              >
                {Content11}
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </ModalContainer>
  );
};
export default Modal5;
