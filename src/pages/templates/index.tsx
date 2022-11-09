import Container from '../../ui/components/container';
import Header from '../../ui/home/templates/Header';
import ModalItem from '../../ui/home/templates/ModalItem';
import PaginationButtons from '../../ui/home/templates/PaginationButtons';

const SelectModal = () => {
  return (
    <Container>
      <div className='mt-[90px] w-full font-Poppins '>
        <Header />
        <div
          className={`grid grid-cols-1 place-items-center gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
        >
          <ModalItem />
        </div>
        <PaginationButtons />
      </div>
    </Container>
  );
};
export default SelectModal;
