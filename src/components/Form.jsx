import React from "react";
import { useState } from "react";

const Form = () => {

  return (
    <>
    <div className="inputbox">
      <lable>title</lable>
      <input type="text" value="title" />
      <lable>content</lable>
      <input type="text" value="content" />
      <button>Add</button>
    </div>
    </>
  );
};

export default Form;