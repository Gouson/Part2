import "reflect-metadata";
import { createConnection } from "typeorm";
import { Comment } from "./entity/Comment";
import { Post } from "./entity/Post";
import { User } from './entity/User';

createConnection().then(async connection => {
    const { manager } = connection;
    //创建user
    const u1 = new User()
    u1.username = 'gouson'
    u1.passwordDigest = 'xxx'
    await manager.save(u1)
    //创建post
    const p1 = new Post()
    p1.title = "Post 1"
    p1.content = "yyyyyyyyyyyyyyyyyy"
    p1.author = u1
    await manager.save(p1)
    //创建comment
    const c1 = new Comment()
    c1.content = 'zzzzzz'
    c1.user = u1
    c1.post = p1
    await manager.save(c1)
    console.log(u1.id)
    connection.close()
}).catch(error => console.log(error));
