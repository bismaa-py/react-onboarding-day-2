import { useState } from 'react';

// Menentukan tipe data props menggunakan TypeScript Interface
interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
    return (
        <header style={{
            backgroundColor: '#0070f3',
            padding: '20px',
            color: 'white',
            borderRadius: '8px',
            marginBottom: '24px',
            textAlign: 'center'
        }}>
            <h1 style={{ margin: 0, fontSize: '1.8rem' }}>{title}</h1>
        </header>
    );
}