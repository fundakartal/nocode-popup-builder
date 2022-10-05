import CreateCode from './CreateCode';

const GetCode = () => {
  return (
    <div className='font-Poppins'>
      <div className='mb-8 flex items-center font-Poppins text-lg font-semibold leading-9 tracking-tight'>
        <span className='mr-4 grid h-9 w-9 place-items-center rounded-full bg-[#EAEAEA] '>
          5
        </span>
        Settings and Code
      </div>
      <CreateCode />
    </div>
  );
};
export default GetCode;
