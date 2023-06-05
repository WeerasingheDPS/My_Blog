const Create = () => {
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form action="">
                <lable>Blog Title:</lable>
                <input type="text"  required/>
                <lable>Blog Body:</lable>
                <textarea required> </textarea>
                <lable>Blog Author:</lable>
                <select name="author">
                    <option value="mario">mariyo</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
      );
}
 
export default Create;