import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedData = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = { name, email };
    console.log(updateUser);

    fetch(`http://localhost:5000/users/${loadedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("updateName");
        }
      });
  };
  return (
    <div>
      <h2>update name: {loadedData.name}</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedData.name} id="" />
        <br />
        <input
          type="email"
          defaultValue={loadedData.email}
          name="email"
          id=""
        />
        <br />
        <input type="submit" value="Update Value" />
      </form>
    </div>
  );
};

export default Update;
