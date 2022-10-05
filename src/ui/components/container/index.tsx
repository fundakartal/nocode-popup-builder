import styles from './Container.module.scss';

interface ContainerProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`${className || ''} ${styles.container}`}>{children}</div>
  );
};
export default Container;
