type SvgIconProps = {
  fill?: string;
};

const FlagIcon = ({ fill }: SvgIconProps) => (
  <svg
    width='38'
    height='43'
    viewBox='0 0 38 43'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M18.9 5L19.9 10H33V25H24.6L23.6 20H5.5V5H18.9ZM23 0H0.5V42.5H5.5V25H19.5L20.5 30H38V5H24L23 0Z'
      fill={fill}
    />
  </svg>
);

export default FlagIcon;
