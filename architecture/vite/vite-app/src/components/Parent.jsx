import { defineComponent } from "vue";
import HelloWorld from "./HelloWorld.vue";

export default defineComponent({
  render() {
    return (
      <HelloWorld>
        {{
          default: (props) => <p>默认插槽的内容: {props.data}</p>,
          test: (props) => <p>test插槽的内容: {props}</p>,
        }}
      </HelloWorld>
    );
  },
});
