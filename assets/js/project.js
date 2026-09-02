/*=============== DYNAMIC WORK/PROJECT LOOP ===============*/
const projects = [
  {
    id: "01",
    name: "Customer Segmentation & Retention Analytics",
    image: "assets/img/customer-segmentation.png",
    link: "https://drive.google.com/file/d/10yyevFBdAdCP7UOas6BcWw7m1VvkHb0d/view?usp=sharing",
    description:
      "Analisis RFM & Cohort Retention untuk memetakan perilaku dan retensi pelanggan Gayanara. Menyajikan insight mendalam untuk mengidentifikasi segmen churn, mengevaluasi loyalitas, serta mengoptimalkan kampanye CRM dan win-back yang tepat sasaran.",
  },
  {
    id: "02",
    name: "Strategi Optimasi Kinerja Bisnis & Operasional",
    image: "assets/img/kinerja-bisnis.png",
    link: "https://drive.google.com/file/d/1itkGk799tNdueNk9kPhzD9RaRHEuhXPU/view?usp=sharing",
    description:
      "Analisis data menyeluruh pada operasional Gayanara meliputi sales, inventory, promo, dan logistik. Menghasilkan rekomendasi strategis untuk restock produk prioritasi, eliminasi dead stock, pemetaan pasar potensial, serta penekanan cancellation & return rate.",
  },
  {
    id: "03",
    name: "Strategi Data Quality & Standardisasi Kategori",
    image: "assets/img/data-quality.png",
    link: "https://drive.google.com/file/d/10n0K-zNvwRY2PA0Q0tKujr6PcEliXygV/view?usp=sharing",
    description:
      "Kerangka audit data operasional Gayanara untuk memperbaiki masalah kualitas data. Berfokus pada standardisasi ketidaksesuaian kategori produk, penanganan missing value, pembersihan duplikasi pelanggan, serta validasi integritas transaksi demi pelaporan bisnis yang akurat.",
  },
  {
    id: "04",
    name: "E-Commerce Sales Performance & Campaign Analytics Dashboard",
    image: "assets/img/visual-project.png",
    link: "https://drive.google.com/file/d/10yyevFBdAdCP7UOas6BcWw7m1VvkHb0d/view?usp=sharing",
    description:
      "Dashboard interaktif untuk monitoring penjualan e-commerce 2022. Menyajikan tren campaign lewat metrik Value Sales, Net Profit, dan AOV, serta analisis khusus produk Mobile & Tablet menggunakan pembayaran JazzWallet.",
  },
  {
    id: "05",
    name: "E-Commerce End-to-End Sales Performance & Campaign Analytics",
    image: "assets/img/python-project.png",
    link: "https://drive.google.com/file/d/1itkGk799tNdueNk9kPhzD9RaRHEuhXPU/view?usp=sharing",
    description:
      "Analisis data Tokopaedi menggunakan Python di Google Colab untuk mengevaluasi tren produk terlaris, penurunan penjualan inventaris, segmentasi pelanggan belum bayar, serta efektivitas campaign kuartal empat berbasis transaksi harian weekdays vs weekends.",
  },
  {
    id: "06",
    name: "E-Commerce Revenue & Customer Funnel Analytics via SQL",
    image: "assets/img/sql-project.png",
    link: "https://drive.google.com/file/d/10n0K-zNvwRY2PA0Q0tKujr6PcEliXygV/view?usp=sharing",
    description:
      "Analisis data transaksi menggunakan SQL untuk mengevaluasi tren sales bulanan, volume kategori tahunan, performa channel penjualan, konversi funnel event organic, serta retensi pendaftaran pelanggan baru untuk optimasi onboarding.",
  },
];
const projectWrapper = document.getElementById("project-wrapper");

if (projectWrapper) {
  projects.forEach((project) => {
    const articleHTML = `
      <article class="work__card swiper-slide">
        <a href="${project.link}" target="_blank" class="work__link">
          <img class="work__img" src="${project.image}" alt="${project.name} preview" />

          <div class="work__arrow">
            <i class="ri-arrow-right-up-line"></i>
          </div>
        </a>

        <div class="work__data">
          <span class="work__number">${project.id}</span>
          <h3 class="work__name">${project.name}</h3>
          <p class="work__description">${project.description}</p>
        </div>
        <div class="blob-big"></div>
      </article>
    `;

    projectWrapper.innerHTML += articleHTML;
  });
}

/*=============== DYNAMIC ACHIEVEMENTS LOOP ===============*/
const achievements = [
  {
    id: "01",
    name: "Database Administrator Internship",
    image: "assets/img/dba-achievement.png",
    link: "https://drive.google.com/file/d/1K85QNfkVQYwA-cvQNRdAbEOZunvPSJTt/view?usp=sharing",
    description:
      "Berhasil menyelesaikan Program Pemagangan Lulusan Perguruan Tinggi oleh KEMNAKER di PT Bahana Bhumiphala Persada sebagai Database Administrator dengan predikat BAIK.",
  },
  {
    id: "02",
    name: "Best Final Project - Data Analysis Bootcamp",
    image: "assets/img/da-achievement.png",
    link: "https://drive.google.com/file/d/1sIo7w32XKBMgLG27XDrSEuhA627axwZA/view?usp=sharing",
    description:
      "Meraih penghargaan 'Best Top 3 Final Project' dalam Data Analysis Fullstack Intensive Bootcamp di MySkill. Berhasil menyelesaikan proyek analisis data menggunakan SQL, Python, dan visualisasi data dengan Google Data Studio",
  },
  {
    id: "03",
    name: "Mobile Development Graduate - Bangkit Academy",
    image: "assets/img/bangkit-achievement.png",
    link: "https://drive.google.com/file/d/1B4VEa1FRnlkou3ItlTX31g78lMRYpRl4/view?usp=sharing",
    description:
      "Berhasil menyelesaikan program akselerasi karier teknologi besutan Google, GoTo, dan Traveloka dengan spesialisasi Mobile Development melalui skema MSIB Kampus Merdeka.",
  },
];

const achievementWrapper = document.getElementById("achievement-wrapper");

if (achievementWrapper) {
  achievements.forEach((achievement) => {
    const articleHTML = `
      <article class="achievement__card swiper-slide">
        <a href="${achievement.link}" target="_blank" class="achievement__link">
          <img class="achievement__img" src="${achievement.image}" alt="${achievement.name} preview" />

          <div class="achievement__arrow">
            <i class="ri-arrow-right-up-line"></i>
          </div>
        </a>

        <div class="achievement__data">
          <span class="achievement__number">${achievement.id}</span>
          <h3 class="achievement__name">${achievement.name}</h3>
          <p class="achievement__description">${achievement.description}</p>
        </div>
        <div class="blob-big"></div>
      </article>
    `;

    achievementWrapper.innerHTML += articleHTML;
  });
}
