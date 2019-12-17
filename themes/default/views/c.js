  
import React from 'react'
import Link from 'next/link'
import { Button } from "@blueprintjs/core";
import Head from 'next/head';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';

export default () => (
    <div>
        <Head>
            <title>This is react</title>
            {/* <link href="/node_modules/normalize.css/normalize.css" rel="stylesheet" /> */}
            {/* <link href="/css/blueprint-icons.css" rel="stylesheet" />
            <link href="/css/blueprint.css" rel="stylesheet" /> */}
        </Head>
        <Button intent="success" text="This is react (Styled by blueprint)" onClick={()=>{}} />
    </div>
)