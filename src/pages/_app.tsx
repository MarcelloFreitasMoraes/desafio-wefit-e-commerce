import { BaseLayout } from '@/global/components'
import '@/styles/globals.css'
import theme from '@/styles/theme/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                    },
                },
            })
    )
    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <BaseLayout>
                    <Component {...pageProps} />
                </BaseLayout>
            </QueryClientProvider>
        </ThemeProvider>
    )
}
