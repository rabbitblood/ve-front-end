const apiUrl = import.meta.env.VITE_API_URL;

export const postServerData = async (
  url: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any
) => {
  return fetch(`${apiUrl}${url}`, {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      console.error(e);
    });
};

export const getServerData = async (url: string) => {
  return fetch(`${apiUrl}${url}`, {
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      console.error(e);
    });
};
