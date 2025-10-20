import React, { useEffect, useState } from "react";
import Entrysection from "./components/Entrysection";
import { useForm } from "./hooks/useForm";
import { useFetch } from "./hooks/useFetch";
import Form from "./components/Form";
import { usePost } from "./hooks/usePost";
import { BASE_URL } from "./js/config";

const App = () => {
  const { form, handleChange, setForm } = useForm();
  const { data, refetch } = useFetch(BASE_URL);
  const { message, postData } = usePost(BASE_URL);
  const [log, setLog] = useState("")
  const [isLog, setisLog] = useState(false)

  useEffect(()=>{
    const intervalId = setInterval(() => {
      if(isLog){
        setisLog(!isLog);
      }
    }, 2000);
    return () => clearInterval(intervalId);
  },[isLog])

  useEffect(() => {
    if (message) {
      setLog(message);
      setisLog(true);
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form, refetch);
    setForm({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-full h-screen flex gap-5 flex-col justify-center items-center">
      <h1 className="text-5xl font-semibold">Basic Form</h1>
      <Form
        handleChange={handleChange}
        form={form}
        handleSubmit={handleSubmit}
      />
      { isLog ? log : "" }
      <Entrysection refetch={refetch} data={data} />
    </div>
  );
};

export default App;
