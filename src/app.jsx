import React from 'react'
import { Header } from './shared/header/header'
import { ThemeProvider } from 'styled-components';
import { baseTheme } from './theme';

export const App = () => {
    return (
        <ThemeProvider theme={baseTheme}>
            <Header />
            <main>
                <contact>TITULO 1</contact>
                <contact>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, incidunt quo. Fugit modi ducimus molestiae, nemo accusamus assumenda, quidem, adipisci facilis natus itaque illum officia dolorum tempora minus ad placeat!</contact>
                <contact></contact>
                <contact></contact>
            </main>
        </ThemeProvider>
    )
}
