const STRAPI_API_URL:any = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337/api";

export const variables = {
    STRAPI_BASE_URL: STRAPI_API_URL.replace(/\/api(.*)/, ""),
    STRAPI_API_URL: STRAPI_API_URL
};

export function getMediaUrl(url: string) {
    if(url.startsWith("http"))
        return url;

    return `${variables.STRAPI_BASE_URL}${url}`;
}