// import { useHover } from "react-use";
import useHover from "./../hooks/useHover";

export default function UseHoverTest() {
  const element = (hovered: boolean) => <div>
    Hover me ! {hovered && 'hoverd'}
  </div>;
  const [hoverEle, hovered] = useHover(element);
  return <div>
    {hoverEle}
    <div>{hovered ? 'Hovered' : ''}</div>
  </div>
}