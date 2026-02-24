import React from 'react'

function BlogSkeleton() {
  return (
    <div className="animate-pulse">

      {/* Image */}
      <div className="w-full h-64 bg-gray-300 rounded-xl"></div>

      {/* Title */}
      <div className="h-8 bg-gray-300 rounded mt-6 w-3/4"></div>

      {/* Text lines */}
      <div className="space-y-3 mt-4">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>

    </div>
  )
}

export default BlogSkeleton