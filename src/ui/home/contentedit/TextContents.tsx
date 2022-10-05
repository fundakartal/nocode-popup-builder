/* eslint-disable react-hooks/exhaustive-deps */
import Nope from 'nope-validator';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../../app/slices/selectedModalSlice';
import { RootState } from '../../../app/store';
import { useForm } from '../../../hooks/useForm';

type FormInputs = {
  Content1?: string;
  Content2?: string;
  Content3?: string;
  Content4?: string;
  Content5?: string;
  Content6?: string;
  Content7?: string;
};

const schema = Nope.object().shape({
  Content1: Nope.string(),
  Content2: Nope.string(),
  Content3: Nope.string(),
  Content4: Nope.string(),
  Content5: Nope.string(),
  Content6: Nope.string(),
  Content7: Nope.string(),
});

const TextContents = () => {
  const { ...state } = useSelector((state: RootState) => state.selectedModal);
  const dispatch = useDispatch();
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );

  const TextContents = Object.keys(state.data).filter((v) =>
    v.startsWith('Content')
  );

  const { register, watch, handleSubmit, errors } = useForm<FormInputs>({
    schema,
  });

  useEffect(() => {
    const subscription = watch((data) => {
      dispatch(updateData(data));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data: FormInputs) => {dispatch(updateData(data));};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className='mb-4 text-sm leading-[18px]'>Edit your content</p>
      <div className='flex flex-col gap-4'>
        {TextContents.map(
          (content, index) =>
            data.get(content) && (
              <input
                key={index}
                className='h-9 w-[378px] rounded-lg border border-[#DDDDDD] text-[14px] leading-[18px] focus:border-[3px] focus:border-primary focus:border-opacity-[0.15] focus:ring-primary'
                type='text'
                defaultValue={data.get(content)}
                {...register(content)}
              />
            )
        )}
      </div>
    </form>
  );
};
export default TextContents;
