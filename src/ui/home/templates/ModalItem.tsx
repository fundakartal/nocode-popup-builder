/* eslint-disable @next/next/no-img-element */
import { ModalItems } from './ModalInitial';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { RootState } from '../../../app/store';
import { addData } from '../../../app/slices/selectedModalSlice';

const ModalItem = () => {
  const dispatch = useDispatch();
  const { isSelected } = useSelector((state: RootState) => state.selectedModal);
  const { currentPage, modalPerPage } = useSelector(
    (state: RootState) => state.pagination
  );
  const indexOfLastPost = currentPage * modalPerPage;
  const indexOfFirstPost = indexOfLastPost - modalPerPage;
  const currentModals = ModalItems.slice(indexOfFirstPost, indexOfLastPost);

  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );
  const id = data.get('id');
  return (
    <>
      {currentModals.map((modal, i) => (
        <Link href={`templates/${modal.data.id}`} key={i}>
          <div
            onClick={() => dispatch(addData(modal.data))}
            className={`group relative flex h-[200px] w-[270px] cursor-pointer items-center justify-center rounded-xl bg-[#EAEAEA] ${
              id === modal.data.id && isSelected && 'border-primary'
            }`}
          >
            <img src={modal.path} alt='' />
            <div
              className={`absolute h-full w-full rounded-xl bg-primary bg-opacity-0  transition duration-300 group-hover:bg-opacity-60 ${
                id === modal.data.id && isSelected && 'bg-opacity-60'
              }`}
            ></div>
            <p
              className={`absolute z-50 h-[50px] w-[165px] items-center justify-center rounded-xl bg-white font-Inter font-semibold tracking-tight text-primary transition-all duration-300 group-hover:flex ${
                id === modal.data.id && isSelected ? 'flex' : 'hidden'
              }`}
            >
              {id === modal.data.id && isSelected
                ? 'Selected template'
                : 'Select template'}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};
export default ModalItem;
