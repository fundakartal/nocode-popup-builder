import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setShow } from '../../../app/slices/selectedModalSlice';
import { RootState } from '../../../app/store';
import useScrollPercentage from '../../../hooks/useScrollPercentage';

interface ModalContainerProps {
  children?: JSX.Element | JSX.Element[];
}

const ModalContainer = ({ children }: ModalContainerProps) => {
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );
  const dispatch = useDispatch();
  const Position: string = data.get('Position');
  const SetAfterXSeconds: boolean = data.get('SetAfterXSeconds');
  const AfterXSeconds: number = data.get('AfterXSeconds') * 1000;
  const SetAfterScroll: boolean = data.get('SetAfterScroll');
  const AfterScroll: number = data.get('AfterScroll');
  const SetDevice: boolean = data.get('SetDevice');
  const DeviceType: string = data.get('DeviceType');
  const ExitIntent: boolean = data.get('ExitIntent');
  const { show } = useSelector((state: RootState) => state.selectedModal);
  const scroll: number = useScrollPercentage();

  useEffect(() => {
    if (SetAfterXSeconds) {
      setTimeout(() => {
        dispatch(setShow(true));
      }, AfterXSeconds);
    }
  }, [SetAfterXSeconds, AfterXSeconds]);

  useEffect(() => {
    if (SetAfterScroll) {
      if (scroll >= AfterScroll) {
        dispatch(setShow(true));
      }
    }
  }, [SetAfterScroll, AfterScroll, scroll]);

  return (
    <div
      className={`${
        show ? 'grid' : 'hidden'
      } bg-black bg-opacity-5 w-full h-full
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
      {children}
    </div>
  );
};
export default ModalContainer;
