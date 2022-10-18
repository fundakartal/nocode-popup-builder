import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setShow } from '../../../app/slices/selectedModalSlice';
import { RootState } from '../../../app/store';
import useScrollPercentage from '../../../hooks/useScrollPercentage';
import exitIntent from 'exit-intent';

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
  const scroll: number = useScrollPercentage();
  const { show, isCompleted } = useSelector(
    (state: RootState) => state.selectedModal
  );

  useEffect(() => {
    if (!show && !isCompleted) {
      if (SetAfterXSeconds) {
        setTimeout(() => {
          dispatch(setShow(true));
        }, AfterXSeconds);
      }
      if (SetAfterScroll) {
        if (scroll >= AfterScroll) {
          dispatch(setShow(true));
        }
      }
      if (ExitIntent) {
        exitIntent({
          threshold: 50,
          eventThrottle: 100,
          onExitIntent: () => {
            dispatch(setShow(true));
          },
        });
      }
    }
  }, []);

  let position;
  switch (Position) {
    case 'Top':
      position = 'items-start';
      break;
    case 'Right':
      position = 'justify-end';
      break;
    case 'Bottom':
      position = 'items-end';
      break;
    case 'Left':
      position = 'justify-start';
      break;
    case 'LeftTop':
      position = 'items-start justify-start';
      break;
    case 'RightTop':
      position = 'items-start justify-end';
      break;
    case 'RightBottom':
      position = 'items-end justify-end';
      break;
    case 'LeftBottom':
      position = 'items-end justify-start';
      break;
    default:
      position = '';
  }

  let visibility;
  if (SetDevice) {
    switch (DeviceType) {
      case 'Mobile':
        visibility = 'grid md:hidden';
        break;
      case 'Desktop':
        visibility = 'hidden md:grid';
        break;
      default:
        visibility = 'grid';
        break;
    }
  } else {
    visibility = 'grid';
  }

  return (
    <div
      className={`h-full w-full place-items-center bg-black bg-opacity-5 ${
        show ? visibility : 'hidden'
      } ${position}`}
    >
      {children}
    </div>
  );
};
export default ModalContainer;
