import { makeView } from "lunox/dist/entry-client-react.js";
import "uno.css";
import "./app/resources/style/reset.css";
const View = makeView(import.meta.glob("/app/resources/view/**/*.(jsx|tsx)"));
export default View;
