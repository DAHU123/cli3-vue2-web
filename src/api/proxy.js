const proxyApi = process.env.NODE_ENV === "production" ? "" : "/api";
const proxyLogin = process.env.NODE_ENV === "production" ? "" : "/login";

export { proxyApi, proxyLogin };
