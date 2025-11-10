// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",  // backend base url
// });

// // Tutorials API
// export const getTutorials = () => API.get("/tutorials");
// export const addTutorial = (data) => API.post("/tutorials", data);
// export const updateTutorial = (id, data) => API.put(`/tutorials/${id}`, data);
// export const deleteTutorial = (id) => API.delete(`/tutorials/${id}`);

// import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000/api" });

// export const getTutorials = () => API.get("/tutorials");
// export const addTutorial = (data) => API.post("/tutorials", data);
// export const updateTutorial = (id, data) => API.put(`/tutorials/${id}`, data);
// export const deleteTutorial = (id) => API.delete(`/tutorials/${id}`);
// export const getTutorialByLink = (link) => API.get(`/tutorials/link/${link}`);

// export const getTutorialById = (id) => API.get(`/tutorials/${id}`);

// // ✅ Make sure API_URL is defined before using it
// const API_URL = "http://localhost:5000/api/blogs";

// export const getBlogById = (id) => axios.get(`${API_URL}/${id}`);

// // Fetch all blogs
// export const getBlogs = () => axios.get(API_URL);

// // Add a new blog
// export const addBlog = (data) => axios.post(API_URL, data);

// // Update an existing blog
// export const updateBlog = (id, data) => axios.put(`${API_URL}/${id}`, data);

// // Delete a blog
// export const deleteBlog = (id) => axios.delete(`${API_URL}/${id}`);

// // ----- Inquiries -----
// const BASE_API = "http://localhost:5000/api";
// export const getInquiries = () => axios.get(`${BASE_API}/inquiries`);
// export const sendInquiry = (data) => axios.post(`${BASE_API}/inquiries`, data);
// // Send admin feedback

// export const sendFeedback = (id, feedback) => {
//   return axios.post(`http://localhost:5000/api/inquiries/${id}/feedback`, { feedback });
// };


// import axios from "axios";

// // ✅ Dynamic base URL (works locally + on Vercel)
// const API = axios.create({
//   baseURL:
//     import.meta.env.VITE_API_URL || "http://localhost:5000/api",
//   headers: {
//     "Cache-Control": "no-cache",
//     Pragma: "no-cache",
//     Expires: "0",
//   },
// });

// // ✅ Tutorials
// export const getTutorials = () => API.get("/tutorials");
// export const addTutorial = (data) => API.post("/tutorials", data);
// export const updateTutorial = (id, data) => API.put(`/tutorials/${id}`, data);
// export const deleteTutorial = (id) => API.delete(`/tutorials/${id}`);

// // ✅ Fix: always add a timestamp to avoid browser cache on dynamic fetch
// export const getTutorialByLink = (link) =>
//   API.get(`/tutorials/link/${link}?t=${Date.now()}`);

// // ✅ Blogs
// const BLOG_API = `${API.defaults.baseURL}/blogs`;

// export const getBlogById = (id) =>
//   axios.get(`${BLOG_API}/${id}`, {
//     headers: { "Cache-Control": "no-cache" },
//   });

// export const getBlogs = () =>
//   axios.get(BLOG_API, {
//     headers: { "Cache-Control": "no-cache" },
//   });

// export const addBlog = (data) => axios.post(BLOG_API, data);
// export const updateBlog = (id, data) => axios.put(`${BLOG_API}/${id}`, data);
// export const deleteBlog = (id) => axios.delete(`${BLOG_API}/${id}`);

// // ✅ Inquiries
// const BASE_API = API.defaults.baseURL;
// export const getInquiries = () =>
//   axios.get(`${BASE_API}/inquiries`, {
//     headers: { "Cache-Control": "no-cache" },
//   });

// export const sendInquiry = (data) =>
//   axios.post(`${BASE_API}/inquiries`, data);

// export const sendFeedback = (id, feedback) =>
//   axios.post(`${BASE_API}/inquiries/${id}/feedback`, { feedback });


// import axios from "axios";
// console.log("🧩 VITE_API_URL =", import.meta.env.VITE_API_URL);

// // ✅ Dynamic base URL (works locally + on Vercel)
// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
//   headers: {
//     "Cache-Control": "no-cache",
//     Pragma: "no-cache",
//     Expires: "0",
//   },
// });

// // ✅ Tutorials
// export const getTutorials = () => API.get("/tutorials");
// export const addTutorial = (data) => API.post("/tutorials", data);
// export const updateTutorial = (id, data) => API.put(`/tutorials/${id}`, data);
// export const deleteTutorial = (id) => API.delete(`/tutorials/${id}`);

// // ✅ NEW: Get tutorial by ID (for EditTutorial.jsx)
// export const getTutorialById = (id) => API.get(`/tutorials/${id}`);

// // ✅ Fix: always add a timestamp to avoid browser cache on dynamic fetch
// export const getTutorialByLink = (link) =>
//   API.get(`/tutorials/link/${link}?t=${Date.now()}`);

// // ✅ Blogs
// const BLOG_API = `${API.defaults.baseURL}/blogs`;

// export const getBlogById = (id) =>
//   axios.get(`${BLOG_API}/${id}`, {
//     headers: { "Cache-Control": "no-cache" },
//   });

// export const getBlogs = () =>
//   axios.get(BLOG_API, {
//     headers: { "Cache-Control": "no-cache" },
//   });

// export const addBlog = (data) => axios.post(BLOG_API, data);
// export const updateBlog = (id, data) => axios.put(`${BLOG_API}/${id}`, data);
// export const deleteBlog = (id) => axios.delete(`${BLOG_API}/${id}`);

// // ✅ Inquiries
// const BASE_API = API.defaults.baseURL;

// export const getInquiries = () =>
//   axios.get(`${BASE_API}/inquiries`, {
//     headers: { "Cache-Control": "no-cache" },
//   });

// export const sendInquiry = (data) =>
//   axios.post(`${BASE_API}/inquiries`, data);

// export const sendFeedback = (id, feedback) =>
//   axios.post(`${BASE_API}/inquiries/${id}/feedback`, { feedback });

import axios from "axios";

// 🌍 Auto-detect environment (Localhost or Production)
const isLocal = window.location.hostname === "localhost";

// 🧩 Dynamic Base URL (Localhost → Render → Vercel)
const API_BASE_URL = isLocal
  ? "http://localhost:5000/api"
  : import.meta.env.VITE_API_URL || "https://brightcoder-admin.onrender.com/api";

console.log("🌐 Using API Base URL:", API_BASE_URL);

// 🧠 Axios Instance
const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
});

// ================================
// ✅ Tutorials
// ================================

// 🕓 With retry logic to handle Render cold start
export const getTutorials = async (retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await API.get(`/tutorials?t=${Date.now()}`);
      console.log("✅ Tutorials fetched successfully (Backend awake)");
      return res.data;
    } catch (err) {
      // Agar 404 hai to retry mat karo (route nahi mila)
      if (err.response && err.response.status === 404) {
        console.error("❌ 404: Tutorials route not found on backend");
        throw err;
      }
      console.warn(`⚠️ Retry ${i + 1}/${retries}: Backend might be waking up...`);
      await new Promise((r) => setTimeout(r, 3000)); // wait 3 sec before retry
    }
  }
  throw new Error("❌ Backend unreachable after retries");
};

export const addTutorial = (data) => API.post("/tutorials", data);
export const updateTutorial = (id, data) => API.put(`/tutorials/${id}`, data);
export const deleteTutorial = (id) => API.delete(`/tutorials/${id}`);
export const getTutorialById = (id) => API.get(`/tutorials/${id}`);

// ✅ Fix: avoid browser cache on dynamic fetch
export const getTutorialByLink = (link) =>
  API.get(`/tutorials/link/${link}?t=${Date.now()}`);

// ================================
// ✅ Blogs
// ================================
const BLOG_API = `${API_BASE_URL}/blogs`;

export const getBlogs = () =>
  axios.get(BLOG_API, {
    headers: { "Cache-Control": "no-cache" },
  });

export const getBlogById = (id) =>
  axios.get(`${BLOG_API}/${id}`, {
    headers: { "Cache-Control": "no-cache" },
  });

export const addBlog = (data) => axios.post(BLOG_API, data);
export const updateBlog = (id, data) => axios.put(`${BLOG_API}/${id}`, data);
export const deleteBlog = (id) => axios.delete(`${BLOG_API}/${id}`);

// ================================
// ✅ Inquiries
// ================================
const BASE_API = API_BASE_URL;

export const getInquiries = () =>
  axios.get(`${BASE_API}/inquiries`, {
    headers: { "Cache-Control": "no-cache" },
  });

export const sendInquiry = (data) =>
  axios.post(`${BASE_API}/inquiries`, data);

export const sendFeedback = (id, feedback) =>
  axios.post(`${BASE_API}/inquiries/${id}/feedback`, { feedback });
