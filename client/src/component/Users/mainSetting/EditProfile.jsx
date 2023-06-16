import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import privateClient from "../../../configAPIClient/privateClient";
import ReactQuill from "react-quill";
import webLinkIcon from '../../../assets/iconUserDetail/webLinkIcon.png'
import twitterIcon from '../../../assets/iconUserDetail/twitterIcon.png'
import githubIcon from '../../../assets/iconUserDetail/githubIcon.png'
import Alert from './../../ModalAlert/Alert';
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../../../redux/authSlice";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};


export default function EditProfile({fetchUserDetail}) {
  const { id } = useParams();
  const [userData, setUserData] = useState();
  const [avatar, setAvatar] = useState();
  const [formValue, setFormValue] = useState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const distparth = useDispatch()
  const userRedux = useSelector(state=>state.auth.login.currentUser?.avatar)

  useEffect(() => {
    fetchDetailUser();
  }, []);
  
  const fetchDetailUser = async () => {
    try {
      const result = await privateClient.get(`/user/${id}`);
      setUserData(result.data);
      setAvatar(result.data.avatar)
      setFormValue(result.data.ProfileUsers[0])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    if(success==='Update success'){
      fetchUserDetail()
      distparth(refresh({id}))
    }
   
  },[success])

  const handleChange = (e)=>{
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
console.log(error);
  const handleSubmit =async(e)=>{
    e.preventDefault()
    const formData= new FormData()
    console.log(formValue);
    formData.append('avatar', avatar)
    formData.append('formdata', JSON.stringify(formValue))
    try {
      const result = await privateClient.post(`/user/updateProfile/${id}`,formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        setSuccess(result?.data)
    } catch (error) {
      setError(error?.response?.data)
      console.log(error.response?.data);
    }
  }

  const showHideAlert =()=>{
    setSuccess(false)
  }

  return (
    <div className="text-black dark:text-[hsl(210,4%,95%)]">
    {success==='Update success'&&<Alert title={'Update successful'} showHideAlert={showHideAlert}/>}
      <div className="pb-4 mb-6 border-b border-gray-300 text-3xl ">
        Edit your profile
      </div>
      <form onSubmit={handleSubmit}>
        <div className="text-xl mb-2">Public information</div>
        <div className="dark:bg-[hsl(0,0%,22.5%)] border rounded-lg dark:border-[hsl(210,4%,26%)]">
          <div className="p-6 ">
            <div className="">
              <div className="mb-2 font-semibold">Profile image</div> 
              <div className="w-44 h-44 rounded overflow-hidden relative">
                <img className="object-cover" src={userRedux!=='https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg'?`http://localhost:8080/${userRedux}`:'https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg'} />
                <label htmlFor="avarta" className="absolute flex justify-center items-center bottom-0 w-full text-center bg-[hsl(210,7%,78.5%)] text-black font-normal py-1 cursor-pointer text-xs">
                  Change picture
                </label>
                <input onChange={(e)=>setAvatar(e.target.files[0])}  id="avarta" name="avarta" type="file" className="hidden" />
              </div>
            </div>
            <div className="mt-4 flex flex-col">
              <label htmlFor="displayname" className="mb-2 font-semibold cursor-pointer">
                Display name
              </label>
              <input
              defaultValue={userData?.displayName}
              name="displayname"
              onChange={(e)=>setFormValue(prev=>({...prev,displayname:e.target.value}))}
                id="displayname"
                autoComplete="off"
                className="dark:bg-[hsl(0,0%,17.5%)] w-1/2 text-[13px] outline-none border border-[hsl(210,8%,75%)] focus:border-blue-500 rounded p-2 focus:shadow-lg focus:shadow-blue-500/50"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label htmlFor="Location" className="mb-2 font-semibold cursor-pointer">
                Location
              </label>
              <input
              defaultValue={formValue?.location}
              name="location"
              onChange={handleChange}
                id="Location"
                autoComplete="off"
                className="dark:bg-[hsl(0,0%,17.5%)] w-1/2 text-[13px] outline-none border border-[hsl(210,8%,75%)] focus:border-blue-500 rounded p-2 focus:shadow-lg focus:shadow-blue-500/50"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label htmlFor="Title" className="mb-2 font-semibold cursor-pointer">
                Title
              </label>
              <input
              defaultValue={formValue?.title}
              name="title"
              onChange={handleChange}
                id="Title"
                autoComplete="off"
                className="dark:bg-[hsl(0,0%,17.5%)] w-1/2 text-[13px] outline-none border border-[hsl(210,8%,75%)] focus:border-blue-500 rounded p-2 focus:shadow-lg focus:shadow-blue-500/50"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label htmlFor="AboutMe" className="mb-2 font-semibold cursor-pointer">
                About me
              </label>
              <div>
                <ReactQuill
                
                  className="break-all dark:bg-[hsl(0,0%,17.5%)] dark:text-white"
                  theme="snow"
                  value={formValue?.aboutme}
                  onChange={(e)=>setFormValue(prev=>({...prev,aboutme:e}))}
                  modules={modules}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-xl mb-2 mt-10">Links</div>
        <div className="dark:bg-[hsl(0,0%,22.5%)] border rounded-lg dark:border-[hsl(210,4%,26%)]">
          <div className="p-6 grid grid-cols-3 gap-4">
            <div >
              <label className="text-sm font-semibold mb-2 block" htmlFor="WebsiteLink">Website link</label>
              <div className="relative"><input name="websiteLink" onChange={handleChange} id="WebsiteLink" defaultValue={formValue?.websiteLink}
                autoComplete="off"
                className="dark:bg-[hsl(0,0%,17.5%)] w-full pl-8 text-[13px] outline-none border border-[hsl(210,8%,75%)] focus:border-blue-500 rounded p-x py-[6px] focus:shadow-lg focus:shadow-blue-500/50" />
                <div className="absolute top-1/2 -translate-y-1/2 left-2">
                  <img src={webLinkIcon} />
                </div>
              </div>
            </div>
            <div >
              <label className="text-sm font-semibold mb-2 block" htmlFor="Twitter">Twitter link or username</label>
              <div className="relative"><input name="twitterLink" onChange={handleChange} id="Twitter" defaultValue={formValue?.twitterLink}
                autoComplete="off"
                className="dark:bg-[hsl(0,0%,17.5%)] w-full pl-8 text-[13px] outline-none border border-[hsl(210,8%,75%)] focus:border-blue-500 rounded p-x py-[6px] focus:shadow-lg focus:shadow-blue-500/50" />
                <div className="absolute top-1/2 -translate-y-1/2 left-2">
                  <img src={twitterIcon} />
                </div>
              </div>
            </div>
            <div >
              <label className="text-sm font-semibold mb-2 block" htmlFor="GitHub">GitHub link or username</label>
              <div className="relative"><input name="githubLink" onChange={handleChange} id="GitHub" defaultValue={formValue?.githubLink}
                autoComplete="off"
                className="dark:bg-[hsl(0,0%,17.5%)] w-full pl-8 text-[13px] outline-none border border-[hsl(210,8%,75%)] focus:border-blue-500 rounded p-x py-[6px] focus:shadow-lg focus:shadow-blue-500/50" />
                <div className="absolute top-1/2 -translate-y-1/2 left-2">
                  <img src={githubIcon} />
                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div className="mt-10">
          {error==="no change value"&&<div className="text-red-600 mb-4">Oops! There was a problem updating your profile:
<br/>temporary error updating your profile -- please try again!</div>}

            <button
            type="submit"
              to={"/questions/ask"}
              className="bg-[hsl(206,100%,52%)] rounded border text-xs shadow-xl py-2 px-3 text-white hover:bg-[hsl(206,100%,40%)] dark:border-none"
            >
              Save profile
            </button>
            <button onClick={()=>window.location.reload()} className="text-blue-500 dark:hover:bg-[hsl(206,40%,23%)] hover:bg-[hsl(206,100%,97%)] rounded py-2 px-3 ml-4">Cancel</button>
        </div>
      </form>
    </div>
  );
}
