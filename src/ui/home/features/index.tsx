import Container from '../../components/container';
import {
  AwsIcon,
  NoCodeIcon,
  TargetIcon,
  TargetingIcon,
} from '../../components/icons';

const Features = () => {
  return (
    <Container>
      <div className={`w-full font-Poppins`}>
        <h1 className='mb-[70px] text-center text-4xl font-semibold leading-[48px] tracking-tight'>
          Build great popups without code
        </h1>
        <div className='grid grid-cols-1 justify-items-center gap-y-8 md:grid-cols-2 lg:grid-cols-4 '>
          <div className='flex w-[300px] grow flex-col items-center '>
            <div className='grid h-[120px] w-[120px] place-items-center rounded-full bg-primary hover:bg-primary-dark '>
              <TargetIcon />
            </div>
            <h2 className='mt-8 mb-3 text-[18px] font-semibold leading-6'>
              Targeting Options
            </h2>
            <p className='text-[14px] leading-5'>
              Target +26 trigger to your visitors
            </p>
          </div>
          <div className='flex w-[300px] grow flex-col items-center'>
            <div className='grid h-[120px] w-[120px] place-items-center rounded-full bg-primary hover:bg-primary-dark '>
              <NoCodeIcon />
            </div>
            <h2 className='mt-8 mb-3 text-[18px] font-semibold leading-6'>
              No-Code
            </h2>
            <p className='max-w-[174px] text-center text-[14px] leading-5'>
              No code required while you’re creating a popup
            </p>
          </div>
          <div className='flex w-[300px] grow flex-col items-center'>
            <div className='grid h-[120px] w-[120px] place-items-center rounded-full bg-primary hover:bg-primary-dark '>
              <TargetingIcon />
            </div>
            <h2 className='mt-8 mb-3 text-[18px] font-semibold leading-6'>
              Targeting Options
            </h2>
            <p className='max-w-[213px] text-center text-[14px] leading-5'>
              Integrated with your marketing and CRM platforms
            </p>
          </div>
          <div className='flex w-[300px] grow flex-col items-center'>
            <div className='grid h-[120px] w-[120px] place-items-center rounded-full bg-primary hover:bg-primary-dark '>
              <AwsIcon />
            </div>
            <h2 className='mt-8 mb-3 text-[18px] font-semibold leading-6'>
              Targeting Options
            </h2>
            <p className='max-w-[200px] text-center text-[14px] leading-5'>
              Don’t worry about speed and Amazon AWS resources
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Features;
