import {useEffect} from 'react';

type UseKeyDownProps = {
  key: string;
  cb: () => void;
};

const useKeyDown = ({key, cb}: UseKeyDownProps) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === key) {
      cb();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return;
};

export default useKeyDown;
