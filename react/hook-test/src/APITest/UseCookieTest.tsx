import useCookie from './../hooks/useCookie';
export default function UseCookieTest() {
  const [value, updateCookie, deleteCookie] = useCookie('yuan');
  return (
    <div>
      <p>cookie的值：{value}</p>
      <button onClick={() => updateCookie('666')}>改值</button>
      <br />
      <button onClick={() => deleteCookie()}>删除 cookie</button>
    </div>
  )
}