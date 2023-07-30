import React, {
    useState,
    Suspense,
    useEffect,
    useRef,
  } from 'react';
  // import ErrorBoundary from './ErrorBoundary';
  // import Compiler from './Compiler';
  import FullPageLoader from '~/components/common/FullPageLoader';
import { Spinner } from '../common/Spinner';
  // import CompilerError from './CompilerError';
  // import { Project } from '../pages/types';
  // import { useEnvironmentState } from './Environment';
  
   interface PreviewProps {
    title: string;
    // code: Project;
    children: React.ReactNode;
    onLoad?: () => void;
  } 
  
  export default function Preview(
    { title, children, onLoad }: PreviewProps,
  ): JSX.Element {
    const visible = useRef(false);
    const [visibleOnce, setVisibleOnce] = useState(false);
    const container = useRef<HTMLDivElement | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setVisibleOnce(visible.current);
      setLoading(true);
    }, []);
  
    useEffect(() => {
      const { current } = container;
      if (!current) {
        return undefined;
      }
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.target === current) {
            visible.current = entry.isIntersecting;
            if (entry.isIntersecting) {
              setVisibleOnce(true);
              setLoading(false);
            }
          }
        });
      });
  
      observer.observe(current);
  
      return () => {
        observer.unobserve(current);
        observer.disconnect();
      };
    }, []);
  
    return (
      <div
        ref={container}
        className={`flex flex-col h-full w-full bg-white text-black dark:bg-black dark:text-white transition-opacity duration-200 ${loading ? 'opacity-0' : 'opacity-100'}`}
      >
        {visibleOnce ? <><Suspense fallback={<FullPageLoader />}>{children}</Suspense></> : <><Spinner /></>}
      </div>
    );
  }