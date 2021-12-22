import { useCallback } from 'react';
import { debounce } from 'lodash/function';
import { throttle } from 'lodash/function';
import { useIsMobile } from './useIsMobile';

const useDebounce = (callback , time) => useCallback(debounce(callback, time), [time]);

const useThrottle = (callback , time) =>  useCallback(throttle(callback, time), [time]);



export { useDebounce, useThrottle , useIsMobile };