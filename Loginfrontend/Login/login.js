async function login(e) {
  try {
    e.preventDefault();

    const loginDetails = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(loginDetails);

    const response = await axios.post(
      "http://localhost:3000/user/login",
      loginDetails
    );

    if (response.status === 201) {
      alert(response.data.message);
    } else {
      throw new Error("failed to login");
    }
  } catch (err) {
    document.body.innerHTML += `<div style="color:red;">${err} <div>`;
  }
}
