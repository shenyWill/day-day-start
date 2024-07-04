import './App.css';

export default function App() {
  return (
    <div>
      {/* 基础写法 */}
      <div className='text-base p-1 border border-black border-solid'>guang</div>
      {/* hover的时候 */}
      <div className='text-[14px] hover:text-[30px] hover:border-black hover:border bg-blue-500'>123</div>
      {/* 响应式的时候 */}
      <div className='bg-red-500 md:bg-blue-300 h-16'></div>
      {/* 使用apply聚合样式 */}
      <div className='btn-primary'>12</div>
      {/* 使用自己开发的插件 */}
      <div className='yuan'>3456</div>
    </div>
  );
};
