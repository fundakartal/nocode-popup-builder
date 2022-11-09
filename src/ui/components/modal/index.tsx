import { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  setIsCompleted,
  setShow,
} from '../../../app/slices/selectedModalSlice';
import { CloseIcon, XIcon } from '../icons';
import { RootState } from '../../../app/store';
import useMeasure from '../../../hooks/useMeasure';
import styles from './Modal.module.scss';

export interface ModalProps {
  fill?: string;
  children?: React.ReactNode;
  className?: string;
  Home?: boolean;
  style?: CSSProperties;
  handleModal?: () => void;
}

const Modal = ({ fill, children, className, Home, style }: ModalProps) => {
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );
  const Size: string = data.get('Size');
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch(setShow(false));
    dispatch(setIsCompleted(true));
  };
  const { ref, size } = useMeasure();
  let modalSize;
  switch (Size) {
    case 'Small':
      modalSize = {
        marginLeft: `calc(calc(${size.width}px*0.1/2)*-1)`,
        marginRight: `calc(calc(${size.width}px*0.1/2)*-1)`,
        marginTop: `calc(calc(${size.height}px*0.1/2)*-1)`,
        marginBottom: `calc(calc(${size.height}px*0.1/2)*-1)`,
        transform: `scale(0.9)`,
      };
      break;
    case 'Large':
      modalSize = {
        marginLeft: `calc(${size.width}px*0.1/2)`,
        marginRight: `calc(${size.width}px*0.1/2)`,
        marginTop: `calc(${size.height}px*0.1/2)`,
        marginBottom: `calc(${size.height}px*0.1/2)`,
        transform: `scale(1.1)`,
      };
      break;
    default:
      modalSize = '';
      break;
  }

  return (
    <div
      ref={ref}
      style={{ ...style, ...(modalSize as {}) }}
      className={`relative flex flex-col items-center rounded-xl ${
        !Home && 'overflow-hidden'
      } ${className}`}
    >
      {children}
      <div className={styles.closeButton}>
        <button onClick={handleModal} className={styles.closeButtonIcon}>
          {Home ? <XIcon /> : <CloseIcon fill={fill} />}
        </button>
      </div>
    </div>
  );
};

export default Modal;
