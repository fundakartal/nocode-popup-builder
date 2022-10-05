/* eslint-disable @next/next/no-img-element */
import Button from '../../components/button';
import { ModalItems } from './ModalInitial';
import type { RootState } from '../../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { addData, selectModal } from '../../../app/slices/selectedModalSlice';

const ModalItem = () => {
  const dispatch = useDispatch();
  const selectedModal = useSelector(
    (state: RootState) => state.selectedModal.id
  );
  const { currentPage, modalPerPage } = useSelector(
    (state: RootState) => state.pagination
  );
  const indexOfLastPost = currentPage * modalPerPage;
  const indexOfFirstPost = indexOfLastPost - modalPerPage;
  const currentModals = ModalItems.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      {currentModals.map((modal, index) => (
        <Button
          onClick={() => {
            dispatch(selectModal(modal.data.id));
            dispatch(addData(modal.data));
          }}
          className={`group relative flex h-[200px] w-[270px] items-center justify-center rounded-xl bg-[#EAEAEA] ${
            selectedModal === modal.data.id && 'border-primary'
          }`}
          key={index}
        >
          <img src={modal.path} alt='' />
          <div
            className={`absolute h-full w-full rounded-xl bg-primary bg-opacity-0  transition duration-300 group-hover:bg-opacity-60 ${
              selectedModal === modal.data.id && 'bg-opacity-60'
            }`}
          ></div>
          <p
            className={`absolute z-50 h-[50px] w-[165px] items-center justify-center rounded-xl bg-white font-Inter font-semibold tracking-tight text-primary transition-all duration-300 group-hover:flex ${
              selectedModal === modal.data.id ? 'flex' : 'hidden'
            }`}
          >
            {selectedModal === modal.data.id
              ? 'Selected template'
              : 'Select template'}
          </p>
        </Button>
      ))}
    </>
  );
};
export default ModalItem;
