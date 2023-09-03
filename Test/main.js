const url = "https://jsonplaceholder.typicode.com/users";

const newUsers = {
  name: "Denis",
  age: 21,
};

function getRequest(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

getRequest(url)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

function postRequest(method, url, body = null) {
	const headers = {
		'Content-type': 'application/json'
	}
	return fetch(url, {
		method: method,
		body: JSON.stringify(body),
		headers: headers
	})
}

postRequest("post", url, newUsers)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
