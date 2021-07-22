import "reflect-metadata";
import { createConnection } from "typeorm";
import { Post } from "./entity/Post";

createConnection().then(async connection => {

    const posts = await connection.manager.find(Post)

    if (posts.length === 0) {
        let dataArray = []
        for (let i = 0; i < 10; i++) {
            dataArray.push(new Post(`Post ${i}`, `第${i}篇文章`))
        }
        await connection.manager.save(dataArray)
    }
    console.log('posts 数据填充了')
    connection.close()

}).catch(error => console.log(error));
