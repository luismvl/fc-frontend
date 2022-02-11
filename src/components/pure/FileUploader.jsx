import React, { useRef } from 'react';

import { BiCloudUpload } from 'react-icons/bi';
import Button from './Button';

// accept="image/png,image/jpg,image/jpeg"
const FileUploader = ({ onFileSelect, accept, text }) => {
  const inputRef = useRef(null);
  const handleInput = (e) => {
    onFileSelect(e.target.files[0]);
  }
  return (
    <div>
      <input className="input-group__input" ref={inputRef} type="file" onChange={handleInput} accept={accept} />
      <Button
        text={text}
        type="button"
        icon={<BiCloudUpload size="20px" />}
        variant="grey"
        onClick={() => inputRef.current && inputRef.current.click()}
      />
    </div>
  );
};

export default FileUploader;
