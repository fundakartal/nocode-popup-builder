import Nope from 'nope-validator';
import Button from '../../button';
import { SecurityIcon } from '../../icons';
import Modal from '../../modal';
import { useSelector } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import { RootState } from '../../../../app/store';
import ModalContainer from '../../modalContainer';
import { useDispatch } from 'react-redux';
import { setShow } from '../../../../app/slices/selectedModalSlice';

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
  };
  const handleModal = () => {
    dispatch(setShow(false));
  };

  return (
    <ModalContainer>
      <Modal
        style={{ backgroundColor: Color2 }}
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
            style={{ backgroundColor: Color3 }}
            className={`grid h-90 w-90 place-items-center rounded-full transition duration-300 `}
          >
            <SecurityIcon />
          </div>
          <h1
            style={{ color: Color1 }}
            className={`mt-7 mb-4 text-3xl font-bold leading-9 text-black`}
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
              style={{ backgroundColor: Color2, borderColor: Color4 }}
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
              style={{
                backgroundColor: Color2,
                color: Color1,
                borderColor: Color4,
              }}
              type='reset'
              onClick={handleModal}
              className='grid h-12 w-168 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium text-black transition duration-300'
            >
              {Content5}
            </Button>
            <Button
              style={{ backgroundColor: Color3, color: Color2 }}
              className={`grid h-12 w-168 place-content-center rounded-lg bg-primary py-4 font-medium text-white transition duration-300 hover:bg-primary-dark`}
              type='submit'
            >
              {Content4}
            </Button>
          </div>
        </form>
      </Modal>
    </ModalContainer>
  );
};
export default Modal1;
