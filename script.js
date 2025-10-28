function changeSection(blockToShow) {
    const blokBaza = document.getElementById('b1')
    const baza = document.getElementById('s1')
    const blokOpisy = document.getElementById('b2')
    const opisy = document.getElementById('s2')
    const blokGaleria = document.getElementById('b3')
    const galeria = document.getElementById('s3')
    if (blockToShow == 'baza') {
        blokBaza.style.backgroundColor = 'mistyrose'
        baza.style.display = 'block'
        blokOpisy.style.backgroundColor = '#ffaea5'
        opisy.style.display = 'none'
        blokGaleria.style.backgroundColor = '#ffaea5'
        galeria.style.display = 'none'
    }
    if (blockToShow == 'opisy') {
        blokBaza.style.backgroundColor = '#ffaea5'
        baza.style.display = 'none'
        blokOpisy.style.backgroundColor = 'mistyrose'
        opisy.style.display = 'block'
        blokGaleria.style.backgroundColor = '#ffaea5'
        galeria.style.display = 'none'
    }
    if (blockToShow == 'galeria') {
        blokBaza.style.backgroundColor = '#ffaea5'
        baza.style.display = 'none'
        blokOpisy.style.backgroundColor = '#ffaea5'
        opisy.style.display = 'none'
        blokGaleria.style.backgroundColor = 'mistyrose'
        galeria.style.display = 'block'
    }
}