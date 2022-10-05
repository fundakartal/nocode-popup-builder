import { CloseIcon, XIcon } from '../icons';
import styles from './Modal.module.scss';

export interface ModalProps {
  fill?: string;
  children?: React.ReactNode;
  className?: string;
  Home?: boolean;
}

const Modal = ({ fill, children, className, Home }: ModalProps) => {
  return (
    <div className={`${className}`}>
      {children}
      <div className={styles.closeButton}>
        <button className={styles.closeButtonIcon}>
          {Home ? <XIcon /> : <CloseIcon fill={fill} />}
        </button>
      </div>
    </div>
  );
};

export default Modal;
