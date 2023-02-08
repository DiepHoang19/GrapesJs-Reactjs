import React, { useEffect, useState } from 'react'
import "./Builder.scss"
import grapesjs from "grapesjs"
import gjsBlockBasic from 'grapesjs-blocks-basic';
import gjsForms from 'grapesjs-plugin-forms';
import customCodePlugin from 'grapesjs-custom-code';
import pluginCountdown from 'grapesjs-component-countdown';
import plugin from 'grapesjs-preset-newsletter';


function Builder() {

    const [editor, setEditor] = useState(null);

    useEffect(() => {
        const editor = grapesjs.init({
            container: "#editor",
            plugins: [
                gjsBlockBasic,
                editor => gjsForms(editor),
                editor => customCodePlugin(editor),
                editor => pluginCountdown(editor),
                editor => plugin(editor),
            ],
            pluginsOpts: {
                gjsBlockBasic: {
                },
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
