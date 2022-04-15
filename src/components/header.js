import * as React from "react"
import PropTypes from "prop-types"

function Header({ siteTitle }) {
  return (
    <nav className="flex flex-wrap items-center justify-between p-6 mb-6 bg-gradient-to-r from-[#46657C] to-[#687EA8]">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <span className="text-2xl font-semibold tracking-tight">
          {siteTitle}
        </span>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
