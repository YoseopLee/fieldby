import React from "react";
import { Link } from "react-router-dom";

const PostSkeleton = () => {
    return (
            <div className="skeleton-post-wrapper">
                <Link to="">
                    <div className="skeleton-post-image-box"></div>
                </Link>
            </div>
    )
}

export default PostSkeleton;