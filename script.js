document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('spotify-player');
    const buttons = document.querySelectorAll('.mood-btn');

    // CONFIGURACIÓN: Define aquí tus playlists para cada estado de ánimo.
    // IMPORTANTE: Usa la URL de 'Embed' de Spotify. 
    // Para obtenerla: Click derecho en Playlist -> Compartir -> Insertar playlist -> Copiar el src del código.
    // Ejemplo: https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M

    const playlists = {
        // PEGA AQUÍ TU ENLACE DE SPOTIFY en lugar de los enlaces de ejemplo
        coding: 'https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator', // Ejemplo: Lofi Beats
        exams: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator',  // Ejemplo: Chill Lofi Study Beats
        gym: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP?utm_source=generator',    // Ejemplo: Beast Mode
        chill: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6?utm_source=generator'   // Ejemplo: Chill Hits
    };

    // Playlist por defecto al cargar (puedes cambiar 'coding' por otro mood inicial)
    const initialMood = 'coding';

    // Función para cargar playlist
    function loadPlaylist(mood) {
        if (playlists[mood]) {
            player.src = playlists[mood];

            // Actualizar estado visual de los botones
            buttons.forEach(btn => {
                if (btn.dataset.mood === mood) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        } else {
            console.error('Mood no encontrado:', mood);
        }
    }

    // Inicializar
    loadPlaylist(initialMood);

    // Event listeners para los botones
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const mood = btn.dataset.mood;
            loadPlaylist(mood);
        });
    });
});
