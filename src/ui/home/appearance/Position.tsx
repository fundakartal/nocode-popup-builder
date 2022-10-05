import Nope from 'nope-validator';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../../app/slices/selectedModalSlice';
import { RootState } from '../../../app/store';
import { useForm } from '../../../hooks/useForm';

enum PositionEnum {
  LeftTop,
  Top,
  RightTop,
  Left,
  Center,
  Right,
  LeftBottom,
  Bottom,
  RightBottom,
}

type FormInputs = {
  Position: PositionEnum;
};

const schema = Nope.object().shape({
  Position: Nope.string(),
});

const Position = () => {
  const dispatch = useDispatch();
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );

  const { register, handleSubmit, watch, errors } = useForm<FormInputs>({
    schema,
  });

  useEffect(() => {
    const subscription = watch((data) => {
      dispatch(updateData(data));
    });
    return () => subscription.unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch]);

  const positionList = Object.values(PositionEnum).filter(
    (value) => typeof value === 'string'
  ) as string[];

  const onSubmit = (data: FormInputs) => {
    dispatch(updateData(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className='mb-4 text-sm leading-[18px]'>Position</p>
      <div
        className={` grid h-[55px] w-[82px] grid-cols-3 grid-rows-3 gap-[5px]`}
      >
        {positionList.map((position, index) => (
          <label key={index} className='h-full cursor-pointer rounded-lg'>
            <input
              type='radio'
              value={position}
              className='peer hidden'
              defaultChecked={data.get('Position') === position}
              {...register('Position')}
            />
            <span
              className={`${
                data.get('Position') === position && 'border-none bg-primary'
              } grid h-full place-items-center border border-[#DDDDDD] ${
                position === 'LeftTop' && 'rounded-tl-md'
              } ${position === 'LeftBottom' && 'rounded-bl-md'} ${
                position === 'RightTop' && 'rounded-tr-md'
              } ${position === 'RightBottom' && 'rounded-br-md'}`}
            ></span>
          </label>
        ))}
      </div>
    </form>
  );
};
export default Position;
