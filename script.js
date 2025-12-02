function setTheme(themeName, btnElement) {
    // 1. Ubah Tema Body
    document.body.className = '';
    if (themeName !== 'default') {
        document.body.classList.add(themeName);
    }

    // 2. Logika Pindah Tombol Aktif (UI)
    
    // a. Cari semua tombol di dalam theme-switch
    const buttons = document.querySelectorAll('.theme-switch button');
    
    // b. Hapus class 'active' dari SEMUA tombol
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // c. Tambahkan class 'active' HANYA ke tombol yang diklik (btnElement)
    if (btnElement) {
        btnElement.classList.add('active');
    }
}