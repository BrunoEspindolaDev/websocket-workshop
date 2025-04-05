export const createMessage = (username, text) => ({
  sender: username,
  text: text.trim(),
  date: new Date()
});

export const transformMessage = data => {
  const buffer = JSON.parse(data);
  const uint8Array = new Uint8Array(buffer.data);
  const jsonString = new TextDecoder().decode(uint8Array);
  return JSON.parse(jsonString);
};
