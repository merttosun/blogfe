import React, {FC, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getPostDetail} from "../../services/posts";

type postDetailType = {
    id: string;
    title: string;
    img: string;
    paragraph: string;
    techs: string[];
    createdAt: string;
    contents: Content[];
}

type Content = {
    tag: string;
    data?: string;
    img?: string;
}


const PostDetail: FC = (): JSX.Element => {
    const {id} = useParams() as any;
    const [postDetail, setPostDetail] = useState<postDetailType | undefined>()
    useEffect(() => {
        const fetchDetail = async () => {
            const result = await getPostDetail(id);
            debugger;
            setPostDetail(result.data);
            debugger;
        }
        fetchDetail()
    }, [])

    return (
        <div>
            <div>{id}</div>
            <div>{postDetail?.title}</div>
            <div>{postDetail?.paragraph}</div>
            {postDetail?.contents.map((content) => {
                const CustomTag = content.tag as keyof JSX.IntrinsicAttributes;
                // @ts-ignore
                return (<CustomTag>{content.data}</CustomTag>)
            })}
        </div>
    )
}

export default PostDetail