import React from 'react'

const CipherForm = () => {
  return (
    <>
      <div>
        <h1>Caesar Cipher</h1>
        <div>
          <label>Plaintext: </label>
          <input
            type="text"
          />
        </div>
        <div>
          <label>Key: </label>
          <input
            type="number"
            
          />
        </div>
        <button >Encrypt</button>
        <div>
          <label>Ciphertext: </label>
          <input type="text"  />
        </div>
        <button >Decrypt</button>
        <div>
          <label>Decrypted Text: </label>
          <input type="text" />
        </div>
      </div>
    </>
  );
}

export default CipherForm
