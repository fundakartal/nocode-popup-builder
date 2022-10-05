/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import Button from '../../components/button';
import Container from '../../components/container';
import { CheckSmIcon, DollarIcon, FlashIcon } from '../../components/icons';
import Modal from '../../components/modal';
import styles from './Hero.module.scss';

type TextInfo = {
  text: string;
};

const TextInfo = ({ text }: TextInfo) => (
  <span className='flex items-center gap-[10px] text-[13px] leading-4'>
    <CheckSmIcon />
    {text}
  </span>
);

const Hero = () => {
  const [email, setEmail] = React.useState('');

  const [message, setMessage] = React.useState<string | null>(null);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!email) {
      setMessage('Cannot be empty');
      setTimeout(() => {
        setMessage(null);
      }, 1500);
      return;
    }
    setEmail('');
    setMessage(null);
  };
  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Simple modal card creator</h1>
          <h2 className={styles.heroSubtitle}>
            A utility-first CSS framework packed with classeslike flex, pt-4,
            text-center and rotate-90 that can becomposed to build any design,
            directly in your markup.
          </h2>
          <Button className={styles.heroButton}>Try it out now</Button>

          <div className={styles.heroTextInfo}>
            <TextInfo text='Free and paid plans' />
            <TextInfo text='Setup in minutes ' />
            <TextInfo text='No credit card required*' />
          </div>
          <div className={styles.rectangle}></div>
          <Modal Home className={styles.heroModal}>
            <div className={styles.heroModalContainer}>
              <div className={styles.heroModalContent}>
                <Image
                  src='/images/Home/logo.svg'
                  alt=''
                  width={106}
                  height={38}
                  layout='fixed'
                />
                <h1 className={styles.heroModalTitle}>Join the club</h1>
                <h2 className={styles.heroModalSubtitle}>
                  Subscribe and Get an Extra <span>25% Off</span> on your first
                  purchase.
                </h2>
                <form className={styles.heroForm} onSubmit={handleSubmit}>
                  <div className={styles.heroFormContainer}>
                    <input
                      value={email}
                      onChange={({ target }) => setEmail(target.value)}
                      type='text'
                      placeholder='Email address'
                      className={styles.heroFormInput}
                    />
                    <label className='text-sm leading-7 text-red-600'>
                      {message}
                    </label>
                  </div>
                  <Button className={styles.heroFormButton} type='submit'>
                    Subscribe
                  </Button>
                  <p className={styles.heroFormInfo}>
                    By signing up, you agree to Privacy Policy and Terms of Use.
                  </p>
                </form>
              </div>
              <div className={styles.heroModalImage}>
                <img src='/images/Home/img.svg' alt='' />
                <p className={styles.heroModalStickyText1}>
                  Mediterranean Sneakers®
                </p>
              </div>
              <div className={styles.heroModalStickyText2}>
                <FlashIcon />
                <span className={styles.heroModalStickyTextSpan}>
                  Grow email list
                </span>
              </div>
              <div className={styles.heroModalStickyText3}>
                <DollarIcon />
                <span className={styles.heroModalStickyTextSpan}>
                  Increase sales conversion
                </span>
              </div>
            </div>
          </Modal>
        </div>
      </Container>
    </div>
  );
};
export default Hero;
