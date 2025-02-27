import React, {FC} from "react"
import { PostProps } from "../types/PostProps"

import cls from './Post.module.scss'
import { Text } from "ui/components/shared/Text"
import { classNames } from "lib/classNames/classNames"
import { HStack } from "ui/components/shared/Stack"

export const Post: FC<PostProps> = (props) => {
    
    const {
        post,                          
        className=''
    } = props;

    return(
        <div className={classNames(cls.Post, {}, [className])} style={{maxWidth: post.maxWidth ?? '500px'}}>
            <HStack max justify="between" align="end" className={cls.header}>
                <Text size="l">
                    {post.title}
                </Text>
                <Text color='secondary'>
                    {post.subtitle}
                </Text>
            </HStack>
            <div className={cls.body}>
                {post.description}
            </div>
        </div>
    )
}

export default Post;