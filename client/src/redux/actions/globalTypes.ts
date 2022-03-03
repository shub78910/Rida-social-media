export const GLOBALTYPES = {
  AUTH: "AUTH",
  ALERT: "ALERT",
  THEME: "THEME",
  STATUS: "STATUS",
  MODAL: "MODAL",
  SOCKET: "SOCKET",
  ONLINE: "ONLINE",
  OFFLINE: "OFFLINE",
  CALL: "CALL",
  PEER: "PEER",
};

export const EditData = (data: any[], id: any, post: any) => {
  const newData = data.map((item: { _id: any }) =>
    item._id === id ? post : item
  );
  return newData;
};

export const DeleteData = (data: any[], id: any) => {
  const newData = data.filter((item: { _id: any }) => item._id !== id);
  return newData;
};
