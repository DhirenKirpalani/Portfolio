import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold
      });
        const { setActiveSection, timeOfLastClicked } = useActiveSectionContext();
    
        useEffect(() => {
            if(inView && Date.now() - timeOfLastClicked > 1000) {
                setActiveSection(sectionName)
            }
        }, [inView, setActiveSection, timeOfLastClicked, sectionName])

        return {
            ref
        }
}