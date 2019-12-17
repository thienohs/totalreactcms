  
import React from 'react'
import Link from 'next/link'
import { Button, ButtonGroup, AnchorButton, Tab, Tabs, Menu, MenuItem } from "@blueprintjs/core";
// import Head from 'next/head';
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
  
    render () {
        return (
        <html>
            <Head>
                {/* <title>This is react</title> */}
                {/* <link href="/node_modules/normalize.css/normalize.css" rel="stylesheet" /> */}
                {/* <link href="/css/blueprint-icons.css" rel="stylesheet" />
                <link href="/css/blueprint.css" rel="stylesheet" /> */}
                {/* <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=10" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <meta name="robots" content="all,follow" />
                <link rel="stylesheet" href="//cdn.componentator.com/spa.min@14.css" />
                <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,700" />
                <link rel="stylesheet" href="@{global.css}" />
                <script src="//cdn.componentator.com/spa.min@14.js"></script> */}
                {"@{import('meta', 'head', 'default.css', 'default.js', 'favicon.ico')}"}
                {/* <script>var LOGGED = +'{'@{if user}'}1{'@{else}0'}{'@{fi}'}';</script> */}
            </Head>
            <body data-jc="exec,binder,modificator">
                <Main />
                <NextScript />
            </body>
        </html>
        )
    }
}

