import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

function DropBox() {
  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const formData = new FormData();
      formData.append("profile-picture", acceptedFiles[0]);
      return await axios({
        method: "post",
        url: "/profile/profile-picture",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    }
    console.log("Please add one file at a time!");
  }, []);
  //Only allows one but will return empty array if multiple files dropped
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
    </div>
  );
}

export default DropBox;
