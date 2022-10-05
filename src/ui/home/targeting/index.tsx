import VisitorDevice from './VisitorDevice';
import AfterXSeconds from './AfterXSeconds';
import AfterScroll from './AfterScroll';
import TrafficSource from './TrafficSource';
import BrowserLanguage from './BrowserLanguage';
import ExitIntent from './ExitIntent';

const Targeting = () => {
  return (
    <div className='font-Inter'>
      <div className='flex items-center font-Poppins text-lg font-semibold leading-9 tracking-tight'>
        <span className='mr-4 grid h-9 w-9 place-items-center rounded-full bg-[#EAEAEA] '>
          4
        </span>
        Targeting Rules
      </div>
      <div className='mt-8 flex flex-col gap-8'>
        <VisitorDevice />
        <AfterXSeconds />
        <AfterScroll />
        <TrafficSource />
        <BrowserLanguage />
        <ExitIntent />
      </div>
    </div>
  );
};
export default Targeting;
