function bukaModal() {
  document.getElementById('modal').style.display = 'block';
}

document.getElementById('tutup').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
})

document.getElementById('kirim').addEventListener('click', () => {
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const pesan = document.getElementById('pesan').value;

  if (!nama) {
    return alert('Mohon isi masukan nama Anda');
  }

  if (!email) {
    return alert('Mohon masukan alamat email Anda');
  }

  if (!pesan) {
    return alert('Mohon masukan pesan.')
  }

  document.getElementById('modal').style.display = 'none';
  return alert('Terimakasih, kami akan segera menghubungi Anda.');
})