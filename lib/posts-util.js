import fs from 'fs'; // komt van Node 
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
} // geeft alle post-file-namen

export function getPostData(postIdentifier) { // zorgt voor alle data
  const postSlug = postIdentifier.replace(/\.md$/, ''); // doet de md-extensie weg 
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() { // zorgt voor alle files
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile); 
    /* zorgt voor een mapping van de file-names die omgezet worden naar de data */
  });

  const sortedPosts = allPosts.sort((postA, postB) => postA.data > postB.data ? -1 : 1);
  // zorgt ervoor dat recentere posts voor oudere post komen

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter(post => post.isFeatured);

  return featuredPosts; 
}