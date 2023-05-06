import https from "https";

export default function ({
  $axios,
  $toast,
  error: nuxtError,
}) {
  $axios.setBaseURL(process.env.BASE_URL);
  $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });

  // $axios.onResponse((response) => {
  //   // console.log(response);
  //   return response;
  // });

  // $axios.onError((error) => {
  //   if (error.response) {
  //     const data = error.response.data;

  //     const code = data?.status;
  //     const message = data.message;
  //     $toast.error(`${code}: ${message || "Ocorreu um erro"}`);
  //   }
  // });
}
