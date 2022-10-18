import React from 'react';

interface ContainerSize {
  width: number;
  height: number;
}

type UseMeasureArgs = () => {
  ref: React.RefObject<HTMLDivElement>;
  size: ContainerSize;
};

const initSize: ContainerSize = { width: 0, height: 0 };

const useMeasure: UseMeasureArgs = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [size, setSize] = React.useState<ContainerSize>(initSize);

  React.useLayoutEffect(() => {
    if (ref.current) {
      setSize({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      });
    }
  }, [ref]);

  return { ref, size };
};

export default useMeasure;
