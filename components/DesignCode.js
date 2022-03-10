import highlight from 'highlight.js';
import {findDOMNode} from "react-dom";
import {createRef, useEffect} from "react";


const HighlightCode = ({children, language}) => {
    const code = createRef();

    useEffect(() => {
        highlight.highlightBlock(findDOMNode(code.current));
    }, [])

    return (
        <pre>
      <code
          ref={code}
          className={language}>
        {children}
      </code>
    </pre>
    )
}


export default HighlightCode;