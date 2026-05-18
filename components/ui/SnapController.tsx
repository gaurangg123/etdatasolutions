'use client';

import { useEffect } from 'react';

/**
 * Toggles `data-snap="true"` on <html> while this component is mounted.
 * Place it inside any page that should enable proximity scroll-snapping.
 */
export default function SnapController() {
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-snap', 'true');
    return () => { html.removeAttribute('data-snap'); };
  }, []);
  return null;
}
