// Menentukan tipe data props materi
interface LearningProps {
    title: string;
    isDone: boolean;
}

export default function LearningCard({ title, isDone }: LearningProps) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 16px',
            backgroundColor: '#f9f9f9',
            borderLeft: `4px solid ${isDone ? '#4caf50' : '#ff9800'}`,
            borderRadius: '4px',
            marginBottom: '10px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
        }}>
            <span style={{ fontWeight: '500', color: '#333', fontSize: '0.95rem' }}>{title}</span>
            <span style={{
                fontSize: '0.75rem',
                padding: '4px 8px',
                borderRadius: '12px',
                backgroundColor: isDone ? '#e8f5e9' : '#fff3e0',
                color: isDone ? '#2e7d32' : '#e65100',
                fontWeight: 'bold'
            }}>
                {isDone ? 'Selesai ✅' : 'Mempelajari ⏳'}
            </span>
        </div>
    );
}