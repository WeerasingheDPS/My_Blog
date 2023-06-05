import { useState } from "react";

const Create = () => {
    const [title,setTitle]=useState('');

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form action="">
                <lable>Blog Title:</lable>
                <input type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  />
                <lable>Blog Body:</lable>
                <textarea required> </textarea>
                <lable>Blog Author:</lable>
                <select name="author">
                    <option value="mario">mariyo</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
            </form>
        </div>
      );
}
 
export default Create;