import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import Container from '../../components/container';
import { ConversionIcon, ModernIcon, TickIcon } from '../../components/icons';

const InfoBox = () => {
  const isSelected = useSelector((state: RootState) => state.selectedModal.isSelected);

  return (
    <Container>
      <div className={`font-Poppins mb-[90px] w-full ${!isSelected && 'mt-[90px]'}`}>
        <h1 className='mb-[50px] text-4xl font-semibold text-center tracking-tight'>Conversion & UX ready popups & modals</h1>
        <div className='flex flex-wrap items-center justify-between gap-8'>
          <div className='select-none flex h-[267px] max-w-[378px] grow flex-col items-center justify-center rounded-xl bg-[#F5F5F5]'>
            <div className='text-primary'>
              <TickIcon fill='currentColor' />
            </div>
            <h2 className='mt-5 mb-3 text-[18px] font-semibold leading-6'>
              Pixel Perfect
            </h2>
            <p className='max-w-[237px] text-center text-[14px] leading-5'>
              Helps you calculate your email marketing roi to measure success.
            </p>
          </div>
          <div className='select-none flex h-[267px] max-w-[378px] grow flex-col items-center justify-center rounded-xl bg-[#F5F5F5]'>
            <div className='text-primary'>
              <ConversionIcon fill='currentColor' />
            </div>
            <h2 className='mt-5 mb-3 text-[18px] font-semibold leading-6'>
              Conversion Ready
            </h2>
            <p className='max-w-[177px] text-center text-[14px] leading-5'>
              Empowers your emails by generating afree code for a CTA in your
              subject line.
            </p>
          </div>
          <div className='select-none flex h-[267px] max-w-[378px] grow flex-col items-center justify-center rounded-xl bg-[#F5F5F5]'>
            <div className='text-primary'>
              <ModernIcon fill='currentColor' />
            </div>
            <h2 className='mt-5 mb-3 text-[18px] font-semibold leading-6'>
              Modern & Useful
            </h2>
            <p className='max-w-[203px] text-center text-[14px] leading-5'>
              Enables you to estimate the total profit of your investment on a
              popup service.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default InfoBox;
