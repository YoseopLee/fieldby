import React from "react";

const StoreSkeleton = () => {

    const StoreSkeletonContainer = new Array(4).fill(1).map((_, i ) => {
        return (
            <div className="skeleton-store-item-each" key={i}>
                <div className="skeleton-store-item-image" />
                <div className="skeleton-store-item-contents">
                    <div className="skeleton-store-item-brand"/>
                    <div className="skeleton-store-item-name"/>
                    <div className="skeleton-store-item-price"/>
                </div>    
            </div>
            )
        })

    return (
        <>
            <div className="skeleton-store-item-wrapper">
                {StoreSkeletonContainer}
            </div>
        </>
    )
}

export default StoreSkeleton;