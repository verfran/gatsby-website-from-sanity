/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/components/layout.css"

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        `This site new updates. ` +
        `Do you want to reload?`
    )
    if (answer === true) {
        window.location.reload()
    }
}