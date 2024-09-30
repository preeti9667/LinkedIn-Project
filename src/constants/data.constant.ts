const DATA = {
    users: [
        {
            id: 1,
            name: 'pukhraj saini',
            email: 'pukhraj@gmail.com',
            position: 'Software Engineer',
            createdAt: '2024-09-13T08:47:09.183Z'
        },
        {
            id: 2,
            name: 'preeti saini',
            email: 'preeti@gmail.com',
            position: 'Software Engineer',
            createdAt: '2024-09-13T08:47:09.183Z'
        },
        {
            id: 3,
            name: 'Aarti saini',
            email: 'aarti@gmail.com',
            position: 'Software Engineer',
            createdAt: '2024-09-15T08:47:09.183Z'
        },
        {
            id: 4,
            name: 'Bhupendra',
            email: 'Bhupendra@gmail.com',
            position: 'Software Engineer',
            createdAt: '2024-09-15T08:47:09.183Z'
        },
        {
            id: 5,
            name: 'vishember',
            email: 'vishember@gmail.com',
            position: 'Software Engineer',
            createdAt: '2024-09-15T08:47:09.183Z'
        },
        {
            id: 6,
            name: 'dayavati',
            email: 'dayavati@gmail.com',
            position: 'Primary Teacher',
            createdAt: '2024-09-15T08:47:09.183Z'
        },
        {
            id: 7,
            name: 'Ratko',
            email: 'ratko@gmail.com',
            position: 'Teacher',
            createdAt: '2024-09-15T08:47:09.183Z'
        },
    ],
    connections: [
        {
            id: 1,
            userId: 1,
            connectedTo: 2,
            createdAt: '2024-09-15T08:47:09.183Z'
        },
        {
            id: 2,
            userId: 1,
            connectedTo: 4,
            createdAt: '2024-09-15T08:47:09.183Z'
        },
        {
            id: 3,
            userId: 4,
            connectedTo: 2,
            createdAt: '2024-09-15T08:47:09.183Z'
        },
        {
            id: 4,
            userId: 3,
            connectedTo: 2,
            createdAt: '2024-09-15T08:47:09.183Z'
        },
        {
            id: 5,
            userId: 2,
            connectedTo: 5,
            createdAt: '2024-09-15T08:47:09.183Z'
        },
    ],
    posts: [
        {
            id: 1,
            userId: 1,
            createdAt: '2024-09-15T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20
        },
        {
            id: 2,
            userId: 1,
            createdAt: '2024-09-15T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20
        },
        {
            id: 3,
            userId: 2,
            createdAt: '2024-09-15T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20
        },
        {
            id: 4,
            userId: 2,
            createdAt: '2024-09-15T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20
        },
        {
            id: 5,
            userId: 5,
            createdAt: '2024-09-15T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20
        },
        {
            id: 6,
            userId: 5,
            createdAt: '2024-09-15T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20
        },
        {
            id: 7,
            userId: 4,
            createdAt: '2024-09-15T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20
        },
        {
            id: 8,
            userId: 4,
            createdAt: '2024-09-15T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20
        },
        {
            id: 9,
            userId: 3,
            createdAt: '2024-09-15T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20
        },
        {
            id: 10,
            userId: 3,
            createdAt: '2024-09-15T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 110,
            commentCount: 21,
            rePostCount: 2
        },
    ],
    likes: [
        {
            id: 1,
            postId: 1,
            userId: 1,
            createdAt: '2024-09-15T08:47:09.183Z',
        },
        {
            id: 2,
            postId: 2,
            userId: 1,
            createdAt: '2024-09-15T08:47:09.183Z',
        },
        {
            id: 3,
            postId: 3,
            userId: 3,
            createdAt: '2024-09-15T08:47:09.183Z',
        },
        {
            id: 4,
            postId: 4,
            userId: 3,
            createdAt: '2024-09-15T08:47:09.183Z',
        },
    ]

}

interface HomeFeedPostInterface {
    id: number;
    content: string;
    createdAt: string;
    likeCount: number,
    commentCount: number,
    rePostCount: number
    user: {
        id?: number;
        name?: string;
        position?: string;
        followerCount?: number;
    },
    isLike: boolean
    isComment?: boolean
}

interface UserInterface {
    id: number,
    name: string,
    email: string,
    position: string,
    createdAt: string
    followerCount?: number;
}

interface PostInterface {
    id: number;
    userId: number;
    content: string;
    createdAt: string;
    likeCount: number,
    commentCount: number,
    rePostCount: number
}

interface ConnectionInterface {
    id: number,
    userId: number,
    connectedTo: number,
    createdAt: string
}

interface LikeInterface {
    id: number,
    userId: number,
    postId: number,
    createdAt: string
}

interface UserAuth {
    success: boolean;
    email: string;
    message: string;
    userId?: number;
}

export class DataStore {
    getHomeFeed(loggedInUserId: number): HomeFeedPostInterface[] {
        const feed: HomeFeedPostInterface[] = [];
        DATA.posts.forEach((post: PostInterface) => {
            const user = DATA.users.find((user: UserInterface) => user.id === post.userId);
            const isLike = DATA.likes.some((e: LikeInterface) => e.postId === post.id && e.userId === loggedInUserId);
            const followers = DATA.connections.filter((con: ConnectionInterface) => con.userId === post.userId)



            const feedObj: HomeFeedPostInterface = {
                id: post.id,
                commentCount: post.commentCount,
                likeCount: post.likeCount,
                rePostCount: post.rePostCount,
                content: post.content,
                createdAt: post.createdAt,
                user: {
                    id: user?.id,
                    name: user?.name,
                    position: user?.position,
                    followerCount: followers.length
                },
                isLike,
            }

            feed.push(feedObj)
        })
        return feed;
    }


    userList(search: string): UserInterface[] {
        return DATA.users.filter((user: UserInterface) => user.name.toLowerCase().includes(search.toLowerCase()));
    }


    userAuth(email: string): UserAuth {
        const isExists = DATA.users.find((e: UserInterface) => e.email === email);
        if (isExists) {
            return {
                message: 'Login Success',
                success: true,
                email,
                userId: isExists.id,
            }
        } else {
            return {
                message: 'Login Failed',
                success: false,
                email
            }
        }

    }


}

export const dataStore = new DataStore();

dataStore.getHomeFeed(2);
