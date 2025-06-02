let link = 'https://www.bimalpdl.me:8080/index.htm?name=Bimal&age=23';
let myURL = new URL(link);

console.log(`Host (with port): ${myURL.host}`);
console.log(`Hostname (without port): ${myURL.hostname}`);
console.log(`Pathname: ${myURL.pathname}`);
console.log(`Search string: ${myURL.search}`);
console.log(`Search query as an Object: ${JSON.stringify(Object.fromEntries(myURL.searchParams))}`);
console.log(`Name from query string: ${myURL.searchParams.get('name')}`);
console.log(`Age from query string: ${myURL.searchParams.get('age')}`);

