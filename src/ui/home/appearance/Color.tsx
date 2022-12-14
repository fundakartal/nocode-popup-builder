/* eslint-disable react-hooks/exhaustive-deps */
import Nope from 'nope-validator';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../../app/slices/selectedModalSlice';
import { RootState } from '../../../app/store';
import { useForm } from '../../../hooks/useForm';

type FormInputs = {
  Color1?: string;
  Color2?: string;
  Color3?: string;
  Color4?: string;
  Color5?: string;
  Color6?: string;
};

const schema = Nope.object().shape({
  Color1: Nope.string(),
  Color2: Nope.string(),
  Color3: Nope.string(),
  Color4: Nope.string(),
  Color5: Nope.string(),
  Color6: Nope.string(),
});

const Color = () => {
  const { ...state } = useSelector((state: RootState) => state.selectedModal);
  const dispatch = useDispatch();
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );

  
  const { register, watch, handleSubmit, reset, errors } = useForm<FormInputs>({
    schema,
  });
  
  const Colors = Object.keys(state.data).filter((v) => v.startsWith('Color'));
  
  const id = data.get('id');
  useEffect(() => {
    reset();
  }, [id]);

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
      <p className='mb-4 text-sm leading-[18px]'>Colors</p>
      <div className='flex gap-[10px]'>
        {Colors.map(
          (color, index) =>
            data.get(color) && (
              <input
                key={index}
                className='h-[42px] w-[42px] '
                type='color'
                defaultValue={data.get(color)}
                {...register(`${color}` as any)}
              />
            )
        )}
      </div>
    </form>
  );
};
export default Color;
