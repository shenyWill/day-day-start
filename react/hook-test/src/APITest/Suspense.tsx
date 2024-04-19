import React, { Suspense } from 'react';
const LazySuspenseChild = React.lazy(() => import('./SuspenseChild'));

export default function SuspenseTest () {
  return <Suspense fallback={'loading'}>
    <div>
      <LazySuspenseChild />
    </div>
  </Suspense>
}