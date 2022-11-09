import React, { Suspense } from 'react';
import Container from '../../ui/components/container';
import Appearance from '../../ui/home/appearance';
import Content from '../../ui/home/contentedit';
import GetCode from '../../ui/home/getcode';
import Targeting from '../../ui/home/targeting';
import ErrorBoundary from '../../ui/home/templates/ErrorBoundary';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { EyeIconLight, EyeSlashIcon } from '../../ui/components/icons';
import { setShow } from '../../app/slices/selectedModalSlice';
import { useDispatch } from 'react-redux';

const EditModal = () => {
  const { ...state } = useSelector((state: RootState) => state.selectedModal);
  const data = new Map(Object.entries(state.data));
  const dispatch = useDispatch();
  const show = state.show;
  const id = data.get('id');
  const loadComponent = (id: number) => {
    const Component = React.lazy(
      () => import(`../../ui/components/modals/modal${id}/index.tsx`)
    );
    return Component;
  };
  const Modal = loadComponent(id);
  return (
    <>
      <Container className='relative '>
        <div className='my-[90px] flex w-full justify-between font-Inter lg:mt-40'>
          <div className='flex w-[378px] flex-col gap-[90px]'>
            <Appearance />
            <Content />
            <Targeting />
            <GetCode />
          </div>
          <div className='sticky top-0 flex h-screen w-[740px] items-center justify-center border drop-shadow-5xl'>
            <button
              className='absolute -top-6 right-0 text-gray-dark'
              onClick={() => dispatch(setShow(!show))}
            >
              {show ? <EyeSlashIcon /> : <EyeIconLight />}
            </button>
            <Suspense fallback={<div>Loading...</div>}>
              <ErrorBoundary>
                <Modal />
              </ErrorBoundary>
            </Suspense>
          </div>
        </div>
      </Container>
    </>
  );
};
export default EditModal;
