import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetail } from "../../services/posts";
import Highlighter from "../Highlighter/Highlighter";

type postDetailType = {
  id: string;
  title: string;
  img: string;
  paragraph: string;
  techs: string[];
  createdAt: string;
  contents: Content[];
};

type Content = {
  tag: string;
  data?: string;
  img?: string;
};

const PostDetail: FC = (): JSX.Element => {
  const codeString = `
    import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
    import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
    
    const Highlighter = () => {
      const codeString = '(num) => num + 1';
      return (
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeString}
        </SyntaxHighlighter>
      );
    };
    
    export default Highlighter`;
  const { id } = useParams() as any;
  const [postDetail, setPostDetail] = useState<postDetailType | undefined>();
  useEffect(() => {
    const fetchDetail = async () => {
      const result = await getPostDetail(id);
      debugger;
      setPostDetail(result.data);
    };
    fetchDetail();
  }, []);

  return (
    <div>
      <div>{id}</div>
      <div>{postDetail?.title}</div>
      <div>{postDetail?.paragraph}</div>
      {postDetail?.contents.map((content) => {
        const CustomTag = content.tag as keyof JSX.IntrinsicAttributes;
        return content.tag === "code" ? (
            <Highlighter codeString={codeString} />
            ) : (
        // @ts-ignore
          <CustomTag>{content.data}</CustomTag>
        );
      })}
    </div>
  );
};

export default PostDetail;
