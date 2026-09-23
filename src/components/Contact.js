const Contact = () => {
  return (
    <div className="contact">
      <h1 className="font-bold text-2xl text-center p-4 m-4">
        Contact Us Page
      </h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-black p-2 m-2 cursor-pointer rounded-lg text-white bg-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
