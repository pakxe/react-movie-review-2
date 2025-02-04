import {useEffect} from 'react';

const usePreventScroll = (isOn: boolean) => {
  useEffect(() => {
    if (!isOn) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOn]);
};

export default usePreventScroll;
