import BlockContent from '@sanity/block-content-to-react';

import HighlightCode from "./DesignCode";
import {urlFor} from "../lib/api";

const serializers = {
    types: {

        image: ({node: {asset, alt, position = 'center'}}) => {
            return (
                <div className={`blog-image blog-image-${position}`}>
                    <img src={urlFor(asset).height(300).fit('max').url()} />
                    <div className="image-alt">{alt}</div>
                </div>
            )
        }
    }
}

const BlogContent = ({content}) =>
    <BlockContent
        serializers={serializers}
        blocks={content}
    />

export default BlogContent;