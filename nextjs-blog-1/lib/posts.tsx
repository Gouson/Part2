import fs, { promises as fsPromise } from 'fs'
import path from "path";
import matter from 'gray-matter'
import marked from 'marked'
const markdownDIR = path.join(process.cwd(), 'markdown')
const getPosts = async () => {
    const fileNames = await fsPromise.readdir(markdownDIR)
    const posts = fileNames.map(filename => {
        const fullPath = path.join(markdownDIR, filename)
        const id = filename.replace(/\.md$/g, '')
        const text = fs.readFileSync(fullPath, 'utf8')
        const { data: { title, date }, content } = matter(text)
        return { id, title, date }
    })

    return posts
}
export const getPost = async (id: string) => {
    const fullPath = path.join(markdownDIR, id + '.md')
    const text = fs.readFileSync(fullPath, 'utf8')
    const { data: { title, date }, content } = matter(text)
    const htmlContent = marked(content)
    return JSON.parse(JSON.stringify({ id, title, date, content, htmlContent }
    ))
}
export const getPostIds = async () => {
    const fileNames = await fsPromise.readdir(markdownDIR)
    return fileNames.map(fileName => fileName.replace(/\.md$/g, ''))
}
export default getPosts
