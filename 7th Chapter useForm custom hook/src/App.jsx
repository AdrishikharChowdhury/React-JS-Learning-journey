import React from "react";
import Entrysection from "./components/Entrysection";
import { useForm } from "./hooks/useForm";
import { useFetch } from "./hooks/useFetch";
import Form from "./components/Form";

const App = () => {

  const { form,handleChange,setForm } = useForm();
  const { data, refetch } = useFetch("http://localhost:5000/forms");

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const url="http://localhost:5000/forms";
    try {
      const response = await fetch(url,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(form)
      });handleSubmit

      if(!response.ok) throw new Error('Network Issue');

      await response.json();
      refetch();
    } catch (error) {
      console.log(error);
    }
    
    console.log(form);
    setForm({
    "name":"",
    "email":"",
    "password":""
  })
}
  
  return (
    <div className="w-full h-screen flex gap-10 flex-col justify-center items-center">
      <h1 className="text-5xl font-semibold">Basic Form</h1>
      <Form handleChange={handleChange} form={form} handleSubmit={(e)=>{ handleSubmit(e) }} />
      <Entrysection data={data} />
    </div>
  );
};

export default App;
