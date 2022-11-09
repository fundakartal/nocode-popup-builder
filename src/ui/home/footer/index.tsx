import Container from '../../components/container';
import { PopupsmartIcon } from '../../components/icons';

const Footer = () => {
  return (
    <Container>
      <div className='my-12 flex w-full flex-col items-center justify-center gap-4 font-Poppins md:my-20'>
        <PopupsmartIcon />
        Powered by Popupsmart
      </div>
    </Container>
  );
};
export default Footer;