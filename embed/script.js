document.addEventListener('submit', (e) => {
  e.preventDefault();

  const vidPublicId = document.getElementById('vidpublicid').value;
  const cloudname = document.getElementById('cloudname').value;
  const captionfile = document.getElementById('captionurl').value;

  const iframe = `<iframe src="https://player.cloudinary.com/embed/?public_id=${vidPublicId}&cloud_name=${cloudname}&player[fluid]=true&player[controls]=true&player[playbackRates][0]=0.5&player[playbackRates][1]=0.75&player[playbackRates][2]=1.0&player[playbackRates][3]=1.25&player[playbackRates][4]=1.5&player[playbackRates][5]=1.75&source[text_tracks][captions][label]=English&source[text_tracks][captions][language]=en&source[text_tracks][captions][url]=${captionfile}&source[text_tracks][captions][default]=true&source[source_types][0]=dash&source[source_types][1]=hls&source[source_types][2]=mp4" width="1024" height="576" allow="autoplay;fullscreen;encrypted-media;picture-in-picture" allowfullscreen frameborder="0"></iframe>`;

  document.getElementById('iframe').value = iframe;
});

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('copybtn').addEventListener('click', (e) => {
    document.querySelector('textarea').select();
    document.execCommand('copy');
  });
});

// help seeing the items in the embed
// player.cloudinary.com/embed/?
// public_id=elephants&
// cloud_name=demo&
// player[fluid]=true&
// player[controls]=true&
// source[textTracks][captions][label]=English&
// source[textTracks][captions][language]=en&
// source[textTracks][captions][url]=https://cloudinary-res.cloudinary.com/raw/upload/v1644340978/training/dam-internal-training/sales/dam-sales-1-captions.vtt&
// source[textTracks][captions][default]=true&
// source[sourceTypes][0]=mp4