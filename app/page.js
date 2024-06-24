"use client"

import React from 'react';
import UserWithAvatar from '@/app/components/UserWithAvatar.jsx';
import PlusMenu from '@/app/components/PlusMenu.jsx';

export default function Home() {
  return (
    <div className="p-4 flex items-center justify-end">
      <PlusMenu />
      <UserWithAvatar 
        userName="User Name" 
        src="https://thispersondoesnotexist.com/" 
        size={40} 
      />
    </div>
  );
}
