import Color from './Color';
import Logo from './Logo';
import Position from './Position';
import Size from './Size';

const Appearance = () => {
  return (
    <div className='flex flex-col gap-8 font-Inter'>
      <div className='flex flex-wrap items-center font-Poppins text-lg font-semibold leading-9 tracking-tight'>
        <span className='mr-4 grid h-9 w-9 place-items-center rounded-full bg-[#EAEAEA] '>
          2
        </span>
        Appearance&nbsp;
        <span className='font-normal'>(Size, colors, logo)</span>
      </div>
      <Size />
      <Position />
      <Color />
      <Logo />
    </div>
  );
};
export default Appearance;
