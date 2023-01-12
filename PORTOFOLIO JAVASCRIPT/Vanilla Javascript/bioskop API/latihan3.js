// urutan Algoritma
// 1. tangkap object API dan pidahkan ke console (object)
// 2. mengubah object di console ke array
// 3. panggil array dengan looping dan sambungkan element card html dengan API Javascript
// 4. membuat modal dan menyambungkan data-targetnya ke button cards "show Detail"
// 5. mengambil data imdbID pada API saat button di klik dan mencetak id nya di console.log
// 6. menyambungkan id API dengan list group di html
// 7. buat input search lalu sambungkan button dan value input ke API
$(".button-search").on("click", function () {
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=86150a8f&s=" + $(".input-keyword").val(),
    success: (result) => {
      const Movies = result.Search;
      let cards = " ";
      Movies.forEach((m) => {
        cards += gallerCards(m);
      });
      $(".movie-container").html(cards);
      $(".detail-button").on("click", function () {
        $.ajax({
          url: "http://www.omdbapi.com/?apikey=86150a8f&i=" + $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = detailMovie(m);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responText);
    },
  });
});

function gallerCards(m) {
  return `  <div class="col-md-4">
<div class="card">
  <img src="${m.Poster}" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${m.Title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
    <a href="#" class="btn btn-primary detail-button" data-bs-toggle="modal" data-bs-target="#modalDetailButton" data-imdbid=${m.imdbID}>show Detail</a>
  </div>
</div>
</div>`;
}
function detailMovie(m) {
  return `<div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <img src="${m.Poster}" alt="Poster" class="img-fluid"/>
      </div>
      <div class="col">
        <ul class="list-group">
          <li class="list-group-item">${m.Title} ${m.Year}</li>
          <li class="list-group-item"><strong>Director :</strong>${m.Director}</li>
          <li class="list-group-item"><strong>Actors :</strong>${m.Actors}</li>
          <li class="list-group-item"><strong>Writer :</strong>${m.Writer}</li>
          <li class="list-group-item"><strong>Plot :</strong><br>${m.Plot}</li>
        </ul>
      </div>
    </div>
  </div>`;
}
