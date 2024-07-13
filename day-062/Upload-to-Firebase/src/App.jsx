import { useState, useEffect } from "react";
import "./App.css";
import { storage } from "./FireBaseConfigs";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "images/");

  const uploadImage = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      alert("Image Uploaded");
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      const fetchURLs = response.items.map((item) =>
        getDownloadURL(item).then((url) => url)
      );
      Promise.all(fetchURLs).then((urls) => {
        setImageList(urls);
      });
    });
  }, []);

  return (
    <div className='App h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 text-center'>
        <h1 className='text-2xl font-bold mb-4'>Upload Your Images</h1>
        <input 
          type="file"
          onChange={(event) => setImageUpload(event.target.files[0])}
          className='block mx-auto mb-4 p-2 border border-gray-300 rounded-md'
        />
        <button
          onClick={uploadImage}
          className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'
        >
          Upload Image
        </button>
      </div>
      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12'>
        {imageList.map((url, index) => (
          <div key={index} className='bg-white p-4 rounded-lg shadow-lg'>
            <img className='w-full h-64 object-cover rounded-lg' src={url} alt="uploaded" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
