export function getPageNumber(url) {
    if (!url) return 0;

    return url.split('page=')[1] * 1;
  }