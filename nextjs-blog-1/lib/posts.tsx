import fs, { promises as fsPromise } from 'fs'
import path from "path";
import matter from 'gray-matter'
const getPosts = async () => {
    const markdownDIR = path.join(process.cwd(), 'markdown')
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

export default getPosts