import { useEffect, type RefObject } from 'react';

function useClickOutside(
  htmlElement: RefObject<HTMLElement | null>,
  onClick: () => void,
  isActive: boolean,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        htmlElement.current &&
        !htmlElement.current.contains(event.target as Node)
      ) {
        onClick();
      }
    }

    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isActive, htmlElement, onClick]);
}

export default useClickOutside;
