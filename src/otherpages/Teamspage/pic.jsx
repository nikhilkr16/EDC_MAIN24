import React, { useState } from 'react';

function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4 border border-gray-300 rounded-lg"
      />
      {image && (
        <img
          src={image}
          alt="Preview"
          className="w-64 h-64 object-cover rounded-lg border border-gray-300"
        />
      )}
    </div>
  );
}

export default ImageUpload;
