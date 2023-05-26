'use client';
export default function Button() {
  return (
    <div
      style={{
        border: '1px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
      }}
    >
      <button
        onClick={() => {
          console.log('oke sa la la laf la');
        }}
        style={{
          cursor: 'pointer',
          display: 'block',
          marginInline: 'auto',
          padding: '20px',
          background: 'orange',
        }}
      >
        ashdasjdhaskdhaksjdhaskjd
      </button>
    </div>
  );
}
