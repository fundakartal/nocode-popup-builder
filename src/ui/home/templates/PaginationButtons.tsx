/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentPage,
  setModalPerPage,
} from '../../../app/slices/paginationSlice';
import { RootState } from '../../../app/store';
import useWindowDimensions from '../../../hooks/useWindowDimensions ';
import Button from '../../components/button';
import { ChevronLeftIcon, ChevronRightIcon } from '../../components/icons';

const PaginationButtons = () => {
  const dimensions = useWindowDimensions();
  const dispatch = useDispatch();
  useEffect(() => {
    if (dimensions.width) {
      const ModalPerPage = dimensions.width >= 1024 ? 12 : 4;
      dispatch(setModalPerPage(ModalPerPage));
    }
  }, [dimensions.width]);

  const { currentPage, modalPerPage } = useSelector(
    (state: RootState) => state.pagination
  );

  const buttons = [];
  for (let i = 1; i <= 36 / modalPerPage; i++) {
    buttons.push(i);
  }
  return (
    <div className='flex'>
      <div className='mt-8 hidden h-12 w-[132px] items-center justify-center rounded-xl bg-[#F5F5F5] p-[3px] font-Inter lg:flex'>
        {buttons.map((button, i) => (
          <Button
            onClick={() => dispatch(setCurrentPage(button))}
            key={i}
            className={`grid h-[42px] w-[42px] place-items-center rounded-xl text-sm leading-[18px] text-gray-dark ${
              currentPage === button && 'bg-white font-semibold text-black'
            }`}
          >
            {button}
          </Button>
        ))}
      </div>

      <div className='grid w-full place-items-center text-gray-dark'>
        <div className='mt-8 flex h-12 max-w-max items-center justify-center gap-x-[3px] rounded-xl bg-[#F5F5F5] p-[3px] font-Inter lg:hidden'>
          <button
            disabled={currentPage === 1}
            onClick={() =>
              dispatch(setCurrentPage(currentPage === 1 ? 1 : currentPage - 1))
            }
            className='flex h-[42px] items-center justify-center rounded-l-xl bg-white px-4 text-sm font-semibold leading-[18px]  disabled:opacity-50'
          >
            <ChevronLeftIcon />
            Prev
          </button>
          <button
            onClick={() =>
              dispatch(
                setCurrentPage(
                  currentPage === buttons.length ? currentPage : currentPage + 1
                )
              )
            }
            disabled={currentPage === buttons.length}
            className='flex h-[42px] flex-row-reverse items-center justify-center rounded-r-xl  bg-white px-4 text-sm font-semibold leading-[18px]  disabled:opacity-50'
          >
            <ChevronRightIcon />
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default PaginationButtons;
