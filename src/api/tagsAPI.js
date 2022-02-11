export function getAllTags(token) {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    redirect: 'follow'
  };

  return fetch(`https://fc-back-end.herokuapp.com/tags`, options)
    .then(res => {
      if (!res.ok) {
        throw new Error(`http status ${res.status}`);
      }
      return res.json();
    });;
}