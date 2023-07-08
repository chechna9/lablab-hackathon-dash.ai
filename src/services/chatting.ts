import axios from "axios";

export const chatting = (msg: string) =>
  new Promise((resolve, reject) => {
    const url = "https://dashaibackend-production.up.railway.app/predict";
    const _data = {
      human_input: msg,
    };
    axios
      .post(url, {
        headers: {
          "Content-Type": "application/json",
        },
        data: _data,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
