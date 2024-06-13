'use client'

import React, {useState} from 'react'
import { Logic } from './logic';

interface LogicProps {
  onSubmit: (text: string, key: number, mode: "encrypt" | "decrypt") => void;
}
const CipherForm: React.FC<LogicProps> = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [key, setKey] = useState(0);
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() && !isNaN(key) && key >= 0) {
      onSubmit(text.trim(), key, mode);
    } else {
      alert("Please enter valid text and a non-negative key");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label htmlFor="text" className="text-gray-700 font-medium">
            Text:
          </label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border rounded-md p-2"
          />

          <label htmlFor="key" className="text-gray-700 font-medium">
            Key (Shift Amount):
          </label>
          <input
            type="number"
            id="key"
            value={key}
            onChange={(e) => setKey(parseInt(e.target.value))}
            className="border rounded-md p-2"
          />

          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                id="encrypt"
                name="mode"
                value="encrypt"
                checked={mode === "encrypt"}
                onChange={(e) => setMode(e.target.value as "encrypt")}
                className="mr-2"
              />
              Encrypt
            </label>
            <label>
              <input
                type="radio"
                id="decrypt"
                name="mode"
                value="decrypt"
                checked={mode === "decrypt"}
                onChange={(e) => setMode(e.target.value as "decrypt")}
                className="mr-2"
              />
              Decrypt
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CipherForm
