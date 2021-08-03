import React, { useState, useEffect } from 'react';
import ImageSearch from './components/ImageSearch';
import ImageCard from './components/ImageCard';
import axios from 'axios';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
        );
        setLoading(false);
        setImages(res.data.hits);
      } catch (error) {
        setLoading(true);
        console.log(error);
      }
    };
    fetchImages();
  }, [term]);

  if (isLoading) {
    return (
      <>
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      </>
    );
  } else {
    return (
      <>
        {' '}
        <ImageSearch searchText={(text) => setTerm(text)} />
        {!isLoading && images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No Images Found
          </h1>
        )}
        <ImageCard images={images} />
      </>
    );
  }
};

export default App;
