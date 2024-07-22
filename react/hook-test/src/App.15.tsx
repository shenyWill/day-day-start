import { useInteractions, useFloating, useHover } from '@floating-ui/react';
import { useState } from 'react';
import Popover from './Popover';

// function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { refs, floatingStyles, context } = useFloating({
//     open: isOpen,
//     onOpenChange: setIsOpen,
//   });

//   const hover = useHover(context);

//   const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

//   return(
//     <>
//       <button ref={refs.setReference} {...getReferenceProps()}>hello</button>
//       {
//         isOpen && <div
//         ref={refs.setFloating}
//         style={floatingStyles}
//         {...getFloatingProps()}
//         >
//           赵子龙
//         </div>
//       }
//     </>
//   )
// }

function App() {
  const popoverContent = <div>
    赵子龙
    <button onClick={() => alert(1)}>点击</button>
  </div>
  return <Popover content={popoverContent} placement='bottom' trigger='click' style={{margin: '200px'}}>
    <button>点我</button>
  </Popover>
}

export default App;