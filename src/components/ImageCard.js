import React from 'react';

const ImageCard = ({ images }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => {
          const { id, webformatURL, user, views, downloads, likes } = image;
          const tags = image.tags.split(',');
          console.log(image);
          return (
            <div
              key={id}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img src={webformatURL} alt="" className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                  Photo by {user}
                </div>
                <ul>
                  <li>
                    <strong>Views: </strong>
                    {views}
                  </li>
                  <li>
                    <strong>Downloads: </strong>
                    {downloads}
                  </li>
                  <li>
                    <strong>Likes: </strong>
                    {likes}
                  </li>
                </ul>
              </div>
              <div className="px-6 py-4">
                {tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    >
                      #{tag}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCard;
