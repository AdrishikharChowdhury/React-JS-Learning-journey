import React from "react";

const Form = ({ handleChange, form, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded-2xl border-2 flex flex-col gap-6 text-lg justify-center w-2/5"
    >
      <label className="flex flex-col gap-2 justify-center font-bold">
        <p>Name:</p>
        <input
          onChange={handleChange}
          value={form.name}
          className="border-2 p-2 rounded-lg outline-0 font-light"
          type="text"
          name="name"
        />
      </label>
      <label className="flex flex-col gap-2 justify-center font-bold">
        <p>Email:</p>
        <input
          onChange={handleChange}
          value={form.email}
          className="border-2 p-2 rounded-lg outline-0 font-light"
          type="email"
          name="email"
        />
      </label>
      <label className="flex flex-col gap-2 justify-center font-bold">
        <p>Password:</p>
        <input
          onChange={handleChange}
          value={form.password}
          className="border-2 p-2 rounded-lg outline-0 font-light"
          type="password"
          name="password"
        />
      </label>
      <button
        className="px-6 py-3 rounded-xl bg-black cursor-pointer text-white font-bold w-max self-center duration-100 active:scale-90"
        type="submit"
      >
        Add +
      </button>
    </form>
  );
};

export default Form;
