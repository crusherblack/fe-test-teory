const url =
  "https://www.example.com/search?q=JavaScript+Tutorial&sort=asc&page=1";

const params = url.match(/[?&]([^=#]+)=([^&#]*)/g).reduce((acc, val) => {
  const match = val.match(/([^=?&]+)(?:=([^&]*))?/);
  const key = decodeURIComponent(match[1].replace(/\+/g, " "));
  const value = match[2]
    ? decodeURIComponent(match[2].replace(/\+/g, " "))
    : "";
  return { ...acc, [key]: value };
}, {});

console.log(params);
// Output: { q: "JavaScript Tutorial", sort: "asc", page: "1" }
