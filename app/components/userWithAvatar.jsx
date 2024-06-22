import React from 'react';
import Avatar from '@/app/components/avatar.jsx';

const UserWithAvatar = ({ userName, src, size = 100 }) => {
  return (
    <div className="flex items-center space-x-4">
      <Avatar src={src} size={size} />
      <h1 className="text-lg font-semibold">{userName}</h1>
    </div>
  );
};

export default UserWithAvatar;
