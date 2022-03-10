// import React, { useState, useEffect } from 'react';
// import CodeEditor from "./CodeEditor";
// import useLocalStorage from "../hooks/useLocalStorage";
//
// function MainEditor() {
//     const [html, setHtml] = useLocalStorage('html', '')
//     const [css, setCss] = useLocalStorage('css', '')
//     const [js, setJs] = useLocalStorage('js', '')
//     const [srcDoc, setSrcDoc] = useState('')
//
//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setSrcDoc(`
//         <html>
//           <body>${html}</body>
//           <style>${css}</style>
//           <script>${js}</script>
//         </html>
//       `)
//         }, 250)
//
//         return () => clearTimeout(timeout)
//     }, [html, css, js])
//
//     return (
//         <>
//             <div >
//                 <CodeEditor
//                     language="xml"
//                     displayName="HTML"
//                     value={html}
//                     onChange={setHtml}
//                 />
//                 <CodeEditor
//                     language="css"
//                     displayName="CSS"
//                     value={css}
//                     onChange={setCss}
//                 />
//                 <CodeEditor
//                     language="javascript"
//                     displayName="JS"
//                     value={js}
//                     onChange={setJs}
//                 />
//             </div>
//             <div className={classes.pane}>
//                 <iframe
//                     srcDoc={srcDoc}
//                     title="output"
//                     sandbox="allow-scripts"
//                     frameBorder="0"
//                     width="100%"
//                     height="100%"
//                 />
//             </div>
//         </>
//     )
// }
//
// export default MainEditor;