import { useDispatch } from 'react-redux';
import { setShow } from '../../../app/slices/selectedModalSlice';
import { CloseIcon, XIcon } from '../icons';
import styles from './Modal.module.scss';

export interface ModalProps {
  fill?: string;
  children?: React.ReactNode;
  className?: string;
  Home?: boolean;
  style?: {};
  handleModal?: () => void;
}

const Modal = ({ fill, children, className, Home, style }: ModalProps) => {
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch(setShow(false));
  };
  return (
    <div style={style} className={`${className}`}>
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
