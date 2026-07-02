import { useState } from 'react';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import LearningCard from './components/LearningCard';

// Struktur tipe data objek di dalam State
interface Student {
  id: number;
  name: string;
  school: string;
  classGroup: string;
}

interface Material {
  id: number;
  title: string;
  isDone: boolean;
}

export default function App() {
  // 1. Data State Siswa (Minimal 3 Siswa)
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: 'Bisma', school: 'SMK Telkom', classGroup: 'XI RPL 1' },
    { id: 2, name: 'Malik', school: 'SMK Negeri 4 Malang', classGroup: 'XI RPL 2' },
    { id: 3, name: 'Zidan', school: 'SMKN 2 Singosari', classGroup: 'XI RPL 1' },
  ]);

  // 2. Data State Materi Pembelajaran
  const [materials] = useState<Material[]>([
    { id: 1, title: 'Single Page Application (SPA)', isDone: true },
    { id: 2, title: 'JSX & Element Rendering', isDone: true },
    { id: 3, title: 'React Components (Parent & Child)', isDone: false },
    { id: 4, title: 'Props & TypeScript Typing', isDone: false },
  ]);

  // Fungsi pembantu untuk menguji fitur Empty State yang diminta HR
  const handleClearData = () => {
    setStudents([]);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px', fontFamily: 'Arial, sans-serif' }}>

      {/* Memanggil Komponen Header */}
      <Header title="Intern Profile Dashboard" />

      {/* Tombol Simulasi untuk Membuktikan Kriteria Empty State */}
      <div style={{ textAlign: 'right', marginBottom: '20px' }}>
        <button
          onClick={handleClearData}
          style={{
            padding: '8px 16px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 'bold'
          }}
        >
          Simulasi Kosongkan Data Siswa
        </button>
      </div>

      {/* Grid Layout Layout Utama */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>

        {/* KOLOM KIRI: LIST PROFILE */}
        <div>
          <h2 style={{ fontSize: '1.3rem', color: '#333', borderBottom: '2px solid #0070f3', paddingBottom: '8px', marginBottom: '16px' }}>
            Daftar Siswa Magang
          </h2>

          {/* Conditional Rendering: Jika kosong tampilkan pesan, jika ada lakukan map */}
          {students.length === 0 ? (
            <div style={{
              padding: '30px',
              textAlign: 'center',
              color: '#888',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              border: '1px dashed #ccc',
              fontWeight: '500'
            }}>
              Data belum tersedia.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {students.map((student) => (
                <ProfileCard
                  key={student.id} // Memenuhi syarat penggunaan unik key
                  name={student.name}
                  school={student.school}
                  classGroup={student.classGroup}
                />
              ))}
            </div>
          )}
        </div>

        {/* KOLOM KANAN: LEARNING LIST */}
        <div>
          <h2 style={{ fontSize: '1.3rem', color: '#333', borderBottom: '2px solid #0070f3', paddingBottom: '8px', marginBottom: '16px' }}>
            Progres Pembelajaran React
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {materials.map((material) => (
              <LearningCard
                key={material.id} // Memenuhi syarat penggunaan unik key
                title={material.title}
                isDone={material.isDone}
              />
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}