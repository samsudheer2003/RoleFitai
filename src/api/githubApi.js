import axios from "axios";

export const analyzeGithub = async (profileUrl, role) => {
  const res = await axios.post("http://127.0.0.1:8000/github/analyze", {
    profile_url: profileUrl,
    role: role,
  });
  return res.data;
};
