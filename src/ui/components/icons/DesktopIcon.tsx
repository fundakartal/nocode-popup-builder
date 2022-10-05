type SvgIconProps = {
  fill?: string;
};

const DesktopIcon = ({ fill }: SvgIconProps) => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M15 14.5C15.825 14.5 16.5 13.825 16.5 13V3.5C16.5 2.675 15.825 2 15 2H3C2.175 2 1.5 2.675 1.5 3.5V13C1.5 13.825 2.175 14.5 3 14.5H0V16H18V14.5H15ZM3 3.5H15V13H3V3.5Z'
      fill={fill}
    />
  </svg>
);

export default DesktopIcon;
