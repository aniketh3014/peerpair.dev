export function sptliTag(tags: string) {
    return tags.split(",").map((lang) => lang.trim());
}
