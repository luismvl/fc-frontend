import makeFilter from "../utils/makeFilter";

export function getAllCandidates(token) {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  return fetch('https://fc-back-end.herokuapp.com/candidates', options)
    .then(res => {
      if (!res.ok) {
        throw new Error(`http status ${res.status}`);
      }
      return res.json();
    });;
}
// { remote, presential, relocationYes, relocationNo, selectedCountry, selectedCity, selectedTags }
export function getAllCandidatesByFilter(filter, token) {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
  const filterStr = makeFilter(filter);

  return fetch(`https://fc-back-end.herokuapp.com/candidates/search?search=${filterStr}`, options)
    .then(res => {
      if (!res.ok) {
        throw new Error(`http status ${res.status}`);
      }
      return res.json();
    });;
}

export function createCandidate(newCandidate, token) {
  const options = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCandidate)
  };


  return fetch(`https://fc-back-end.herokuapp.com/candidates/`, options)
    .then(res => {
      if (!res.ok) {
        throw new Error(`http status ${res.status}`);
      }
      return res.json();
    });;
}

export function setCandidateCv(candidateId, file, token) {
  var formdata = new FormData();
  formdata.append("pdf", file);
  const options = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formdata
  };
  return fetch(`https://fc-back-end.herokuapp.com/candidates/${candidateId}/cv`, options)
    .then(res => {
      if (!res.ok) {
        throw new Error(`http status ${res.status}`);
      }
      return res.json();
    });;
}

export function setCandidateImage(candidateId, file, token) {
  var formdata = new FormData();
  formdata.append("image", file);
  const options = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formdata
  };
  return fetch(`https://fc-back-end.herokuapp.com/candidates/${candidateId}/image`, options)
    .then(res => {
      if (!res.ok) {
        throw new Error(`http status ${res.status}`);
      }
      return res.json();
    });;
}

export function updateCandidate(candidate, token) {
  const options = {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(candidate)
  };

  return fetch(`https://fc-back-end.herokuapp.com/candidates/`, options)
    .then(res => {
      if (!res.ok) {
        throw new Error(`http status ${res.status}`);
      }
      return res.json();
    });;
}
