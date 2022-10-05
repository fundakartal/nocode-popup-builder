type SvgIconProps = {
  fill?: string;
};

const CheckedRadioIcon = ({ fill }: SvgIconProps) => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='18' height='18' rx='4' fill={fill} />
    <path
      d='M7.31211 11.3626L4.94961 9.00015L4.16211 9.78765L7.31211 12.9376L14.0621 6.18765L13.2746 5.40015L7.31211 11.3626Z'
      fill='white'
    />
  </svg>
);

export default CheckedRadioIcon;
