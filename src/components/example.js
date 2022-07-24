import '../cssComponents/Example.css'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { usePosts } from '../context/postContext'
import { useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
export default function Example() {
  const navigate = useNavigate()
  const{createPosts, getPost, updatePost} = usePosts()
  const params = useParams()
  const[post, setPost] = useState({
    title:'',
    description:'',
    image: null
  })
  useEffect (()=>{
    (async()=>{
      if(params.id){
        const post = await getPost(params.id)
        setPost(post)
       }
    })();
  },);
    return (
      <>
        <Formik className='example'
        initialValues={post}
        validationSchema={Yup.object({
          title: Yup.string().required("el titulo es requerido"),
          description: Yup.string().required("la descripcion es requerida")
        })}
        onSubmit={async (values, actions) => {
          console.log(values)
          if(params.id){
            await updatePost(params.id, values)
          }
          else{
            await createPosts(values)
          }

          navigate('/portafolio')
        }}
        enableReinitialize
        >
          {({handleSubmit, setFieldValue})=>(
          <div className="md:grid md:grid-cols-3 md:gap-6 b-">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <Form onSubmit={handleSubmit}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                          Titulo
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <Field
                            type="text"
                            name="title"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="Por ejemplo este es mi primer post"
                          />
                        </div>
                        <ErrorMessage component="p" className='text-red-400 text-sm' name='title' />
                      </div>
                    </div>
  
                    <div>
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Descripción
                      </label>
                      <div className="mt-1">
                        <Field
                        component="textarea"
                        name="description"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Por ejemplo esta es una descripcion de mi primer post"
                        />
                      </div>
                      <ErrorMessage component="p" className='text-red-400 text-sm' name='description' />
                      <p className="mt-2 text-sm text-gray-500">
                        Porfavor ingresa una descripcion para tu Post
                      </p>
                    </div> 
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Subir foto o archivo</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Carga un archivo</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e) => setFieldValue('image',(e.target.files[0]))}/>
                            </label>
                            <p className="pl-1">o solo arrastra y suelta</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </Form>
              </div>
          </div> 
          )}          
        </Formik>
      </>
    )
  }