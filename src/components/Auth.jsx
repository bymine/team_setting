import React from 'react';

const Auth = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label>
          email
          <input name="email" />
        </label>
      </div>
      <div>
        <label>
          password
          <input name="password" />
        </label>
      </div>
      <button>signin</button>
      <button>signup</button>
      <button>logout</button>
    </form>
  );
};

export default Auth;
