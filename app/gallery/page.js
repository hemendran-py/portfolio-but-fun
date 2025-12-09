'use client';
import React from 'react';
import styles from './gallery.module.css';
import Image from 'next/image';

export default function Gallery() {
  const images1 = [
    '/images/img1.jpg',
    '/images/frnds2.png',
    '/images/macaw.jpg',

    '/images/cute.jpg',
    '/images/vc2.jpg',
    '/images/inithacrop.png',

    '/images/kanye.jpg',






  ];

  const images2 = [
    '/images/img7.jpg',
    '/images/venus.png',

    '/images/bike.jpg',
    '/images/img9.jpg',
    '/images/img10.jpg',
    '/images/goa.jpg',
    '/images/mom.jpg',



  ];

  return (
    <div className={styles.container}>
      {/* Column 1 */}
      <div className={styles.gridContainer}>
        {images1.map((img, index) => (
          <div
            key={index}
            className={styles.gridItem}
            style={{ animationDelay: `${index * 0.2}s` }} // Apply animation delay dynamically
          >
            <Image src={img} width={300} height={300} alt={`Gallery Image ${index + 1}`} priority />
          </div>
        ))}
      </div>

      {/* Column 2 */}
      <div className={styles.gridContainer}>
        {images2.map((img, index) => (
          <div
            key={index}
            className={styles.gridItem}
            style={{ animationDelay: `${(index + 1) * 0.2}s` }} // Continue delay sequence
          >
            <Image src={img} width={300} height={300} alt={`Gallery Image ${index + 1}`} priority />
          </div>
        ))}
      </div>
    </div>
  );
}
