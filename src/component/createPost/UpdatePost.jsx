import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useContext, useState } from 'react'
import { AuthContext } from '../../helpers/AuthContext'
import { useLocation, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const validationSchema = yup.object().shape({
    title: yup.string().required('Title is required.'),
    description: yup.string().required('Description is required.')
})

const UpdatePost = () => {
    const { id } = useParams();
    const location = useLocation();
    const [showimage, setShowImage] = useState("");
    const [newImage, setImage] = useState([]);
    const { authState } = useContext(AuthContext)

    const handleImageUpload = (event) => {
        setShowImage(event.target.files[0]);
        setImage([...newImage, event.target.files[0]]);
    };

    const postFormData = async (value) => {
        const formData = new FormData();
        formData.append("title", value.title);
        formData.append("description", value.description);
        formData.append("username", `${authState.username}`);
        for (let i = 0; i < newImage.length; i++) {
            formData.append("image", newImage[i]);
        }
        console.log(newImage);
        try {
            await axios.put(`http://localhost:3001/posts/updatePost/${id}`, formData).then((res) => {
                if (res.status === 200) {
                    toast.success("Post updated successfully")
                }
            }
            )

            console.trace("Post updated successfully")
            setTimeout(() => {
                window.location = "/"
            }, 1000)
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = (data) => {
        console.log('Create Post line:54', data);
        postFormData(data);
    }

    const initialValues = {
        title: location.state.title,
        description: location.state.description,
        image: [],
        username: `${authState.username}`
    }
    return (
        <div className="grid justify-center">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => {
                    return (
                        <Form onSubmit={handleSubmit} encType="multipart/form-data"
                            className="col-start-2 col-span-7">
                            <div className=' h-[600px] bg-white px-16 py-8 rounded-md shadow-md mt-20'>
                                <div className='mb-5 flex h-[100px]'>
                                    <Field                       //Input field
                                        type='file'
                                        name='image'
                                        accept=".png,.jpg,.jpeg,.gif"
                                        multiple
                                        onChange={(e) => handleImageUpload(e)}
                                    />
                                    <img
                                        src={
                                            showimage
                                                ? URL.createObjectURL(showimage)
                                                : ""
                                        }
                                        width={200}
                                        alt=""
                                        className=""
                                    />
                                </div>
                                <div className='p-1'>
                                    <ErrorMessage
                                        name='image'
                                        className='text-red-600 col-span-4'
                                        component='p' />
                                </div>
                                <div >
                                    <Field name="title"
                                        placeholder="New post title here..."
                                        autoComplete="off"
                                        className="text-6xl w-[620px] font-extrabold overflow-hidden focus:outline-none"
                                    />
                                    <ErrorMessage
                                        name='title'
                                        className='text-red-600 col-span-4'
                                        component='p' />
                                </div>
                                <div className="w-[650px] mt-4 bg-white">
                                    <Field as="textarea" name="description"
                                        className="w-[620px] h-[200px] focus:outline-none font-mono text-xl"
                                        placeholder="Write your content here..." />
                                </div>
                                <ErrorMessage
                                    name='description'
                                    className='text-red-600 col-span-4'
                                    component='p' />
                            </div>
                            <ToastContainer />
                            <div className='mt-4'>
                                <button type='submit' className='bg-blue-500 text-white shadow-md hover:shadow-slate-400 text-xl font-bold py-2 px-4 rounded-md'>Publish</button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default UpdatePost
