import React, { useEffect, useState } from 'react'
import "./Builder.scss"
import grapesjs from "grapesjs"
import gjsBlockBasic from 'grapesjs-blocks-basic';
import gjsForms from 'grapesjs-plugin-forms';
import plugin from 'grapesjs-table';



function Builder() {

    const [editor, setEditor] = useState(null);

    useEffect(() => {
        const editor = grapesjs.init({
            container: "#editor",
            plugins: [
                gjsBlockBasic,
                editor => gjsForms(editor),
            ],
            pluginsOpts: {
                gjsBlockBasic: {
                },
            },
            blockManager: {
                blocks: [
                    {
                        id: 'image',
                        label: 'Image',
                        select: true,
                        content: { type: 'image' },
                        media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
                    </svg>`,
                        activate: true,
                    },
                ],
            },
        });
        setEditor(editor);
    }, []);


    return (
        <>
            <div id="editor">
            </div>
        </>
    )
}

export default Builder
