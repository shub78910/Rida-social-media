import axios from "axios";

export const getDataAPI = async (url: string, token: string) => {
  const res = await axios.get(`http://localhost:5000/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};

export const postDataAPI = async (url: string, post?: any, token?: string) => {
  const res = await fetch(`http://localhost:5000/api/${url}`, {
    method: "POST",
    redirect: "follow",
    credentials: "include", // Don't forget to specify this if you need cookies
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(post),
  });

  return res.json();
};

export const putDataAPI = async (url: string, post: any, token?: string) => {
  const res = await axios.put(`http://localhost:5000/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const patchDataAPI = async (url: string, post: any, token?: string) => {
  const res = await axios.patch(`http://localhost:5000/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const deleteDataAPI = async (url: string, token: string) => {
  const res = await axios.delete(`http://localhost:5000/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};
