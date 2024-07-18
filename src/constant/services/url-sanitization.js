const urlSanitizer = (url) => {
    url = url
    ?.toLowerCase()
    .replace(/\s/g, "_")
    .replace(/&/g, "and")
    .replace(/\./g, "")
    .replace(/,/g, "");
    return url;
}

const urlSanitizerV2 = (url) => {
    return url
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "") 
        .replace(/\s+/g, "-")
        .trim();
};

export { urlSanitizer, urlSanitizerV2 };