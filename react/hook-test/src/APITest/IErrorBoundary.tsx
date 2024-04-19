import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
function Bbb() {
  useEffect(() => {
    throw new Error('xxx');
  }, []);
  return <div>bbb</div>
}
export default function App() {
  return <ErrorBoundary fallbackRender={ ({ error }) => { return <div>
    <p>出错了： {error.message}</p>
  </div> } }>
    <Bbb></Bbb>
  </ErrorBoundary>
}