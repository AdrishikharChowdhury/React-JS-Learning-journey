import React from 'react'

const Form = ({ handleChange,form,handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="p-4 rounded-2xl border-2 flex flex-col gap-6 text-lg justify-center w-2/5">
        <label className="flex flex-col gap-2 justify-center font-bold">
          <p>Name:</p>
          <input onChange={handleChange} value={form.name} className="border-2 p-2 rounded-lg outline-0" type="text" name="name" />
        </label>
        <label className="flex flex-col gap-2 justify-center font-bold">
          <p>Email:</p>
          <input onChange={handleChange} value={form.email} className="border-2 p-2 rounded-lg outline-0" type="email" name="email" />
        </label>
        <label className="flex flex-col gap-2 justify-center font-bold">
          <p>Password:</p>
          <input onChange={handleChange} value={form.password} className="border-2 p-2 rounded-lg outline-0" type="password" name="password" />
        </label>
        <button className="p-4 rounded-xl bg-black cursor-pointer text-white" type="submit">Add</button>
      </form>
  )
}

export default Form