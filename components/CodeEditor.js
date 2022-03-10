// import React, { useState } from 'react'
// import 'codemirror/lib/codemirror.css'
// import 'codemirror/theme/material.css'
// import 'codemirror/mode/xml/xml'
// import 'codemirror/mode/javascript/javascript'
// import 'codemirror/mode/css/css'
// import { Controlled as ControlledEditor } from 'react-codemirror2'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
//
// export default function CodeEditor(props) {
//     const {
//         language,
//         displayName,
//         value,
//         onChange
//     } = props
//     const [open, setOpen] = useState(true)
//
//     function handleChange(editor, data, value) {
//         onChange(value)
//     }
//
//     return (
//         <div className={`editor_container ${open ? '' : 'collapsed'}`}>
//             <div className={classes.editor_title}>
//                 {displayName}
//                 <button
//                     type="button"
//                     className={classes.expand_collapse_btn}
//                     onClick={() => setOpen(prevOpen => !prevOpen)}
//                 >
//                     {/*<FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />*/}
//                 </button>
//             </div>
//             <ControlledEditor
//                 onBeforeChange={handleChange}
//                 value={value}
//                 className={classes.code_mirror_wrapper}
//                 options={{
//                     lineWrapping: true,
//                     lint: true,
//                     mode: language,
//                     theme: 'material',
//                     lineNumbers: true
//                 }}
//             />
//         </div>
//     )
// }