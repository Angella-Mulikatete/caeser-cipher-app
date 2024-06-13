'use client';

import React from 'react'
import { Logic } from './logic';
import CipherForm from './cipherForm';

const CipherWrapperComponent = () => {
      const handleSubmit = (
        text: string,
        key: number,
        mode: "encrypt" | "decrypt"
      ) => {
        const result = Logic(text, key, mode);
        alert(`Result: ${result}`);
      };
  return (
    <div>
      <CipherForm onSubmit={handleSubmit} />
    </div>
  );
}

export default CipherWrapperComponent
