document.addEventListener('submit', (e) => {
  e.preventDefault();

  const vidPublicId = document.getElementById('vidpublicid').value;
  const cloudname = document.getElementById('cloudname').value;
  const captionfile = document.getElementById('captionurl').value;

  const iframe = `<iframe src="https://player.cloudinary.com/embed/?public_id=${vidPublicId}&cloud_name=${cloudname}&player[fluid]=true&player[controls]=true&source[text_tracks][captions][label]=English&source[text_tracks][captions][language]=en&source[text_tracks][captions][url]=${captionfile}&source[text_tracks][captions][default]=false&source[text_tracks][subtitles][label]=English&source[subtitles][language]=en&source[subtitles][url]=${captionfile}&source[subtitles][default]=false&source[source_types][0]=dash&source[source_types][1]=hls&source[source_types][2]=mp4" width="1024" height="576" allow="autoplay;fullscreen;encrypted-media;picture-in-picture" allowfullscreen frameborder="0"></iframe>`;

  document.getElementById('iframe').value = iframe;
});

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('copybtn').addEventListener('click', (e) => {
    document.querySelector('textarea').select();
    document.execCommand('copy');
  });
});
