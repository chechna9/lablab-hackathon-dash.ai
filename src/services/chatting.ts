import axios from "axios";

export const chatting = (msg: string) =>
  new Promise((resolve, reject) => {
    const url = "https://dashaibackend-production-24cd.up.railway.app/predict";
    
    axios
      .post(url, {
        headers: {
          "Content-Type": "application/json",
        },
        'human_input': msg,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
