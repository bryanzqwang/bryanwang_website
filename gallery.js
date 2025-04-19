document.addEventListener("DOMContentLoaded", function() {
  // Array of photo URLs
  const photoUrls = [
    "/portfolio_photos/Graduation_Photos/ellie_sunny[wide].jpeg",
    "/portfolio_photos/Graduation_Photos/ellie_sunny2.jpeg",
    "/portfolio_photos/Graduation_Photos/ellie_sunny3.jpeg",
    "/portfolio_photos/Graduation_Photos/ellie_sunny4.jpeg",
    "/portfolio_photos/Graduation_Photos/ellie_thesis.jpeg",
    "/portfolio_photos/Graduation_Photos/jonathan_back.jpeg",
    "/portfolio_photos/Graduation_Photos/jonathan_nicky.jpeg",
    "/portfolio_photos/Graduation_Photos/jonathan_thumbs_up.jpeg",
    "/portfolio_photos/Graduation_Photos/nicky.jpeg",
    "/portfolio_photos/Graduation_Photos/katie_family.jpeg",
    "/portfolio_photos/Graduation_Photos/katie_stella.jpeg",
    "/portfolio_photos/Graduation_Photos/katie_stella2.jpeg",
    "/portfolio_photos/Graduation_Photos/katie.jpeg",
    "/portfolio_photos/Graduation_Photos/katie2.jpeg",
    "/portfolio_photos/Graduation_Photos/katie[wide].jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Abigail_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Breanna_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Cynthia_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Grace_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Irene_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Jessica_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Joy_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Katherine24_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Katherine26_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Khoa_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Le_Naya_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Mackenzie_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Michael_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Michelle_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Michelle23_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Naomi_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Osvaldo_edit-Edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Stephanie_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Tiffany_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Tracie_edit.jpeg",
    "/portfolio_photos/Six14_Fall'22_Portraits_EDITED/Xuanying_edit.jpeg"
  
    // Add more photo URLs here
  ];

  const galleryContainer = document.getElementById("gallery");

  // Loop through photo URLs and create image elements
  photoUrls.forEach(url => {
    const photoDiv = document.createElement("div");

    if (url.includes("wide")) { // landscape
      photoDiv.classList.add("col-md-8");
    } else {
      photoDiv.classList.add("col-md-4"); // portrait
    }

    const img = document.createElement("img");
    img.classList.add("img-fluid", "portfolio-photo");
    img.src = url;

    photoDiv.appendChild(img);
    galleryContainer.appendChild(photoDiv);
  });
});



// ---------- Functions ---------- //

function toggleContent() {
  var contents = document.querySelectorAll('.main-content, .article-main-content, .footer-bg');
  contents.forEach(function(content) {
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });
}