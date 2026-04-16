import React from 'react';

const BlogSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="flex flex-col gap-4 animate-pulse">
          <div className="h-[250px] w-full bg-gray-300 rounded-lg" />
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="size-[26px] bg-gray-300 rounded-full" />
              <div className="h-4 w-20 bg-gray-300 rounded" />
              <div className="size-[4px] rounded-full bg-gray-300" />
              <div className="h-4 w-24 bg-gray-300 rounded" />
            </div>
            <div className="h-5 w-3/4 bg-gray-300 rounded" />
            <div className="flex gap-3">
              <div className="h-7 w-20 bg-gray-300 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSkeleton;
