export function loginByUser({ username, password }) {
  const options = {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch('https://fc-back-end.herokuapp.com/auth/login', options)
    .then(res => {
      if (!res.ok) {
        throw new Error('Email o password incorrectos');
      }
      return res.json();
    });
}

export function checkToken(token) {
  const options = {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
  return fetch('https://fc-back-end.herokuapp.com/auth/check', options)
    .then(res => {
      if (!res.ok) {
        throw new Error('Token incorrecto');
      }
      return res.json();
    });
}
