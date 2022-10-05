import { useState } from 'react';
import Container from '../../components/container';
import { MinusIcon, PlusIcon } from '../../components/icons';
import { QuestionList } from './QuestionList';

const Questions = () => {
  const [selected, setSelected] = useState(null);

  const toggleAnswer = (i) => {
    selected === i ? setSelected(null) : setSelected(i);
  };

  return (
    <Container>
      <div className='mb-[90px] w-full font-Poppins'>
        <h1 className='mb-12 text-center text-4xl font-semibold leading-[48px] tracking-tight'>
          Frequently Asked Questions
        </h1>

        {QuestionList.map((item, i) => (
          <div key={i} className={`${selected === i && 'bg-[#F5F5F5]'} last:border-b`}>
            <div
              className={`flex w-full cursor-pointer items-center justify-between border-t p-6 ${
                selected === i && 'border-t-0'
              } border-[#EAEAEA] `}
              onClick={() => toggleAnswer(i)}
            >
              <div
                className={`${
                  selected === i && 'text-black'
                } text-[18px] font-semibold leading-6 text-gray-dark`}
              >
                {item.question}
              </div>
              <span
                className={`${
                  selected === i ? 'text-primary' : 'text-[#999999]'
                }`}
              >
                {selected === i ? (
                  <MinusIcon fill='currentColor' />
                ) : (
                  <PlusIcon fill='currentColor' />
                )}
              </span>
            </div>
            <div
              className={`${
                selected === i ? 'flex' : 'hidden'
              } px-6 pb-6 leading-[26px]`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
export default Questions;
