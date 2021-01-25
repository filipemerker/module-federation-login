<script>
  import users from '../data/users.json'

  export let userNotFound = false
  export let username = 'pam'
  export let password = '123'
  export let user = {}

  const event = new CustomEvent("login", {
    detail: {
      user: {
        json: () => user
      }
    },

    bubbles: true,
    cancelable: true,
    composed: true
  })

  const handleSubmit = async ({ target }) => {
    user = users.find(user => (
      username === user.username && password === user.password
    ))

    if (!user) {
      userNotFound = true
    } else {
      userNotFound = false
      target.dispatchEvent(event)
    }
  }
</script>

<main>
  <div class="wrapper">
    <div class="container">
      <h1>Welcome</h1>
      
      <form class="form" on:submit|preventDefault={handleSubmit}>
        <input bind:value={username} class="{userNotFound && 'user-not-found'}" type="text" placeholder="Username">
        <input bind:value={password} class="{userNotFound && 'user-not-found'}" type="password" placeholder="Password">
        <button type="submit" id="login-button">Login</button>
      </form>
    </div>
    
    <ul class="bg-bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</main>

<style>
.wrapper {
  background: #f26b26;
  background: -webkit-gradient(linear, left top, right bottom, from(#f26b26), to(#8f2784));
  background: linear-gradient(to bottom right, #f26b26 0%, #8f2784 100%);
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper.form-success .container h1 {
  -webkit-transform: translateY(85px);
          transform: translateY(85px);
  color: white;
}
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 80px 0;
  height: auto;
  text-align: center;
}
.container h1 {
  font-size: 40px;
  -webkit-transition-duration: 1s;
          transition-duration: 1s;
  -webkit-transition-timing-function: ease-in-put;
          transition-timing-function: ease-in-put;
  font-weight: 200;
  color: white;
}
form {
  padding: 20px 0;
  position: relative;
  z-index: 2;
}
form input {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.2);
  width: 250px;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  color: white;
  -webkit-transition-duration: 0.25s;
          transition-duration: 0.25s;
  font-weight: 300;
}
form input.user-not-found {
  color: red !important;
}
form input:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
form input:focus {
  background-color: #ffffffc2;
  width: 300px;
  color: #f26b26;
}
form button {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: 0;
  background-color: #ffffffc2;
  border: 0;
  padding: 10px 15px;
  color: #f26b26;
  border-radius: 3px;
  width: 250px;
  cursor: pointer;
  font-size: 18px;
  -webkit-transition-duration: 0.25s;
          transition-duration: 0.25s;
}
form button:hover {
  background-color: #f5f7f9;
}
.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
}
.bg-bubbles li {
  position: absolute;
  list-style: none;
  display: block;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.15);
  bottom: -160px;
  -webkit-animation: square 25s infinite;
  animation: square 25s infinite;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}
.bg-bubbles li:nth-child(1) {
  left: 10%;
}
.bg-bubbles li:nth-child(2) {
  left: 20%;
  width: 80px;
  height: 80px;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
  -webkit-animation-duration: 17s;
          animation-duration: 17s;
}
.bg-bubbles li:nth-child(3) {
  left: 25%;
  -webkit-animation-delay: 4s;
          animation-delay: 4s;
}
.bg-bubbles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  -webkit-animation-duration: 22s;
          animation-duration: 22s;
  background-color: rgba(255, 255, 255, 0.25);
}
.bg-bubbles li:nth-child(5) {
  left: 70%;
}
.bg-bubbles li:nth-child(6) {
  left: 80%;
  width: 120px;
  height: 120px;
  -webkit-animation-delay: 3s;
          animation-delay: 3s;
  background-color: rgba(255, 255, 255, 0.2);
}
.bg-bubbles li:nth-child(7) {
  left: 32%;
  width: 160px;
  height: 160px;
  -webkit-animation-delay: 7s;
          animation-delay: 7s;
}
.bg-bubbles li:nth-child(8) {
  left: 55%;
  width: 20px;
  height: 20px;
  -webkit-animation-delay: 15s;
          animation-delay: 15s;
  -webkit-animation-duration: 40s;
          animation-duration: 40s;
}
.bg-bubbles li:nth-child(9) {
  left: 25%;
  width: 10px;
  height: 10px;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
  -webkit-animation-duration: 40s;
          animation-duration: 40s;
  background-color: rgba(255, 255, 255, 0.3);
}
.bg-bubbles li:nth-child(10) {
  left: 90%;
  width: 160px;
  height: 160px;
  -webkit-animation-delay: 11s;
          animation-delay: 11s;
}
@-webkit-keyframes square {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(calc(-100vh - 200px)) rotate(600deg);
            transform: translateY(calc(-100vh - 200px)) rotate(600deg);
  }
}
@keyframes square {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(calc(-100vh - 200px)) rotate(600deg);
            transform: translateY(calc(-100vh - 200px)) rotate(600deg);
  }
}

</style>
