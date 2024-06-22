import React from 'react';

const Avatar = ({ src, size = 50 }) => {
  const inlineStyle = {
    width: size,
    height: size,
  };

  return (
    <div className="inline-block rounded-full overflow-hidden" style={inlineStyle}>
      <img src={src} alt="Avatar" className="object-cover w-full h-full" />
    </div>
  );
};

export default Avatar;