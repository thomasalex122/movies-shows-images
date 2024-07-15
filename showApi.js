

const fetchImages = async () => {
    const showId = document.getElementById('show-id').value ;
    if (!showId){
        alert("please enter a show id");
        return ;

    }

    try{
        const response = await axios.get(`https://api.tvmaze.com/shows/${showId}/images`);
        const images = response.data ;
        displayImages(images);
    }
    catch(error)
    {
        console.error('error fetching images' , error);
    }


    
};

const displayImages = (images) => {
    const imageContainer = document.getElementById('images-container');
    imageContainer.innerHTML= '' ;
    for(const image of images)
    {
        const imgElement = document.createElement('img');
        imgElement.src = image.resolutions.original.url ;
        imgElement.alt = image.type;
        imageContainer.appendChild(imgElement);

    }
};