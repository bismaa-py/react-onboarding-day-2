// Menentukan tipe data props siswa
interface ProfileProps {
    name: string;
    school: string;
    classGroup: string;
}

export default function ProfileCard({ name, school, classGroup }: ProfileProps) {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            textAlign: 'left'
        }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#ff4081', fontSize: '1.2rem' }}>{name}</h3>
            <p style={{ margin: '4px 0', color: '#555', fontSize: '0.9rem' }}>
                <strong>Sekolah:</strong> {school}
            </p>
            <p style={{ margin: '4px 0', color: '#555', fontSize: '0.9rem' }}>
                <strong>Kelas:</strong> {classGroup}
            </p>
        </div>
    );
}