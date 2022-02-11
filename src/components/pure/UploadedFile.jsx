import React from 'react';

import { BiImage, BiX } from 'react-icons/bi';
import formatFloat from '../../utils/formatFloat';

const ONE_MB = 1000000;

const UploadedFile = ({ file, removeFile }) => {
  return (
    <div className="modal__uploadedFile">
      <BiImage size={20} />
      <span className="modal__fileName">
        {file.name}
      </span>
      <span className="modal__fileSize">
        {file.size > ONE_MB ? `${formatFloat(file.size / 1024 / 1024)} MB` : `${formatFloat(file.size / 1024)} KB`}
      </span>
      <BiX size={20} className="modal__deleteFileIcon" onClick={removeFile} />
    </div>
  );
};

export default UploadedFile;
