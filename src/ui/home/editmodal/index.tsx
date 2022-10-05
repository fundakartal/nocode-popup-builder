import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import Container from '../../components/container';
import Appearance from '../appearance';
import Content from '../contentedit';
import GetCode from '../getcode';
import Targeting from '../targeting';
import ErrorBoundary from './ErrorBoundary';


const EditModal = () => {
  const { id, isSelected } = useSelector(
    (state: RootState) => state.selectedModal
  );
  const loadComponent = (id: number) => {
    const Component = React.lazy(
      () => import(`../../components/modals/modal${id}/index.tsx`)
    );
    return Component;
  };
  const Modal = loadComponent(id);

  return (
    <>
      {isSelected && (
        <Container className='relative'>
          <div className='my-[90px] flex w-full justify-between font-Inter'>
            <div className='flex w-[378px] flex-col gap-[90px]'>
              <Appearance />
              <Content />
              <Targeting />
              <GetCode />
            </div>
            <div className='sticky top-0 flex h-screen w-[740px] items-center justify-center border drop-shadow-5xl'>
              <Suspense fallback={<div>Loading...</div>}>
                <ErrorBoundary>
                  <Modal />
                </ErrorBoundary>
              </Suspense>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
export default EditModal;
