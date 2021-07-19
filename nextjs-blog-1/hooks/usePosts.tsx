
import axios from 'axios'
import { useEffect, useState } from 'react';
type Post = {
    id: string;
    date: string;
    title: string;
}
export const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)
    useEffect(() => {
        axios.get('/api/v1/posts').then(response => {
            setPosts(response.data)
            setIsLoading(false)
            if (response.data.length === 0) {
                setIsEmpty(true)
            }
        }, () => {
            setIsLoading(false)
        })
    }, []);
    return {
        posts, setPosts,
        isLoading, setIsLoading,
        isEmpty, setIsEmpty
    }
}