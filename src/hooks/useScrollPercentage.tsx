import React from 'react';

const useScrollPercentage = () => {
  const [progress, setProgress] = React.useState<number>(0);

  function getScrollPercentage() {
    const windowHeight: number = window.innerHeight;

    const documentFullHeight: number = document.body.clientHeight;

    const scrolled: number = window.scrollY;

    const percentageScrolled: number = Math.floor(
      (scrolled / (documentFullHeight - windowHeight)) * 100
    );

    setProgress(percentageScrolled);
  }

  React.useEffect(() => {
    getScrollPercentage();
    window.addEventListener('scroll', getScrollPercentage);

    return () => {
      window.removeEventListener('scroll', getScrollPercentage);
    };
  }, []);

  return progress;
};

export default useScrollPercentage;
