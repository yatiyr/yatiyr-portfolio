import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';
import readingTime from 'reading-time';

import remarkSlug from "remark-slug";
import rehypeAutolinkHeadings from "remark-autolink-headings";
import remarkCodeTitles from "remark-code-titles";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const root = process.cwd();

export async function getFiles(type) {
    return fs.readdirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(type, slug) {
    const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');    

    const { data, content } = matter(source);

    const mdxSource = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [
            remarkSlug,
            remarkMath,
            [
                rehypeAutolinkHeadings,
              {
                linkProperties: {
                  className: ['anchor']
                }
              }
            ],
            remarkCodeTitles
          ],
          rehypePlugins: [mdxPrism, rehypeKatex]
        }
      });
    
      return {
        mdxSource,
        frontMatter: {
          wordCount: content.split(/\s+/gu).length,
          readingTime: readingTime(content),
          slug: slug || null,
          ...data
        }
      };    
}

export async function getAllFilesFrontMatter(type) {
    const files = fs.readdirSync(path.join(root, 'data', type));

    return files.reduce((allPosts, postSlug) => {
        const source = fs.readFileSync(path.join(root, 'data', type, postSlug), 'utf8');
        const { data, content } = matter(source);
    
        return [
          {
            ...data,
            slug: postSlug.replace('.mdx', ''),
            frontMatter: {
              wordCount: content.split(/\s+/gu).length,
              readingTime: readingTime(content)
            }
          },
          ...allPosts
        ];
      }, []);    
}

export async function getAllHighlightsFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.reduce((allPosts, postSlug) => {
      const source = fs.readFileSync(path.join(root, 'data', type, postSlug), 'utf8');
      const { data, content } = matter(source);
  
      if(data.highlighted === 'true') {
        return [
          {
            ...data,
            slug: postSlug.replace('.mdx', ''),
            frontMatter: {
              wordCount: content.split(/\s+/gu).length,
              readingTime: readingTime(content)
            }
          },
          ...allPosts
        ];
      } else {
        return [
          ...allPosts
        ]
      }

    }, []);    
}

export async function parseMDXString(source) {

    const { data, content } = matter(source);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [
                remarkSlug,
                [
                    rehypeAutolinkHeadings,
                    {
                        linkProperties: {
                            className: ['anchor']
                        }
                    }
                ],
                remarkCodeTitles
            ],
            rehypePlugins: [mdxPrism]
        }
    });

    return {
        mdxSource,
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            readingTime: readingTime(content),
            slug: "slug" || null,
            data
        }
    };
}

