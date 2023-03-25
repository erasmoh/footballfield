import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
    title: 'Football Field Draw',
    description: 'Mix your players and get your teams',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
