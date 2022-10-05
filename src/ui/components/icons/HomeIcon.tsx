type SvgIconProps = {
  fill?: string;
};

const HomeIcon = ({ fill }: SvgIconProps) => (
  <svg
    width='24'
    height='28'
    viewBox='0 0 24 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 4.25L21 11V24.5H3V11L12 4.25ZM12 0.5L0 9.5V27.5H24V9.5L12 0.5Z'
      fill={fill}
    />
  </svg>
);

export default HomeIcon;
