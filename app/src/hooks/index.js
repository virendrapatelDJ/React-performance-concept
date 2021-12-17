import { useCallback } from 'react';
import { debounce } from 'lodash/function';
import { throttle } from 'lodash/function';

const useDebounce = (callback , time) => {
  return useCallback(debounce(callback, time), []);
};
const useThrottle = (callback , time) => {
  return useCallback(throttle(callback, time), []);
};

export { useDebounce, useThrottle };