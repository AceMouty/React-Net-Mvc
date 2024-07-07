import { createRoot } from "react-dom/client"
import { getComponentEntry } from "../util/getComponentEntry"

const navLinks = [
    {
        text: "Home",
        path: "/Home/Index",
    },
    {
        text: "About",
        path: "/Home/About",
    },
    {
        text: "About",
        path: "/Home/About"
    },
    {
        text: "React",
        path: "/Home/React"
    }
]
export function NavMenu(props) {
    return (
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark">
            <div class="container">
                <a href="/Home/Index" className="navbar-brand">
                    {props.ApplicationName ?? "React Net"}
                </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" title="Toggle navigation" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-sm-inline-flex justify-content-between">
                    <ul class="navbar-nav flex-grow-1">
                        {navLinks.map(link => {
                            return (
                                <li>
                                    <a href={link.path}>{link.text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>)
}

const [mountEl, props] = getComponentEntry('[data-component="NavMenu"]')
const root = createRoot(mountEl)
root.render(<NavMenu {...props} />)