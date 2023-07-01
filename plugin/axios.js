export default function ({ $axios, redirect, app, error, store }) {
    $axios.onRequest((config) => {
      return config;
    });
  
    $axios.onResponse((res) => {
      return res;
    });
  
    $axios.onError((err) => {
      const code = parseInt(err.response && err.response.status);
      if (code === 403) {
        error({ statusCode: 403, message: "No Permission." });
      }
      if (code === 404) {
        error({ statusCode: 404, message: "Request Not Found." });
      }
      if (code === 500) {
        error({ statusCode: 500, message: "Server Error." });
      }
      if (code === 401) {
        error({ statusCode: 401, message: "Unauthenticated." });
      }
    });
  }