import React from "react"
import { Link } from "react-router-dom"

const CollectionSkeleton = () => {
    return (
        <Link to="/">
            <div className="skeleton-collection-each" />
        </Link>
    )
}

export default CollectionSkeleton