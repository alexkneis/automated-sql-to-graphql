import {ServerStyleSheets} from '@material-ui/styles';
import Document, {DocumentContext} from 'next/document';
import React from 'react';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const styledComponentsSheet = new ServerStyleSheet();
        const materialSheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        styledComponentsSheet.collectStyles(
                            materialSheets.collect(<App {...props} />)
                        )
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <React.Fragment>
                        {initialProps.styles}
                        {materialSheets.getStyleElement()}
                        {styledComponentsSheet.getStyleElement()}
                    </React.Fragment>
                )
            };
        } finally {
            styledComponentsSheet.seal();
        }
    }
}
