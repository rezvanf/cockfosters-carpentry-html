 for (let i = 0; i < 3; i++) {

    // Get the modal
    var modal = document.getElementById("myModal"+i);
    console.log(modal.id)
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg"+i);
    console.log(img.id)
    
    var modalImg = document.getElementById("img01"+i);
    console.log(modalImg.id)
    var captionText = document.getElementById("caption"+i);
    console.log(captionText.id)

    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementById("close"+i);
    console.log(span)
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
}