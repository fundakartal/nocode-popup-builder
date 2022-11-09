/* eslint-disable react-hooks/exhaustive-deps */
import Nope from 'nope-validator';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../../app/slices/selectedModalSlice';
import { RootState } from '../../../app/store';
import { useForm } from '../../../hooks/useForm';
import { InfoIcon } from '../../components/icons';

type FormInputs = {
  WebhookURL: string;
  isFormSubmission: boolean;
  isClickData: boolean;
};

const schema = Nope.object().shape({
  WebhookURL: Nope.string()
    .url('URL is not valid')
    .required('Please enter a valid URL'),
  isFormSubmission: Nope.boolean(),
  isClickData: Nope.boolean(),
});

const CreateCode = () => {
  const { ...state } = useSelector((state: RootState) => state.selectedModal);
  const data = new Map(Object.entries(state.data));
  const id = data.get('id');
  const [show, setShow] = useState(false);
  const [buttonText, setButtonText] = useState('Copy the code');
  const dispatch = useDispatch();
  const { register, watch, handleSubmit, errors } = useForm<FormInputs>({
    schema,
  });

  useEffect(() => {
    const subscription = watch((data) => {
      dispatch(updateData(data));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const code = `
  <script>
      window.__INITIAL_DATA__ = ${JSON.stringify(state.data)}
  </script>
  <script type="module" src="https://fk-modal-card-generator.vercel.app/modal${id}/index.js"></script>`;

  const onSubmit = () => {
    setShow(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setButtonText('Copied');
    setTimeout(() => {
      setButtonText('Copy the code');
    }, 700);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4 text-[18px] font-semibold leading-9 tracking-tight'>
          Webhook to Send data
        </div>
        <div className='mb-4'>
          <p className='text-sm leading-[18px]'>Enter your Webhook URL</p>
          <p className='mt-[5px] text-xs leading-[14px]'>
            You can create a simple one with <span>make.com</span>
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          <input
            className='h-9 max-w-[378px] rounded-lg border border-[#DDDDDD] text-[14px] leading-[18px] focus:border-[3px] focus:border-primary focus:border-opacity-[0.15] focus:ring-primary'
            type='text'
            placeholder='Your Webhook URL'
            {...register('WebhookURL')}
          />
          <p className='text-sm text-red'>{errors.WebhookURL?.message}</p>
          <label className='text-sm leading-[18px]'>
            <input
              className='peer mr-[10px] h-[18px] w-[18px] cursor-pointer rounded border-[#999999] text-primary focus:ring-0 disabled:cursor-auto disabled:text-gray '
              type='checkbox'
              {...register('isFormSubmission')}
            />
            Send form submissions
          </label>
          <label className='text-sm leading-[18px]'>
            <input
              className='peer mr-[10px] h-[18px] w-[18px] cursor-pointer rounded border-[#999999] text-primary focus:ring-0 disabled:cursor-auto disabled:text-gray '
              type='checkbox'
              {...register('isClickData')}
            />
            Send click data
          </label>
        </div>
        <button
          className='mb-8 mt-12 h-[60px] w-[184px] rounded-xl bg-primary text-[18px] font-medium leading-[22px] tracking-tight text-white shadow-md'
          type='submit'
        >
          Get your Code
        </button>
      </form>
      {show && (
        <div>
          <div className='w-[378px] rounded-lg bg-[#333333] p-4'>
            <p className='mb-4 break-words font-RobotoMono text-[12px] text-white'>
              {code}
            </p>
            <button
              onClick={handleCopy}
              className='ml-auto grid h-8 w-[129px] place-items-center rounded-full bg-primary text-[14px] leading-[22px] text-white'
            >
              {buttonText}
            </button>
          </div>
          <div className='mt-4 flex gap-[5px]'>
            <div className='shrink-0'>
              <InfoIcon />
            </div>
            <p className='max-w-[331px] text-xs'>{`Copy and paste the embed code above just before the closing </body> tag of your website template file.`}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default CreateCode;
