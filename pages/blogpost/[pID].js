import React from "react";
import { useRouter } from 'next/router';

const Post = () => {
    const router = useRouter()
    const { pID = '' } = router.query;
    return (<div>Post ID : {pID}</div>)
}

export default Post