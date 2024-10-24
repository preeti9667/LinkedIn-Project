const DATA = {
    users: [
        {
            id: 1,
            name: 'Pukhraj saini',
            email: 'pukhraj@gmail.com',
            position: 'Software Engineer',
            createdAt: '2024-09-13T08:47:09.183Z'
        },
        {
            id: 2,
            name: 'Preeti saini',
            email: 'preeti@gmail.com',
            position: 'Software Engineer',
            createdAt: '2024-09-13T08:47:09.183Z'
        },
        {
            id: 3,
            name: 'Aarti saini',
            email: 'Aarti@gmail.com',
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
            name: 'Vishember',
            email: 'vishember@gmail.com',
            position: 'Software Engineer',
            createdAt: '2024-09-15T08:47:09.183Z'
        },
        {
            id: 6,
            name: 'Dayavati',
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
            connectedTo: 1,
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
            userId: 1,
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
            rePostCount: 20,
            url: 'https://img.freepik.com/premium-vector/floral-elements-indian-mehendy-style-vector-white-background_1266257-34617.jpg?ga=GA1.1.2107727690.1726806487&semt=ais_hybrid'
        },
        {
            id: 2,
            userId: 1,
            createdAt: '2024-09-15T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20,
            url: 'https://img.freepik.com/premium-photo/gandhi-jayanti_706452-33872.jpg?ga=GA1.1.2107727690.1726806487&semt=ais_hybrid'
        },
        {
            id: 3,
            userId: 2,
            createdAt: '2024-09-15T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20,
            url: 'https://img.freepik.com/premium-vector/man-hugging-his-dog_1198035-2272.jpg?ga=GA1.1.2107727690.1726806487&semt=ais_hybrid'
        },
        {
            id: 4,
            userId: 2,
            createdAt: '2024-09-15T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20,
            url: 'https://img.freepik.com/premium-vector/frame-with-flower-vector-illustration_1253202-306222.jpg?ga=GA1.1.2107727690.1726806487&semt=ais_hybrid'
        },
        {
            id: 5,
            userId: 5,
            createdAt: '2024-09-15T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20,
            url: 'https://img.freepik.com/free-vector/dog-standing-white-background_1308-108711.jpg?ga=GA1.1.2107727690.1726806487&semt=ais_hybrid'
        },
        {
            id: 6,
            userId: 5,
            createdAt: '2024-09-15T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20,
            url: 'https://img.freepik.com/premium-photo/goddess-durga-jai-mata-di_1037680-8530.jpg?ga=GA1.1.2107727690.1726806487'
        },
        {
            id: 7,
            userId: 4,
            createdAt: '2024-10-15T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20,
            url: 'https://img.freepik.com/free-photo/boat-lake_181624-226.jpg?ga=GA1.1.2107727690.1726806487'
        },
        {
            id: 8,
            userId: 4,
            createdAt: '2024-10-17T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20,
            url: 'https://img.freepik.com/premium-photo/statue-god-with-blue-face-gold-ring-around-it_1092575-35141.jpg?ga=GA1.1.2107727690.1726806487'
        },
        {
            id: 9,
            userId: 3,
            createdAt: '2024-09-14T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 200,
            commentCount: 20,
            rePostCount: 20,
            url: 'https://img.freepik.com/premium-photo/painting-religious-man-with-large-white-beard-large-white-beard_1050053-3788.jpg?ga=GA1.1.2107727690.1726806487&semt=ais_hybrid'
        },
        {
            id: 10,
            userId: 3,
            createdAt: '2024-09-19T08:47:09.183Z',
            content: 'If you’re looking for that perfect opportunity to make it big, your search ends right her',
            likeCount: 110,
            commentCount: 21,
            rePostCount: 2,
            url: 'https://img.freepik.com/free-photo/beautiful-shot-isa-khan-s-tomb-delhi-india-cloudy-sky_181624-20750.jpg?ga=GA1.1.2107727690.1726806487&semt=ais_hybrid'
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

export interface HomeFeedPostInterface {
    id: number;
    url: string;
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
    url: string;
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
export interface ConnectionListInterface {
    id: number,
    createdAt: string,
    user: {
        id?: number;
        name?: string;
        position?: string;
        followerCount?: number;
    },
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
                url: post.url,
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

    users(id: number) {
        return DATA.users.find((e: UserInterface) => e.id === id)
    }

    connections(loggedInUserId: number) {
        const connections: ConnectionListInterface[] = [];
        DATA.connections.forEach((e) => {
            const obj: ConnectionListInterface = {
                id: e.id,
                createdAt: e.createdAt,
                user: {}
            }
            if (e.userId === loggedInUserId) {
                const connectedToUser = DATA.users.find((user: UserInterface) => user.id === e.connectedTo);
                   
                obj.user = {
                        id: connectedToUser?.id,
                        name: connectedToUser?.name,
                        position: connectedToUser?.position
                    }


                    connections.push(obj)
            }
        })
        return connections
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
