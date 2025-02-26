"use client"
import Output from "editorjs-react-renderer";

export default function EditorRender({data}:{data:any}) {
    return(
        <Output data={data} />
    )
}