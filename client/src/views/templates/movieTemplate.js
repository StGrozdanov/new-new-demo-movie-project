export const movieTemplate = (data) => html`
<div class="card mb-4">
    <img class="card-img-top" src="${data.img}" alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${data.title}</h4>
    </div>
    <div class="card-footer">
        <a href="/details/${data._id}" type="button" class="btn btn-info">Details</a>
    </div>
</div>
`;