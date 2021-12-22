import { useEffect, useState } from 'react';
import { useDebounce } from '.';

const useIsMobile = (debounceTime=0) => {
  const MOBILE_WIDTH = 745;
  const [isMobile, setIsMobile] = useState(true);
  
  const debouncedHandler = useDebounce(() => {
    setIsMobile(window.innerWidth <= MOBILE_WIDTH);
  }, debounceTime );

  useEffect(() => {
    window?.addEventListener('resize', debouncedHandler);
    return () => {
      window?.removeEventListener('resize' , debouncedHandler);
    };
  }, []);

  return isMobile;
};

export { useIsMobile };
