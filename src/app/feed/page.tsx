"use-client"

import { dataStore } from "@/constants/data.constant";

const Feed = () => {

    // const feed = dataStore.getHomeFeed(2);
    // console.log(feed);

    const users = dataStore.userList('p');
    console.log("User list", users);
    
    return (
    
        <>
        <h1>Hello Feed is Here</h1>
        </>
    )
}

export default Feed;