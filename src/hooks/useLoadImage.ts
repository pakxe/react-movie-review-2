import {useEffect, useState} from 'react';

const useLoadImage = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setIsLoaded(true);
    };

    img.onerror = () => {
      setIsLoaded(false);
      setHasError(true);
    };
  }, [src]);

  return {
    isLoaded,
    hasError,
  };
};

export default useLoadImage;
