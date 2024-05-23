// Namaste! Welcome to the world of asynchronous JavaScript.

// Udaharan 1: Mool Prayog
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data sahi se prapt kiya gaya!");
    }, 2000);
  });
};

const getData = async () => {
  try {
    const data = await fetchData();
    console.log(data); // "Data sahi se prapt kiya gaya!"
  } catch (error) {
    console.error("Data prapt karne mein galti:", error);
  }
};

getData();

// Udaharan 2: Galti Ka Nivaran

const fetchDataWithError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Data prapt karne mein galti!");
    }, 2000);
  });
};

const getDataWithError = async () => {
  try {
    const data = await fetchDataWithError();
    console.log(data); // Ye line execute nahi hogi
  } catch (error) {
    console.error("Data prapt karne mein galti:", error); // "Data prapt karne mein galti: Data prapt karne mein galti!"
  }
};

getDataWithError();

// Udaharan 3: Sath Mein Prarambh
// Is udaharan mein hum dekhte hain kaise hum async/await ka upayog karte hain
// Sath mein do promise ko ek sath prapt karne ke liye
const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Upayogakarta data sahi se prapt kiya gaya!");
    }, 1500);
  });
};

const fetchPostData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post data sahi se prapt kiya gaya!");
    }, 1000);
  });
};

const getUserAndPostData = async () => {
  try {
    const userDataPromise = fetchUserData();
    const postDataPromise = fetchPostData();

    const userData = await userDataPromise;
    const postData = await postDataPromise;

    console.log(userData, postData); // "Upayogakarta data sahi se prapt kiya gaya!" "Post data sahi se prapt kiya gaya!"
  } catch (error) {
    console.error("Data prapt karne mein galti:", error);
  }
};

getUserAndPostData();
