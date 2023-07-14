/**
 * @file useColorMode.ts
 * @author your name
 * @brief file description
 * @version 0.1
 * @date 2023-6-5
 * @copyright Copyright (c) 2023
 * Licensed under the XYZ license.
 */

import { useEffect } from 'react';
import useLocalStorage from '~/hooks/useLocalStorage';


const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light');

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    colorMode === 'dark'
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;