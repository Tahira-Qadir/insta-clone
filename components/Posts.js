import Post from "./Post"

export default function Posts() {
    const posts = [
        {
            id: "1",
            userName: "Tahira Qadir",
            userImg: "/profile.png",
            img: "/mae.jpg",
            caption: "Nice Picture",
        },
        {
            id: "2",
            userName: "Shafiq Qadir",
            userImg: "/profile.png",
            img: "/lucia.jpg",
            caption: "New Picture from my city",
        }
    ]
  return (
    <div>
      {posts.map(post =>(
        <Post
          key = {post.id}
          id = {post.id}
          userName={post.userName}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}
