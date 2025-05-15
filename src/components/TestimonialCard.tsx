import React from 'react';

interface TestimonialCardProps {
  content: string;
  author: string;
  handle: string;
  authorImage?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  handle,
  authorImage,
  className = "",
}) => {
  return (
    <div className={`bg-black text-white p-4 rounded-lg flex flex-col justify-between h-full ${className}`}>
      <div>
        <p className="text-sm mb-4">{content}</p>
      </div>
      <div className="flex items-center mt-2">
        {authorImage && (
          <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
            <img src={authorImage} alt={author} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <p className="font-bold text-sm">{author}</p>
          <p className="text-gray-400 text-xs">@{handle}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
