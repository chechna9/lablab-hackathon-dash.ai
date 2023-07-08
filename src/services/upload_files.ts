import axios from "axios";

export const uploadFiles = (file: File) =>
  new Promise((resolve, reject) => {
    const url = "https://dashaibackend-production-24cd.up.railway.app/upload";

    var formData = new FormData();
    formData.append("file", file);
    axios
      .post(url, {
        formData,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });


//   const handleFileChange = (event: any) => {
//     setSelectedFile(event.target.files[0]);
//   };
// const handleUploadFile = async () => {
//     if (selectedFile) {
//       uploadFiles(selectedFile)
//         .then((res) => {
//           console.log(res);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//       // console.log(selectedFile);
      
//     }
//   };
