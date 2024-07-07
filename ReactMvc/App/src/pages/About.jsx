import { createRoot } from "react-dom/client"
import { getComponentEntry } from "../util/getComponentEntry"

function About(props) {
    return (
        <>
            <h2 id="title">{props.Title}</h2>
            <h3>{props.Message}</h3>

            <p>Use this area to provide additional information.</p>
        </>
    )
}

const [mountEl, props] = getComponentEntry('[data-component="About"]')
const root = createRoot(mountEl)

console.log("About::Props", props)
root.render(<About {...props} />)