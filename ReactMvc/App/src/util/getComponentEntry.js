export function getComponentEntry(selector) {
    const mountEl = document.querySelector(selector)
    const propsEl = mountEl.querySelector("[data-props]")
    let props = {}

    console.log(propsEl)
    if (propsEl) {
        try {
            props = JSON.parse(propsEl.textContent)
        } catch (e) {
            console.log("Component::NavMenu: ", e)
        }
    }

    return [mountEl, props]
}