import { useState } from "react";

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('mario');

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
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                > </textarea>
                <lable>Blog Author:</lable>
                <select name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mariyo</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
      );
}
 
export default Create;