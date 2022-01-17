const STRAPI_API_URL:any = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337/api";

export const variables = {
    STRAPI_API_URL: STRAPI_API_URL,
    STRAPI_BASE_URL: STRAPI_API_URL.replace(/\/api(.*)/, ""),
    STRAPI_MEDIA_URL: STRAPI_API_URL.replace(/\/api(.*)/, "/uploads")
};