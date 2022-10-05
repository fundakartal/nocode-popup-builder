type SvgIconProps = {
  fill?: string;
};

const FrameIcon = ({ fill }: SvgIconProps) => (
  <svg
    width='350'
    height='48'
    viewBox='0 0 350 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4.22897 2L22.6035 24.3868L4.31265 46H345.687L327.396 24.3868L345.771 2H4.22897ZM0 0H350L330 24.3672L350 48H0L20 24.3672L0 0Z'
      fill={fill}
    />
  </svg>
);

export default FrameIcon;
