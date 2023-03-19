import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import classes from './Card.module.css'

const fileTypes = ["PDF", "PNG", "GIF"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} className = {classes.box}/>
  );
}

export default DragDrop;