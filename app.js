const fs = require('fs');

const year = "2020";
const owner = "Vivek Nigam (@viveknigam3003)";

const authors = [
  { name: "Vivek Nigam", email: "viveknigam.nigam3@gmail.com", year: 2020 },
];

const listAuthors = (authors) => {
  let authorListStr = `` 
  for (let i = 0; i < authors.length; i++){
    authorListStr += `* - ${authors[i].name}, <${authors[i].email}>, ${authors[i].year} \n`
  }

  return authorListStr
}

const APACHE_LICENSE = `/**
* Copyright ${year} ${owner.toString()}
*
* Licensed under the Apache License, Version 2.0 (the 'License');
* You may not use this file except in compliance with the License.
* You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
* 
* Authors:
${listAuthors(authors)}
*/\n\n`;

const prependFile = require('prepend-file');

const filename = './target/abc.js'

const addLic = async () => {
  await prependFile(filename, APACHE_LICENSE);
};

addLic();