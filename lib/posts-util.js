import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName) { // zorgt voor alle data
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, ''); // doet de md-extensie weg 
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() { // zorgt voor alle files
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile); 
    /* zorgt voor een mapping van de file-names die omgezet worden naar naar de data */
  });

  const sortedPosts = allPosts.sort((postA, postB) => postA.data > postB.data ? -1 : 1);
  // zorgt ervoor dat recentere posts voor oudere post komen

  return sortedPosts;
}

export function getFeaturedposts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter(post => post.isFeatured);

  return featuredPosts; 
}