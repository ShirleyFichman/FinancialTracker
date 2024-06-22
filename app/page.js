import React from 'react';
import UserWithAvatar from '@/app/components/UserWithAvatar.jsx';

export default function Home() {
  return (
    <div className="p-4">
        <UserWithAvatar 
        userName="User Name" 
        src="https://thispersondoesnotexist.com/" 
        size={40} 
      />
    </div>
  );
}
